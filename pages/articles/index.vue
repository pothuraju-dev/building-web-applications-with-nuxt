<!-- pages/get-started/index.vue -->

<template>
  <!-- Grid layout with two columns for app cards -->
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-1">
    <!-- Loop through each app in the 'apps' array -->
    <div
      class="bg-white border border-gray-200 border-gray-300 border-t gap-x-8 gap-y-16 grid grid-cols-1 lg:max-w-none lg:mx-0 max-w-2xl mx-auto p-10 rounded-lg"
    >
      <article
        v-for="article in articles"
        :key="article.id"
        class="flex flex-col justify-between"
      >
        <div class="group relative">
          <h3
            class="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
          >
            <a :href="article.url">
              <span class="absolute inset-0" />
              {{ article.title }}
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {{ article.description }}
          </p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <a :href="article.link" target="_blank">
                <span class="absolute inset-0" />
                Read article
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
// Apps array containing information about different apps
const articles = [
  {
    title: 'Vue 3.4 is here — defineModel and why it matters!',
    link: 'https://javascript.plainenglish.io/vue-3-4-is-here-definemodel-and-why-it-matters-50ead5d3d1c1',
    description:
      'The defineModel makes it possible to define the input(s) of our component and it will also transmit any changes in the input, back to the parent component.',
    url: '/articles/define-model',
  },
  // TODO: Add more apps with relevant information
]
</script>
