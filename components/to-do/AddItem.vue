<!-- components/to-do/AddItem.vue -->

<script setup lang="ts">
// Import necessary modules from Vue
import { ref, watchEffect } from 'vue'

// Define props and emits for the component
const props = defineProps<{ modelValue: string | '' }>()
const inputValue = ref('')

// Watch for changes in the modelValue prop and update the inputValue accordingly
watchEffect(() => {
  inputValue.value = props.modelValue
})

// Define emits for handling custom events
const emits = defineEmits(['input'])

// Handle input and emit appropriate event based on whether it's an edit or add
const onInput = () => {
  emits('input', inputValue.value, props.modelValue ? 'edit' : 'add')
  inputValue.value = '' // Reset inputValue after emitting the event
}
</script>

<template>
  <!-- Form for adding or editing a todo item -->
  <form @submit.prevent="onInput" class="flex gap-2">
    <!-- Input field for entering todo text -->
    <div
      class="w-full flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
    >
      <input
        type="text"
        v-model="inputValue"
        placeholder="Enter your new Todo"
        class="flex-1 border-2 rounded-md bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6"
      />
    </div>

    <!-- Save button for submitting the form -->
    <button
      type="submit"
      class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Save
    </button>
  </form>
</template>
