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
      class="container mx-auto  px-4 md:px-6 py-8 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center  min-h-[700px] lg:min-h-[800px] relative"
    >
      <motion.div
        class="w-full lg:w-1/2 relative z-10 md:mb-10 lg:mb-0 lg:pe-8"
        :while-in-view="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        <div class="max-w-full lg:max-w-[400px]">
          <h1
            class="text-primary font-quicksand font-bold text-5xl md:text-7xl lg:text-8xl relative leading-tight"
          >
            <svg-icon
              name="seed"
              class="inline-block absolute md:start-5 start-3 md:top-13.5 top-7 md:size-6 size-3 text-secondary"
            />
            coffee &shop 7
          </h1>

          <motion.p
            class="text-secondary text-lg md:text-xl mt-4 md:mt-6"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.2 }"
          >
            {{ $t("hero.subtitle") }}
          </motion.p>

          <motion.div
            class="flex items-center space-x-3 rtl:space-x-reverse mt-6 md:mt-8"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.4 }"
          >
          </motion.div>
          <motion.div
            class="flex items-center space-x-3 mt-6 md:mt-8"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.4 }"
          >
            <button
              class="border border-secondary text-secondary font-semibold py-3 px-6 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 flex items-center"
            >
              <span class="font-medium">{{ $t("hero.cta") }}</span>
              <svg-icon name="ArrowDownRight" class="ml-2 size-4" />
            </button>
            <SvgIcon name="bag" class="size-10 md:size-12 text-secondary" />
          </motion.div>
        </div>
      </motion.div>
    </section>

    <motion.div
      class="2xl:w-[1200px] lg:w-[800px] md:w-[600px]  mx-auto w-full md:top-1/4 sm:top-[30%] max-sm:top-[42%] top-[42%] absolute right-0"
      :initial="{ opacity: 0, scale: 0.9 }"
      :while-in-view="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, ease: 'easeOut', delay: 0.6 }"
    >
      <SwiperWrapper
        customClass="hero-swiper sw"
        :items="products"
        :options="options"
        :arrows="true"
      >
        <template #default="{ item }">
          <motion.div
            class="flex flex-col items-center justify-center"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.4, ease: 'easeOut' }"
          >
            <img :src="item?.image" :alt="item?.name" class="rounded-lg" />
          </motion.div>
        </template>
      </SwiperWrapper>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
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
  autoplay: false,
  autoPlay: { delay: 3000, disableOnInteraction: false },
  pagination: false,
  centeredSlides: true,
};
</script>

<style>
.hero-swiper .swiper-slide {
  margin-top: 20px;
  transition: transform 0.4s ease, background-color 0.4s ease, opacity 0.4s ease;
}

.hero-swiper .swiper-slide-active {
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

@media (max-width: 360px) {
  .sw {
    margin-top:100px;
  
  }
}
@media (min-width: 540px) {
  .sw {
    margin-top:60px;
  
  }
}

@media (min-width: 375px) {
  .sw {
    margin-top:100px;
  
  }
}

</style>
