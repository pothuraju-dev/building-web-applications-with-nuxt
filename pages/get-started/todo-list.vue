<!-- pages/get-started/todo-list.vue -->

<!-- Import necessary components or libraries -->

<script setup lang="ts">
// No need for explicit import or export in <script setup>

// TODO: Any specific logic or imports related to this page can be added here
</script>

<template>
  <!-- Container for the todo list with a border and padding -->
  <div
    class="border rounded rounded-2xl border-gray-900 bg-white px-4 py-5 sm:px-6 flex flex-col gap-y-4"
  >
    <!-- Include ToDoHeader component for displaying header information -->
    <ToDoHeader />

    <!-- Include ToDoList component for displaying the actual list of todos -->
    <ToDoList />
  </div>
</template>

<style scoped>
/* Add any scoped styles specific to this component if needed */
</style>
