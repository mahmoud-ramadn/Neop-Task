<template>
  <router-link
    :to="`/product/${product.id}`"
    class="w-full relative  block"
  >
    <span
      v-if="product.discountPercentage"
      class="bg-[#F9EDBD] rounded-lg py-2 px-3 text-secondary flex items-center justify-center absolute left-10 top-10 z-30"
    >
      {{ product.discountPercentage }} %
    </span>

    <div
      class="w-full lg:h-[360px] md:h-[233px] rounded-tr-[20%] rounded-tl-[20%] p-2 rounded-bl-[30%] rounded-br-[30%] bg-primary group transition-all duration-300"
    >
      <div
        class="relative overflow-hidden  h-full rounded-tr-[20%] rounded-tl-[20%] rounded-bl-[30%] rounded-br-[30%] border-l-10 border-t-10 border-secondary"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="w-full object-cover bg-white h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>

    <div class="flex items-center flex-col mt-10 justify-center gap-x-1">
      <p class="text-center font-medium text-secondary">
        {{ product.title }}
      </p>
      <p class="text-center font-medium text-violet-100 py-3">
        {{ product.brand }}
      </p>
      <div class="flex items-center gap-x-1">
        <SvgIcon
          v-for="n in Math.floor(product.rating)"
          :key="n"
          name="Star 1"
          class="size-5"
        />
      </div>
    </div>
  </router-link>
</template>
<script setup lang="ts">
  interface ProductCardProps {
    id: number
    title: string
    brand: string
    thumbnail: string
    discountPercentage?: number
    rating: number
  }
  
  defineProps<{
    product: ProductCardProps
  }>()
  </script>
  