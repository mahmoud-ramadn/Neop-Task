<template>
    <div class="mt-8 pt-8 border-t border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
        <div>
          <p class="font-medium text-gray-900 mb-1">Warranty</p>
          <p>{{ warrantyInformation }}</p>
        </div>
        <div>
          <p class="font-medium text-gray-900 mb-1">Return Policy</p>
          <p>{{ returnPolicy }}</p>
        </div>
        <div>
          <p class="font-medium text-gray-900 mb-1">Minimum Order</p>
          <p>{{ minimumOrderQuantity }} units</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    warrantyInformation: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
  }>();
  </script>