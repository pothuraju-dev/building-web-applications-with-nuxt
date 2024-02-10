<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
interface Today {
  id: number
  title: string
  readyInMinutes: number
}

interface Card {
  date: Date
  content: string
  today: Today[]
}

defineProps<{ card: Card }>()
const emits = defineEmits(['daySelected', 'recipeRemoved'])
const addRecipeToday = (card: Card): void => {
  emits('daySelected', card)
}
const recipeRemoved = (recipe: Today, date: Date): void => {
  emits('recipeRemoved', recipe, date)
}
</script>
<template>
  <div
    class="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100"
  >
    <div class="flex-1 truncate">
      <div class="flex items-center space-x-3">
        <h3 class="truncate text-sm font-medium text-gray-900">
          {{ card.content }}
        </h3>
        <span
          class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
          >{{ useFormatDate(card.date) }}</span
        >
      </div>
      <p class="mt-1 truncate text-sm text-gray-500">Description</p>
    </div>
    <span
      ><button @click="addRecipeToday(card)">
        <PlusIcon class="h-5 w-5" /></button
    ></span>
  </div>
  <ul>
    <li v-for="today in card.today" :key="today.id">
      <div
        class="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100"
      >
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">
              {{ today.title }}
            </h3>
            <span
              class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
              >{{ today.readyInMinutes }} minutes</span
            >
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">Description</p>
        </div>
        <span
          ><button @click="recipeRemoved(today, card.date)">
            <PlusIcon class="h-5 w-5" /></button
        ></span>
      </div>
    </li>
  </ul>
</template>
