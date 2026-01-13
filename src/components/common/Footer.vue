<template>
  <footer
    class="md:mt-[300px] mt-[100px] bg-gradient-to-r from-[#1E71A6] to-[#004876] md:pt-[72px] pt-[40px] md:pb-[60px] pb-[30px] relative"
  >
    <motion.img
      :src="coffeeBasket"
      alt="coffee-seeds"
      loading="lazy"
      class="absolute md:right-12 -right-30 -top-50 md:-top-80 z-10"
      :initial="{ y: 100, opacity: 0 }"
      :while-in-view="{ y: 0, opacity: 1 }"
      :transition="{ duration: 1, ease: 'easeOut' }"
    />

    <div class="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
      <div
        v-for="link in footerdata"
        :key="link.id"
        class="lg:col-span-1 col-span-2"
      >
        <h1 class="font-medium text-lg text-white mb-4">{{ $t(link.main) }}</h1>
        <ul class="space-y-2">
          <li
            v-for="(path, index) in link.paths"
            :key="index"
            class="text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            {{ $t(path) }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import coffeeBasket from "@/assets/images/coffe-backet.webp";
interface FooterLink {
  id: number;
  main: string; // translation key
  paths: string[]; // translation keys
}

const footerdata: FooterLink[] = [
  {
    id: 1,
    main: "footer.menu",
    paths: [
      "footer.paths.getInspired",
      "footer.paths.products",
      "footer.paths.betterWorld",
      "footer.paths.contact",
      "footer.paths.blog",
    ],
  },
  {
    id: 2,
    main: "footer.cafeLocation",
    paths: ["footer.paths.findCafe"],
  },
  {
    id: 3,
    main: "footer.contact",
    paths: [
      "footer.paths.getInspired",
      "footer.paths.products",
      "footer.paths.betterWorld",
    ],
  },
];
</script>
