<script setup lang="ts">
import type { Recipe } from '@/types/spoonacular'
interface RecipeList extends Recipe {
  date: Date
}

defineProps<{ recipes: RecipeList[]; title: string }>()

const emits = defineEmits(['openPreview'])

const openPreview = (recipe: Recipe): void => {
  emits('openPreview', recipe)
}
</script>
<template>
  <div>
    <h1 class="text-left">{{ title }}</h1>
    <ul role="list" class="grid grid-cols-1 gap-6 bg">
      <li
        v-for="recipe in recipes"
        :key="recipe.id"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div
          class="flex w-full items-center justify-between space-x-6 p-6 bg-gray-100"
        >
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ recipe.title }}
              </h3>
            </div>
            <button type="button" @click="openPreview(recipe)">View</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
