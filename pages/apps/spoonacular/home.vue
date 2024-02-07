<script setup lang="ts">
import type { Recipe } from '~/types/spoonacular';

definePageMeta({
  layout: 'spoonacular',
})
const data: Ref<Recipe | undefined> = ref()
const getRecipe = async () => {
  const recipe = await useRecipe()
  data.value = recipe
}
onMounted(async () => {
  setTimeout(async () => {
    await getRecipe()
  }, 0)
})

</script>

<template>
  <SpoonacularRecipesList />
  <ul>
      {{ data?.title }}
  </ul>
</template>
