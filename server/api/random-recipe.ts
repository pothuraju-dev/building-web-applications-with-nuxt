import { Recipe } from "~/types/spoonacular"

export default defineEventHandler(async (event) => {
  // Todo: getPagination

  // Todo: getQuery
  const apiKey = process.env.APP_SPOONACULAR_API

  try {
    const {recipes} = await $fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
    ) as {recipes:Recipe[]}
    // Return the marvel data
    return recipes[0]
  } catch (error) {
    // Handle errors here
    console.error('Error fetching marvel:', error)
    throw new Error('Failed to fetch marvel information')
  }
})
