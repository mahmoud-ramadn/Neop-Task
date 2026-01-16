<script setup lang="ts">
import { motion } from "motion-v";
import { useI18n } from "vue-i18n";
import frame1 from "@/assets/images/frame-1.webp";
import frame2 from "@/assets/images/frame-2.webp";

const { locale } = useI18n();

const items = [
  {
    key: "easy",
    svg: "Easy",
    titleKey: "welcomeSection.items.easy.title",
    desKey: "welcomeSection.items.easy.des",
  },
  {
    key: "quality",
    svg: "quality",
    titleKey: "welcomeSection.items.quality.title",
    desKey: "welcomeSection.items.quality.des",
  },
  {
    key: "taste",
    svg: "taste",
    titleKey: "welcomeSection.items.taste.title",
    desKey: "welcomeSection.items.taste.des",
  },
  {
    key: "quick",
    svg: "quick",
    titleKey: "welcomeSection.items.quick.title",
    desKey: "welcomeSection.items.quick.des",
  },
];
</script>

<template>
  <section
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
    class="relative md:py-[300px] py-[200px] md:mt-36 mt-20 justify-center"
  >
    <motion.img
      :src="frame1"
      alt="frame-1"
      class="absolute left-0 md:-bottom-auto -bottom-30"
      :animate="{ y: [0, -20, 0] }"
      :transition="{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      }"
    />

    <motion.img
      :src="frame2"
      alt="frame-2"
      class="absolute lg:left-6 left-10 lg:top-[30%] top-[65%]"
      :animate="{ y: [0, 15, 0] }"
      :transition="{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      }"
    />

    <div class="container">
      <div
        class="max-w-[800px] ml-auto flex flex-col gap-y-6"
        :class="
          locale === 'ar' ? 'items-start text-right' : 'items-end text-left'
        "
      >
        <motion.div
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="w-full"
        >
          <h3 class="font-bold text-3xl text-secondary">
            {{ $t("welcomeSection.heading") }}
          </h3>
          <p class="font-medium text-2xl text-secondary">
            {{ $t("welcomeSection.subheading") }}
          </p>
        </motion.div>

        <div class="grid md:grid-cols-2 grid-cols-2 w-full gap-4">
          <motion.div
            v-for="(item, index) in items"
            :key="item.key"
            :initial="{ opacity: 0, y: 50 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }"
            class="p-4 z-10 rounded-lg flex md:flex-row flex-col gap-y-4 gap-x-3 items-center bg-white hover:shadow-lg transition-all duration-300"
            :class="
              locale === 'ar' ? 'text-right ' : 'md:justify-start text-left'
            "
          >
            <span
              class="size-20 shrink-0 bg-brown-100 rounded-full flex items-center justify-center"
            >
              <SvgIcon :name="item.svg" class="text-primary size-8 mb-2" />
            </span>
            <div class="md:text-start text-center">
              <h3 class="font-semibold text-primary text-lg mb-2">
                {{ $t(item.titleKey) }}
              </h3>
              <p class="text-gray-500 text-sm">{{ $t(item.desKey) }}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>
