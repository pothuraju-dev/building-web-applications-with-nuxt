<template>
  <div>
    <p>Count: {{ reactiveCount }}</p>
  </div>
</template>

// Counter.vue
<script setup>
import { toRef } from 'vue'

const props = defineProps({
  count: Number,
})

const reactiveCount = toRef(() => props.count)
</script>
