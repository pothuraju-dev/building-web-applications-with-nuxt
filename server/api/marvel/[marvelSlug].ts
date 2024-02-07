import { Recipe } from '~/types/spoonacular'

export default defineEventHandler(async (event) => {
  // Define your API endpoint for marvel information
  const { spoonacularSlug } = getRouterParams(event)

  const apiKey = process.env.APP_SPOONACULAR_API
  const spoonacularAPI = 'https://api.spoonacular.com/recipes/random'
  // Create a function to fetch marvel information

  // Todo: getPagination

  // Todo: getQuery
  try {
    const { recipes } = await $fetch(`${spoonacularAPI}/?apiKey=${apiKey}`) as {recipes: Recipe[]}
    // Return the marvel data
    return recipes[0]
  } catch (error) {
    // Handle errors here
    console.error('Error fetching marvel:', error)
    throw new Error('Failed to fetch marvel information')
  }
})
