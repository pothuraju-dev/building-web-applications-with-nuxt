<script setup lang="ts">
import type { Recipe } from '~/types/spoonacular';

definePageMeta({
  layout: 'spoonacular',
})
const response:Ref<Recipe> = await $fetch('/api/spoonacular/recipes')
console.log("hello", response)
</script>

<template>
  <SpoonacularRecipesList />
  <ul>
    <li v-for="recipe in response">
      {{ recipe.title }}
    </li>
  </ul>
</template>
