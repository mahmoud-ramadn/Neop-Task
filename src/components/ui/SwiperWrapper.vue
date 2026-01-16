<template>
  <div>
    <div class="relative" :class="customClass">
      <div :class="{ 'lg:px-0': arrows }">
        <Swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="currentProps?.slidesPerView"
          :loop="currentProps?.loop"
          :autoplay="currentProps?.autoPlay"
          :space-between="currentProps?.spaceBetween"
          :breakpoints="currentProps?.breakpoints"
          :centered-slides="currentProps?.centeredSlides"
          v-bind="mapCurrentProps"
          :items="items"
          :effect="currentProps?.effect"
          :options="options"
          @swiper="onSwiperLoad"
          @slide-change="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in items"
            :key="item?.id || index"
            class="!h-auto"
            :class="{ 'active-slide': index === swiper?.activeIndex }"
          >
            <slot :item="item" />
          </swiper-slide>
          <div
            v-if="arrows"
            class="py-12 flex arrow justify-center space-x-4 rtl:space-x-reverse"
          >
            <button
              class="border-2 border-primary group hover:bg-primary size-10 hover:text-white text-primary flex justify-center items-center rounded-full transition-colors"
              @click="swiper?.slidePrev()"
            >
              <svg-icon
                name="arrow"
                class="fill-white group-hover:fill-white size-3 w-full transition-colors"
              />
            </button>

            <button
              class="border-2 border-primary group hover:bg-primary size-10 hover:text-white text-primary flex justify-center items-center rounded-full disabled:cursor-not-allowed transition-colors"
              @click="swiper?.slideNext()"
            >
              <svg-icon
                name="arrow"
                class="fill-white group-hover:fill-white rotate-180 size-3 w-full transition-colors"
              />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed } from "vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
type SlideItem = {
  id?: string | number;
  [key: string]: any;
};

type OptionsType = {
  slidesPerView?: number;
  loop?: boolean;
  autoPlay?:
    | {
        delay?: number;
        disableOnInteraction?: boolean;
      }
    | boolean;
  centeredSlides?: boolean;
  spaceBetween?: number;
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
  breakpoints?: Record<
    number,
    {
      slidesPerView?: number;
      spaceBetween?: number;
      centeredSlides?: boolean;
    }
  >;
  pagination?: boolean;
  grid?: {
    rows: number;
    fill?: "row" | "column";
  };
};

interface Props {
  items: SlideItem[];
  options?: OptionsType;
  arrows?: boolean;
  gridRows?: number;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    slidesPerView: 1,
    loop: true,
    autoPlay: false,
    spaceBetween: 30,
    pagination: false,
    centeredSlides: false,
    breakpoints: {},
    grid: undefined,
  }),
  arrows: false,
  gridRows: 1,
  customClass: "currentSwiper",
});

const emit = defineEmits(["slide-change"]);

const currentProps = computed(() => {
  return {
    ...props?.options,
  };
});

const mapCurrentProps = computed(() => {
  return {
    ...(currentProps.value?.pagination && {
      pagination: { clickable: true },
    }),
  };
});

const swiper = ref();

type SwiperInstance = {
  slideNext?: () => void;
  slidePrev?: () => void;
  activeIndex?: number;
  realIndex?: number;
};

const onSwiperLoad = (value: SwiperInstance) => {
  swiper.value = value;
};

const onSlideChange = (swiperInstance: SwiperInstance) => {
  swiper.value = swiperInstance;
  emit("slide-change", swiperInstance.realIndex);
};

const next = () => {
  swiper.value?.slideNext();
};

const prev = () => {
  swiper.value?.slidePrev();
};

const slideTo = (index: number) => {
  if (swiper.value) {
    swiper.value.slideTo(index);
  }
};

defineExpose({
  next,
  prev,
  slideTo,
});
</script>
