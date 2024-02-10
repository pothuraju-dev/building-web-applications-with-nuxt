<!-- pages/index.vue -->

<template>
  <div class="text-center">
    <!-- Main heading for the page -->
    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Building Web Applications With Nuxt
    </h1>

    <!-- CTA button to navigate to the 'apps' page -->
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="/apps"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Explore Apps
      </a>
      <a
        href="/config"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Configure Apps
      </a>
    </div>
  </div>
</template>

<script setup>
// No need for import or export in <script setup>

// TODO: Any specific logic or imports related to this page can be added here
</script>
