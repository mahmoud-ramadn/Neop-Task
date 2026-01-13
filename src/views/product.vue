<template>
  <div class="min-h-screen  py-8">
    <LoadingSpinner v-if="loading" />

    <ErrorMessage v-else-if="error" :message="error.message" />

    <div v-else-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-xl  overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <ProductImageGallery
            :thumbnail="product.thumbnail"
            :images="product.images"
            :title="product.title"
          />
          <div>
            <ProductInfo
              :brand="product.brand"
              :category="product.category"
              :title="product.title"
              :rating="product.rating"
              :reviews-count="product.reviews.length"
              :price="product.price"
              :discount-percentage="product.discountPercentage"
              :availability-status="product.availabilityStatus"
              :shipping-information="product.shippingInformation"
              :description="product.description"
              :tags="product.tags"
            />

            <ProductDetailsGrid
              :stock="product.stock"
              :weight="product.weight"
              :dimensions="product.dimensions"
              :sku="product.sku"
            />

            <ProductActionButtons />

            <ProductAdditionalInfo
              :warranty-information="product.warrantyInformation"
              :return-policy="product.returnPolicy"
              :minimum-order-quantity="product.minimumOrderQuantity"
            />
          </div>
        </div>
        <ProductReviews :reviews="product.reviews" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProduct } from "./../composables/useproduct";

const route = useRoute();
const { data: product, loading, error, fetchProduct } = useProduct();

fetchProduct(route.params.id as string);
</script>
