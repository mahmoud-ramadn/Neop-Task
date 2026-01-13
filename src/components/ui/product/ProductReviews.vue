<template>
    <div class="border-t border-gray-200 px-8 py-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Customer Reviews
      </h2>
  
      <div v-if="reviews.length === 0" class="text-center py-8">
        <p class="text-gray-500">No reviews yet</p>
      </div>
  
      <div v-else class="space-y-6">
        <SwiperWrapper
          :items="reviews"
          :options="productOptions"
          customClass="products-swiper"
          :arrows="false"
        >
          <template #default="{ item }">
            <div
              :key="item?.data"
              class="w-full md:py-7 md:px-8 p-6 rounded-2xl border "
            >
              <SvgIcon
                v-for="star in item.rating"
                :key="'full-' + star"
                name="Star 1"
                width="18px"
                height="18px"
                style="color: #ffc633"
              />
              <h3 class="md:font-bold md:text-lg font-medium">
                {{ item?.reviewerName }}
                <span class="px-1">
                  <Icon
                    name="material-symbols:verified"
                    width="20px"
                    height="20px"
                    style="color: #01ab31"
                    class=""
                /></span>
              </h3>
              <p class="md:text-base text-sm md:mt-3 mt-2 text-black/60">
                {{ item?.comment }}
              </p>
              <p
                class="font-medium md:text-base text-sm md:mt-6 mt-4 text-black/60"
              >
                {{ item?.date }}
              </p>
            </div>
          </template>
        </SwiperWrapper>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
  
  defineProps<{
    reviews: Review[];
  }>();
  
  const productOptions = {
    slidesPerView: 4,
    loop: false,
    spaceBetween: 10,
    autoplay: false,
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
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };
  </script>