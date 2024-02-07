<script setup lang="ts">
import type { Recipe } from '~/types/spoonacular';

definePageMeta({
  layout: 'spoonacular',
})
const recipe = await $fetch(`/api/random-recipe`, {})
console.log("recipe", recipe)

</script>

<template>
  <SpoonacularRecipesList />
  <ul>
      {{ recipe.title }}
  </ul>
</template>
