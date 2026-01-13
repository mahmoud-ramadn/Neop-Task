<template>
  <div class="p-10">
    <SwiperWrapper
      :slides="products"
      :slidesPerView="3"
      :loop="true"
      :autoplay="{ delay: 2000 }"
      :breakpoints="customBreakpoints"
      :showPagination="false"
      :showNavigation="false"
    >
      <template #slide="{ slide }">
        <div class="p-4 border rounded">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.content }}</p>
        </div>
      </template>
    </SwiperWrapper>

    <div class=" bg-red-900">
      <Vue3Marquee
        speed="100"
        :clone="true"
        :loop="0"
        :pause-on-hover="true"
        class="vue3-marquee w-full flex justify-center gap-x-16 overflow-hidden"
      >
        <div class="flex mx-3 w-full gap-x-20">
          <div
            v-for="(item, index) in TextsMarquee"
            :key="index"
            class="cursor-grab lg:cursor-pointer py-3 flex items-center gap-2"
          >
            <span class="size-2 rounded-full bg-white"></span>
            <p class="text-base font-medium text-white">{{ item?.text }}</p>
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'

const TextsMarquee = [
  {
    id: "1",
    text: "فلاتر محطات",
  },
  {
    id: "2",
    text: "ثلاجات للمستشفيات",
  },
  {
    id: "3",
    text: "مبردات",
  },
  {
    id: "4",
    text: "ثلاجات كاونتر",
  },
  {
    id: "5",
    text: "فلاتر محطات",
  },
];
const products = [
  { id: 1, title: "Slide 1", content: "Content 1" },
  { id: 2, title: "Slide 2", content: "Content 2" },
  { id: 3, title: "Slide 3", content: "Content 3" },
  { id: 4, title: "Slide 4", content: "Content 4" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
  { id: 5, title: "Slide 5", content: "Content 5" },
];

const customBreakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
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
    spaceBetween: 25,
  },
};
</script>
