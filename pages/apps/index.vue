<!-- pages/apps/index.vue -->

<template>
  <!-- Grid layout with two columns for app cards -->
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <!-- Loop through each app in the 'apps' array -->
    <div
      v-for="app in apps"
      :key="app.name"
      class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <!-- App card content -->
      <div class="min-w-0 flex-1">
        <!-- Link to the app with focus styling -->
        <a :href="app.url" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <!-- Display app name -->
          <p class="text-sm font-medium text-gray-900">{{ app.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Apps array containing information about different apps
const apps = [
  {
    name: 'Todo List',
    description: '',
    url: '/apps/todo-list',
  },
  {
    name: 'Local Weather',
    description: '',
    url: '/apps/local-weather',
  },
  {
    name: 'Marvel Comics Overview',
    description: '',
    url: '/apps/marvel-comics',
  },
  {
    name: 'Recipes',
    description: '',
    url: '/apps/spoonacular/home',
  },
  // TODO: Add more apps with relevant information
]
</script>
