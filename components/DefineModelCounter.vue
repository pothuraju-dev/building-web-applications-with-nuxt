<script setup lang="ts">
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'
const model = defineModel({ type: Number, default: 0 })
const incrementCounter = () => model.value++
const decrementCounter = () => {
  if (model.value > 0) model.value--
}
</script>
<template>
  <li>
    <button
      @click="incrementCounter()"
      type="button"
      class="inline-flex items-center gap-x-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      Increase <ArrowUpIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
    </button>
  </li>
  <li>
    <button
      @click="decrementCounter()"
      type="button"
      class="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      Decrease <ArrowDownIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
    </button>
  </li>
</template>
