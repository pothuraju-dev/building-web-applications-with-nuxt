<script setup lang="ts">
import { ref } from 'vue'

let globalCounter = ref(100)
const inputValue = ref()
const onUpdate = () => {
  globalCounter.value = inputValue.value
}
const summary = [
  {
    heading: 'Component Reusability',
    content:
      "Vue 3's two-way binding simplifies the creation of reusable components by allowing the automatic updating of values without boilerplate code",
  },
  {
    heading: 'DefineModel API',
    content:
      'The introduction of the defineModel API enables the definition of component inputs and facilitates the transmission of input changes back to the parent component.',
  },
  {
    heading: 'Generic Components',
    content:
      'With the use of two-way binding and the defineModel API, we can create generic components that accept inputs and automatically update, promoting modular and scalable code.',
  },
  {
    heading: 'Streamlined Component Composition',
    content:
      'By adopting these Vue 3 features, the process of composing components becomes more straightforward, reducing overhead and encouraging developers to create smaller, more manageable components.',
  },
  {
    heading: 'Practical Example – Counter Component',
    content:
      'The article demonstrates the application of these concepts through a practical example of a counter component, highlighting how the changes in Vue 3 APIs enhance the development experience.',
  },
  {
    heading: 'Improved Development Workflow',
    content:
      'The enhancements in Vue 3 APIs make it easier for developers to split their applications into smaller components, fostering a more efficient and streamlined development workflow.',
  },
  {
    heading: 'Encouraging Best Practices',
    content:
      "Vue 3's API improvements minimize boilerplate code, making it more appealing for developers to adopt best practices such as component composition, ultimately leading to cleaner and maintainable code.",
  },
]
</script>
<template>
  <div>
    <!-- Article Link -->
    <div class="mb-8">
      <NuxtLink to="/articles" class="text-blue-500 hover:underline"
        >Back to Articles</NuxtLink
      >
    </div>
    <div role="list" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mt-2 flex rounded-md shadow-sm">
        <div class="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="number"
            name="number"
            id="number"
            class="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter the counter number"
            v-model="inputValue"
          />
        </div>
        <button
          type="button"
          class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          @click="onUpdate"
        >
          Update
        </button>
      </div>
      <p
        class="mt-6 py-6 text-8xl font-semibold leading-8 tracking-tight text-gray-900 text-center"
      >
        {{ globalCounter }}
      </p>
      <ul role="list" class="mt-6 gap-6 flex justify-center">
        <DefineModelCounter v-model="globalCounter"></DefineModelCounter>
      </ul>
    </div>
    <Summary :items="summary" />
  </div>
</template>
