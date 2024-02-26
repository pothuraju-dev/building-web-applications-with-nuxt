<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      <div class="mb-4">
        <Counter :count="count" />
        <!-- Apply text-5xl class to make the font size big -->
        <button
          @click="count++"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
      </div>
      <div>
        <p>
          <a
            href="https://github.com/sriram-500apps/building-web-applications-with-nuxt/blob/master/components/Counter.vue"
            target="_blank"
            class="text-blue-500 hover:underline"
            >View Component File on GitHub</a
          >
        </p>
        <div id="gist-section" class="mt-4">
          <GistView id="52e91a532c2031408c2c1dc5d12e5ebe"></GistView>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
