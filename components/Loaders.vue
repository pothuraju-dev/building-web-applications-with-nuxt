<template>
  <div v-if="isLoading" :class="[ containerClass]">
    <div v-if="text" class="mb-4">{{ text }}</div>
    <div
      v-if="type === 'circle'"
      ref="loader"
      :class="['loader', loaderClass]"
    ></div>
    <div
      v-else-if="type === 'dots'"
    >
      <div class="flex space-x-2 animate-pulse">
        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  type?: 'dots' | 'circle'
  text?: string
  isLoading?: boolean
  color?: string
  size?: string
  containerClass?: string
  loaderClass?: string
}
withDefaults(defineProps<Props>(), {
  type: 'circle',
  text: '',
  isLoading: false,
  color: '#3498db',
  size: '40px',
  containerClass: '',
  loaderClass: '',
})

const loader = ref(null)
onMounted(() => {
  console.log('loader', loader)
})
</script>

<style scoped lang="postcss">
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
