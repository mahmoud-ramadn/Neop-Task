<template>
  <div class="max-w-[950px] mx-auto px-1 mt-10">
    <SwiperWrapper
      :items="skeletonItems"
      :options="options"
      customClass="categories-swiper"
      :arrows="false"
    >
      <template #default="{ item }">
        <div
          :key="item"
          class="bg-gray-200 rounded-lg animate-pulse h-10"
          :class="item"
        ></div>
      </template>
    </SwiperWrapper>
  </div>
</template>

<script setup lang="ts">
const skeletonItems = [
  "w-32",
  "w-28",
  "w-36",
  "w-24",
  "w-40",
  "w-30",
  "w-34",
  "w-26",
  "w-38",
  "w-22",
];

const options = {
  slidesPerView: 6,
  loop: false,
  spaceBetween: 10,
  autoPlay: false,
  pagination: false,
  centeredSlides: false,
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
</script>
