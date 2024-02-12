<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Article Link -->
    <div class="mb-8">
      <NuxtLink to="/articles" class="text-blue-500 hover:underline"
        >Back to Articles</NuxtLink
      >
    </div>

    <!-- Notion Page Link -->
    <div class="mb-8">
      <a
        href="https://pothuraju.notion.site/Global-State-Nuxt-1feb6f6f9f7c47f285f13c5608f6a829?pvs=4"
        target="_blank"
        class="text-blue-500 hover:underline"
        >Link to Notion Page</a
      >
    </div>

    <!-- Page Title -->
    <h1 class="text-3xl font-bold mb-4">Nuxt Global State Management</h1>

    <!-- Loop through the array of usage objects -->
    <div v-for="(usage, index) in usages" :key="index" class="mb-8">
      <h2 class="text-xl font-bold mb-2">{{ usage.title }}</h2>
      <p class="mb-4">{{ usage.description }}</p>
      <NuxtLink :to="usage.route" class="text-blue-500 hover:underline"
        >View {{ usage.title }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
// Define an array of objects representing different usage scenarios
const usages = [
  {
    title: 'Basic Usage',
    description: 'Handle simple state management with useState composable.',
    route: '/articles/global-state/basic-usage',
  },
  {
    title: 'Initializing State',
    description: 'Initialize state with data from an external source.',
    route: '/articles/global-state/initializing-state',
  },
  {
    title: 'Shared State',
    description: 'Manage shared state across different components.',
    route: '/articles/global-state/shared-state',
  },
  {
    title: 'Advanced Usage',
    description: 'Implement advanced functionalities with global state.',
    route: '/articles/global-state/advanced-usage',
  },
]
</script>

<style>
/* Add Tailwind CSS styles here if needed */
</style>
