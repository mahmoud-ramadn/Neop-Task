<template>
  <div class="overflow-hidden">
    <img
      src="../../assets/images/col.webp"
      alt="col"
      class="md:absolute lg:block hidden left-0 -z-10"
    />

    <img
      src="/src/assets/images/mask.webp"
      alt="mask"
      class="absolute right-0 top-0 -z-10 lg:block"
      loading="lazy"
    />

    <section
      class="container mx-auto px-4 md:px-6 py-8 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between min-h-[600px] lg:min-h-[800px] relative"
    >
      <div class="w-full lg:w-1/2 relative z-10 mb-10 lg:mb-0 lg:pr-8">
        <div class="max-w-full lg:max-w-[400px]">
          <h1
            class="text-primary font-quicksand font-bold text-5xl md:text-7xl lg:text-8xl relative leading-tight"
          >
            <svg-icon
              name="seed"
              class="inline-block absolute md:left-5 left-3 md:top-13.5 top-7 md:size-6 size-3 text-secondary"
            />
            coffee &shop 7
          </h1>
          <p class="text-secondary text-lg md:text-xl mt-4 md:mt-6">
            Get your ordered (better) coffee delivered to you if you want.
          </p>
          <div class="flex items-center space-x-3 mt-6 md:mt-8">
            <button
              class="border border-secondary text-secondary font-semibold py-3 px-6 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 flex items-center"
            >
              <span class="font-medium"> SHOP 20% OFF </span>
              <svg-icon name="ArrowDownRight" class="ml-2 size-4" />
            </button>
            <SvgIcon name="bag" class="size-10 md:size-12 text-secondary" />
          </div>
        </div>
      </div>
    </section>
    <div
      class="2xl:w-[1200px] lg:w-[800px] md:w-[600px]   mx-auto w-full md:top-1/4 sm:top-[30%] top-[40%] absolute right-0 "
    >
      <SwiperWrapper 
        customClass="hero-swiper"
        :items="products" 
        :options="options" 
        :arrows="true"
      >
        <template #default="{ item }">
          <div class="flex flex-col items-center    justify-center">
            <img :src="item?.image" :alt="item?.name" class="rounded-lg" />
          </div>
        </template>
      </SwiperWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import one from "@/assets/images/coffe-seeds.webp";
import two from "@/assets/images/coffe-two.webp";
const products = [
  { id: 1, name: "Espresso", image: one },
  { id: 2, name: "Cappuccino", image: one },
  { id: 3, name: "Latte", image: two },
  { id: 4, name: "Latte", image: one },
  { id: 5, name: "Latte", image: two },
  { id: 6, name: "Latte", image: one },
  { id: 7, name: "Latte", image: two },
];
const options = {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 0,
  autoplay:false,
  // autoPlay: { delay: 3000, disableOnInteraction: false },
  pagination: false,
  centeredSlides: true,
};
</script>

<style>

.hero-swiper .swiper-slide {
  transition: transform 0.4s ease, background-color 0.4s ease, opacity 0.4s ease;
}

.hero-swiper .swiper-slide-active {
  margin-top: 20px;
  transform: scale(1.1);
  background-color: #1e71a6;
  border-radius: 50%;
  z-index: 30;
  opacity: 1;
}

.hero-swiper .swiper-slide:not(.swiper-slide-active) {
  opacity: 0.75;
  transform: scale(0.7);
  background-color: #6f4336;
  z-index: 1;
  border-radius: 50%;
}
</style>