<template>
  <div>
    <!-- Display the reactive count -->
    <p class="text-4xl font-bold">Reactive Count: {{ reactiveCount }}</p>
    <!-- Display the non-reactive count -->
    <p class="text-4xl font-bold">Non Reactive Count: {{ nonReactiveCount }}</p>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

// Define props to accept count from parent component
const props = defineProps({
  count: Number,
})

// Store the non-reactive count directly from props
const nonReactiveCount = props.count

// Create a reactive reference to props.count using toRef
const reactiveCount = toRef(() => props.count)
</script>
