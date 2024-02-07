<script setup lang="ts">
import type { Recipe } from '~/types/spoonacular';

definePageMeta({
  layout: 'spoonacular',
})
const recipe = await $fetch(`/api/food/recipes`, {})
const comics = await $fetch(`/api/marvel/comics`, {})
console.log("recipe", recipe)
console.log("comics", comics)

</script>

<template>
  <SpoonacularRecipesList />
  <ul>
      {{ comics }}
  </ul>
</template>
