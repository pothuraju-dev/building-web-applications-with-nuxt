<script setup lang="ts">
import type { Ref } from 'vue'
import type { Recipe } from '~/types/spoonacular'
import { useRecipeInformation } from '#imports'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  activePanel: {
    type: Number,
    default: 0,
  },
})

const recipe: Ref<Recipe | null> = ref(null)
const getRecipeDetails = async (id: number): Promise<void> => {
  const { data } = (await useRecipeInformation(id.toString())) as Recipe
  recipe.value = data.value
}

const panel = ref<number | null>(1)
const accordions = {
  Summary: {
    title: 'Cooking Summary',
    key: 'summary',
  },
  Instructions: {
    title: 'Cooking Instructions',
    key: 'instructions',
  },
}
onMounted(() => {
  getRecipeDetails(props.id)
})
</script>
<template>
  <Loaders v-if="!recipe" :is-loading="!recipe" />
  <div v-else>
    <div>
      <img v-if="recipe.image" :src="recipe.image" />
      <h1 class="text-lg">{{ recipe.title }}</h1>
      <ul>
        <li v-for="cuisine in recipe.cuisines" :key="cuisine">
          {{ cuisine }}
        </li>
      </ul>
      <Accordion :items="accordions">
        <template #summary>
          <div v-html="recipe.summary"></div>
        </template>
        <template #instructions>
          <div v-html="recipe.instructions"></div
        ></template>
      </Accordion>
    </div>
  </div>
</template>
