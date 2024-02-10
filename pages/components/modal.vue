<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <CustomLink>Hello</CustomLink>
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      Open dialog
    </button>
  </div>
  <Modal :open="isOpen" @close="closeModal">
    <template #title>Payment successful</template>
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>
    </div>

    <div class="mt-4">
      <button
        type="button"
        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        @click="closeModal"
      >
        Got it, thanks!
      </button>
    </div>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(true)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
