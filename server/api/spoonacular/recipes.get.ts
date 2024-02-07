import { Recipe } from '~/types/spoonacular'

export default defineCachedEventHandler(async (event) => {
  console.log('making fresh recipes request')
  try {
    const apiKey = process.env.APP_SPOONACULAR_API // Make sure you set this environment variable

    const { recipes } = (await $fetch<{ recipes: unknown }>(
      'https://api.spoonacular.com/recipes/random',
      {
        query: {
          apiKey,
        },
      }
    )) as {recipes: Recipe[]}
    return recipes[0]
  } catch (error) {
    // Handle errors here
    console.error('Error fetching recipe:', error)
    throw new Error('Failed to fetch recipe information')
  }
})
