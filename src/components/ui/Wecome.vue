<template>
  <section class="relative md:py-[300px] py-[200px] md:mt-36 mt-20 justify-center">
    <img
      src="@/assets/images/frame-1.webp"
      alt="frame-1"
      class="absolute left-0 md:-bottom-auto -bottom-30"
    />
    <img
      src="@/assets/images/frame-2.webp"
      alt="frame-2"
      class="absolute lg:left-6 left-10 lg:top-[30%] top-[65%]"
    />

    <div class="container">
      <div
        class="max-w-[800px] ml-auto flex justify-end flex-col gap-y-6 items-end"
      >
        <div class="w-full text-start">
          <h3 class="font-bold text-3xl text-secondary">Welcome to Our shop</h3>
          <p class="font-medium text-2xl text-secondary">
            The coffee you want, when you want it
          </p>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-2 w-full gap-4">
          <div
            v-for="item in welcomeData"
            :key="item.id"
            class="p-4 z-10 rounded-lg flex md:flex-row flex-col gap-y-4 md:justify-start justify-center gap-x-3 items-center bg-white hover:shadow-lg transition-all duration-300"
          >
            <span
              class="size-20 shrink-0 bg-brown-100 rounded-full flex items-center justify-center"
            >
              <SvgIcon :name="item.svg" class="text-primary size-8 mb-2" />
            </span>
            <div class="md:text-start text-center">
              <h3 class="font-semibold text-primary text-lg mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-500 text-sm">{{ item.des }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface WelcomeItem {
  id: number;
  title: string;
  des: string;
  svg: string;
}

const welcomeData: WelcomeItem[] = [
  {
    id: 1,
    title: "Easy",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    svg: "Easy",
  },
  {
    id: 2,
    title: "Quality",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    svg: "quality",
  },
  {
    id: 3,
    title: "Taste",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    svg: "taste",
  },
  {
    id: 4,
    title: "Quick",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    svg: "quick",
  },
];
</script>

<style scoped></style>
