<template>
  <svg
    aria-hidden="true"
    :class="cn('inline-block fill-current', props.class)"
  >
    <use :xlink:href="`#icon-${props.name}`"></use>
  </svg>
</template>

<script setup lang="ts">
import { cn } from '../../lib/utils'
const props = defineProps<{
  name: string
  class?: string
}>()
</script>
