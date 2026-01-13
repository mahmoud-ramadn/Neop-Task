<template>
    <Vue3Marquee
      :speed="10"
      :clone="true"
      :loop="0"
      :pause-on-hover="true"
      class="vue3-marquee w-full flex justify-center gap-x-16 overflow-hidden"
    >
      <div class="flex mx-3 w-full gap-x-20">
        <div
          v-for="n in 30"
          :key="n"
          class="cursor-grab lg:cursor-pointer py-3 flex items-center gap-2"
        >
          <svg-icon
            name="lightSeed"
            class="inline-block size-4 text-secondary-600/30"
          />
          <p class="text-base font-medium text-secondary-600">coffee</p>
        </div>
      </div>
    </Vue3Marquee>
</template>

<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
</script>
