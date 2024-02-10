import type { Recipe } from '~/types/spoonacular'

export const useRecipe = async (): Promise<Recipe> => {
  const recipes = await fetchRecipe()
  console.log("recipes", recipes)
  return recipes as Recipe
}

const fetchRecipe = async () => {
    // Todo: getPagination
  
    // Todo: getQuery
    const apiKey = localStorage.getItem('spoonacular-api-key')
  
    try {
      const {recipes} = await $fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
      ) as {recipes:Recipe[]}
      // Return the marvel data
      return recipes[0]
    } catch (error) {
      // Handle errors here
      console.error('Error fetching recipe:', error)
      throw new Error('Failed to fetch recipe information')
    }
  }