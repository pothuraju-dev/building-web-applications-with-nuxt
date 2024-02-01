<template>
    <div class="relative mt-12 bg-white shadow-2xl p-6">
      <h2 class="text-3xl font-semibold text-center mb-4">Article Summary</h2>
      <ul class="-my-8 divide-y divide-gray-100">
        <li v-for="item in items" :key="item.heading" class="py-8">
          <dl class="relative flex flex-wrap gap-x-3">
            <dt class="sr-only">heading</dt>
            <dd
              class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900"
            >
              {{ item.heading }}
              <span class="absolute inset-0" aria-hidden="true" />
            </dd>
            <dt class="sr-only">Description</dt>
            <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">
              {{ item.content }}
            </dd>
          </dl>
        </li>
      </ul>
    </div>
</template>
<script setup lang="ts">
interface SummaryPoint {
    heading: string;
    content: string
}
interface Props {
    items: SummaryPoint[]
}
defineProps<Props>()
</script>