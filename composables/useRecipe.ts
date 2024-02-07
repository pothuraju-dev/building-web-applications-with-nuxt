import type { Recipe } from '~/types/spoonacular'

export const useRecipe = async (): Promise<Recipe> => {
  const { data: recipes } = await useAsyncData(
    'recipeData',
    () => $fetch(`/api/random-recipe`, {}) as Recipe
  )
  console.log("recipes", recipes.value)
  return recipes.value as Recipe
}
