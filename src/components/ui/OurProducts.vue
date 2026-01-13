<template>
  <div class="md:mt-16 mt-9">
    <div class="text-center space-y-2.5">
      <h3 class="text-lg text-secondary">Our products</h3>
      <p class="text-3xl font-bold text-secondary">Special to Try</p>
    </div>

    <div>
      <CategoriesSkeleton v-if="loading" :count="6" />
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else class="max-w-[950px] mx-auto px-1 mt-10">
        <SwiperWrapper
          :items="data"
          :options="categoryOptions"
          customClass="categories-swiper"
          :arrows="false"
        >
          <template #default="{ item }">
            <button
              type="button"
              @click="handleSelectCategory(item)"
              :class="[
                'bg-white w-full h-full cursor-pointer px-4 py-2 rounded-lg transition-all duration-300',
                currentCategory === item ? 'active-category' : '',
              ]"
            >
              {{ item }}
            </button>
          </template>
        </SwiperWrapper>
      </div>
    </div>

    <div class="mt-10 px-4 container mx-auto">
      <div v-if="productsLoading" class="text-center py-8">
        <div
          class="animate-spin inline-block w-8 h-8 border-4 border-secondary border-t-transparent rounded-full"
        ></div>
        <p class="mt-2 text-secondary">Loading products...</p>
      </div>
      <div v-else-if="productsError" class="text-center py-8 text-red-500">
        Error: {{ productsError.message }}
      </div>
      <div v-else-if="products">
        <SwiperWrapper
          :items="products"
          :options="productsOptions"
          customClass="products-swiper"
          :arrows="false"
        >
          <template #default="{ item }">
            <ProductCard :product="item" />
          </template>
        </SwiperWrapper>
      </div>
      <div v-else class="text-center py-8 text-gray-500">
        No products found in this category
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCategories } from "../../composables/useCategories";
import { useProducts } from "../../composables/useProducts";
const currentCategory = ref("");
const { data, loading, error } = useCategories();
const {
  data: products,
  loading: productsLoading,
  error: productsError,
  useCatgoryiesProducts,
} = useProducts();

const handleSelectCategory = (category: string) => {
  currentCategory.value = category;
  useCatgoryiesProducts(currentCategory.value);
};

const categoryOptions = {
  slidesPerView: 6,
  loop: false,
  spaceBetween: 10,
  autoPlay: false,
  pagination: false,
  centeredSlides: false,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
};

const productsOptions = {
  slidesPerView: 4,
  loop: false,
  spaceBetween: 20,
  autoPlay: false,
  pagination: false,
  navigation: true,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};
</script>

<style>
.categories-swiper .swiper-slide {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.categories-swiper button {
  transition: all 0.3s ease;
}

.categories-swiper button:hover {
  border-color: #1e71a6;
  transform: translateY(-2px);
}

.categories-swiper button.active-category {
  border-bottom: #1e71a6 solid 1px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(30, 113, 166, 0.3);
  border-color: #1e71a6;
}

/* Products swiper styles */
.products-swiper .swiper-slide {
  height: auto;
  display: flex;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Loading animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Swiper pagination customization */
.products-swiper .swiper-pagination-bullet {
  background: #1e71a6;
  opacity: 0.5;
}

.products-swiper .swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
