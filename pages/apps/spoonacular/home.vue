<script setup lang="ts">
import type { Recipe } from '~/types/spoonacular';

definePageMeta({
  layout: 'spoonacular',
})
const recipe = await $fetch('/api/spoonacular/recipes') as Recipe
console.log("hello", recipe)

</script>

<template>
  <SpoonacularRecipesList />
  <ul>
      {{ recipe.title }}
  </ul>
</template>
