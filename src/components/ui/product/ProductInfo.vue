<template>
    <div>
      <!-- Brand and Category -->
      <div class="flex items-center space-x-4 mb-4">
        <span
          class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
        >
          {{ brand }}
        </span>
        <span
          class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
        >
          {{ category }}
        </span>
      </div>
  
      <!-- Title -->
      <h1 class="text-3xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h1>
  
      <!-- Rating -->
      <div class="flex items-center mb-6">
        <div class="flex items-center">
          <svg
            v-for="star in 5"
            :key="star"
            :class="[
              'w-5 h-5',
              star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300',
            ]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span class="ml-2 text-sm text-gray-600"
          >{{ rating }} ({{ reviewsCount }} reviews)</span
        >
      </div>
  
      <!-- Price Section -->
      <div class="mb-6">
        <div class="flex items-center space-x-3">
          <span class="text-4xl font-bold text-gray-900"
            >${{ price.toFixed(2) }}</span
          >
          <span
            v-if="discountPercentage > 0"
            class="px-2 py-1 bg-red-100 text-red-800 text-sm font-bold rounded"
          >
            -{{ discountPercentage }}%
          </span>
        </div>
        <p class="text-green-600 font-medium mt-2">
          <svg
            class="w-5 h-5 inline mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          {{ availabilityStatus }}
        </p>
        <p class="text-gray-500 text-sm mt-1">
          {{ shippingInformation }}
        </p>
      </div>
  
      <!-- Description -->
      <div class="mb-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">
          Description
        </h2>
        <p class="text-gray-600">{{ description }}</p>
      </div>
  
      <!-- Tags -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    brand: string;
    category: string;
    title: string;
    rating: number;
    reviewsCount: number;
    price: number;
    discountPercentage: number;
    availabilityStatus: string;
    shippingInformation: string;
    description: string;
    tags: string[];
  }>();
  </script>