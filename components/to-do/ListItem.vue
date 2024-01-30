<!-- components/to-do/ListItem.vue -->

<script lang="ts" setup>
// Import the Switch component from Headless UI
import { Switch } from '@headlessui/vue'
// Define the props and emits for the component
defineProps<{ isChecked?: boolean | false }>()
const emits = defineEmits(['click'])
</script>

<template>
  <!-- Label for the list item, with a switch and optional slot content -->
  <label :class="{ checked: isChecked }" class="flex min-w-0 gap-x-4">
    <!-- Switch component for handling the checked state -->
    <Switch
      :key="String(isChecked)"
      :value="isChecked ? 'enabled' : ''"
      @click="emits('click')"
      :class="[
        isChecked ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
      ]"
    >
      <!-- Inner content of the switch -->
      <span class="sr-only">Use setting</span>
      <span
        :class="[
          isChecked ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      >
        <!-- Checked state icon -->
        <span
          :class="[
            isChecked
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <!-- Unchecked state icon -->
        <span
          :class="[
            isChecked
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </Switch>

    <!-- Slot for the content of the list item -->
    <slot></slot>
  </label>

  <!-- Optional slot for content on the right side of the list item -->
  <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
    <slot name="right-side"></slot>
  </div>
</template>

<style scoped>
/* Scoped styles for the component */
label {
  cursor: pointer;
}

.checked {
  text-decoration: line-through;
}
</style>
