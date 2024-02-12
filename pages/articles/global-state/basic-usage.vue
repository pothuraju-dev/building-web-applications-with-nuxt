<template>
  <div
    class="rounded rounded-2xl bg-white px-4 py-5 sm:px-6 flex flex-col gap-y-4"
  >
  <p class="text-3xl font-semibold">Basic Usage</p>
    <button
      type="button"
      @click="toggleDarkMode"
      class="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
    >
      {{ darkModeEnabled ? 'Disable Dark Mode' : 'Enable Dark Mode' }}
    </button>
  </div>
</template>
<script setup lang="ts">
const darkModeEnabled = useState('darkModeEnabled', () => false)

// Function to toggle dark mode
const toggleDarkMode = () => {
  darkModeEnabled.value = !darkModeEnabled.value
}
</script>
