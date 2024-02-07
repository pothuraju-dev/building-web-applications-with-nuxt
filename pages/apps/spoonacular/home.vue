<script setup lang="ts">
import type { Recipe } from '~/types/spoonacular';

definePageMeta({
  layout: 'spoonacular',
})
const comics = await $fetch(`/api/marvel/recipe`, {})
console.log("comics", comics)

</script>

<template>
  <SpoonacularRecipesList />
  <ul>
      {{ comics }}
  </ul>
</template>
