<template>
  <div>
    <div class="aspect-square rounded-lg overflow-hidden mb-4">
      <img
        :src="selectedImage"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex gap-2 overflow-x-auto">
      <button
        v-for="(image, index) in allImages"
        :key="index"
        @click="selectedImage = image"
        class="flex-shrink-0 w-16 h-16 rounded border-2"
        :class="selectedImage === image ? 'border-blue-500' : 'border-gray-200'"
      >
        <img
          :src="image"
          :alt="`Thumb ${index + 1}`"
          class="w-full h-full object-cover rounded-sm"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  thumbnail: string;
  images: string[];
  title: string;
}>();

const selectedImage = ref(props.thumbnail);
const allImages = computed(() => [props.thumbnail, ...props.images]);
</script>
