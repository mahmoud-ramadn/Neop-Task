<template>
    <nav class="flex mb-6" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="#" class="text-gray-700 hover:text-blue-600 text-sm">Home</a>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a href="#" class="text-gray-700 hover:text-blue-600 text-sm ml-1">{{
              category
            }}</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="text-blue-600 text-sm ml-1 font-medium">{{ title }}</span>
          </div>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    category: string;
    title: string;
  }>();
  </script>