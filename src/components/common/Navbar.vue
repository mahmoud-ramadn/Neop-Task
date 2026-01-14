<template>
  <nav  :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="container flex justify-between items-center py-6 lg:px-16">
    <router-link to="/" class="w-10 h-8 cursor-pointer block">
      <SvgIcon name="logo" class="w-10 h-8" />
    </router-link>


    <ul class="space-4">
      <li class="inline cursor-pointer">
        <SvgIcon name="bag" class="w-7 h-7 mr-1" />
      </li>
      <li class="inline cursor-pointer">
    <button
      @click="toggleLanguage"
      class="cursor-pointer mx-1 inline w-7 h-7 rounded-full bg-yellow-400 hover:bg-yellow-500 transition"
    >
      <SvgIcon name="earth" class="w-6 h-6" />
    </button>
        <SvgIcon name="bars" class="w-6 h-6 mr-1" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "ar" : "en";
};
</script>
