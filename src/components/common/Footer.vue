<template>
  <footer
    class="md:mt-[300px] mt-[100px] bg-gradient-to-r from-[#1E71A6] to-[#004876] md:pt-[72px] pt-[40px] md:pb-[60px] pb-[30px]"
  >
    <div class="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
      <div
        v-for="link in footerdata"
        :key="link.id"
        class="lg:col-span-1 col-span-2"
      >
        <h1 class="font-medium text-lg text-white mb-4">{{ link.main }}</h1>
        <ul class="space-y-2">
          <li
            v-for="(path, index) in link.paths"
            :key="index"
            class="text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            {{ path }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterLink {
  id: number;
  main: string;
  paths: string[];
}

const footerdata: FooterLink[] = [
  {
    id: 1,
    main: "Menu",
    paths: [
      "Get inspired",
      "Our products",
      "For a better world",
      "Contact",
      "Blog",
    ],
  },
  {
    id: 2,
    main: "Cafe Location",
    paths: ["Find a cafe near you"],
  },
  {
    id: 3,
    main: "Contact",
    paths: ["Get inspired", "Our products", "For a better world"],
  },
];
</script>
