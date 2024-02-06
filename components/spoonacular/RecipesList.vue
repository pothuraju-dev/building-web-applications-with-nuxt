<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'

import type { Recipe } from '~/types/spoonacular'
interface RecipeList extends Recipe {
  date: Date
}

const modalVisible: Ref<boolean> = ref(false)
const selectedRecipe: Ref<Recipe | null> = ref(null)

const addDays = (days: number): Date => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date
}

const recipes = [
  { id: 1, title: 'test', date: addDays(1) },
  { id: 2, title: 'test2', date: addDays(1) },
  { id: 2, title: 'test3', date: addDays(-1) },
]

const openPreview = (recipe: RecipeList): void => {
  selectedRecipe.value = recipe
  modalVisible.value = true
}

const closePreview = () => {
  modalVisible.value = false
  setTimeout(() => {
    selectedRecipe.value = null
  }, 500)
}

const pastRecipes = computed(() =>
  recipes.filter((recipe: RecipeList) => {
    const date = new Date(recipe.date)
    return date < new Date()
  })
)

const futureRecipes = computed(
  () =>
    recipes.filter((recipe: RecipeList) => {
      const date = new Date(recipe.date)
      return date >= new Date()
    }) as RecipeList[]
)

const tab: Ref<string> = ref('upcoming')
const recipeTabs = {
  Past: {
    title: 'Past recipes',
    recipes: pastRecipes.value,
  },
  Upcoming: {
    title: 'Upcoming recipes',
    recipes: futureRecipes.value,
  },
}

onMounted(() => {
  if (futureRecipes.value.length === 0) {
    tab.value = 'past'
  }
})
</script>
<template>
  <div v-if="pastRecipes.length === 0 && futureRecipes.length === 0">
    No recipes yet. Add some to your planner!
  </div>
  <div v-if="true">
    <Tabs :tabs="recipeTabs">
      <template #panel="{ info }">
        <SpoonacularRecipeTable
          :recipes="info.recipes"
          :title="info.title"
          @openPreview="openPreview"
        ></SpoonacularRecipeTable>
      </template>
    </Tabs>
    <Modal :open="modalVisible" @close="closePreview">
      <template #title>Recipe Information</template>
      <SpoonacularCookingInstructions
        :id="selectedRecipe.id"
        :active-panel="1"
      />
    </Modal>
  </div>
</template>
