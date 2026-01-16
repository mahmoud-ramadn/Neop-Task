<template>
  <div class="grid grid-cols-2 gap-4 mb-8">
    <div class="bg-gray-50 p-4 rounded-lg">
      <p class="text-sm text-gray-500">Stock</p>
      <p class="font-semibold">{{ stock }} units</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <p class="text-sm text-gray-500">Weight</p>
      <p class="font-semibold">{{ weight }} kg</p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <p class="text-sm text-gray-500">Dimensions</p>
      <p class="font-semibold">
        {{ dimensions.width }} × {{ dimensions.height }} ×
        {{ dimensions.depth }} cm
      </p>
    </div>
    <div class="bg-gray-50 p-4 rounded-lg">
      <p class="text-sm text-gray-500">SKU</p>
      <p class="font-semibold">{{ sku }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

defineProps<{
  stock: number;
  weight: number;
  dimensions: Dimensions;
  sku: string;
}>();
</script>
