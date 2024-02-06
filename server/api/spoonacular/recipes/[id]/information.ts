export default defineEventHandler(async (event) => {
    // Define your API endpoint for weather information
    const { id } = getRouterParams(event)
    const query = getQuery(event)
  
    // Define your environment keys
    const apiKey = process.env.APP_SPOONACULAR_API // Make sure you set this environment variable
    const RECIPE_API = `https://api.spoonacular.com`
    const apiPath = `${RECIPE_API}/recipes/${id}/information`
    // Create a function to fetch weather information
    try {
      const response: any = await $fetch(apiPath, {
        query: { apiKey: apiKey, q: query },
      })
      // Return the weather data
      return response
    } catch (error) {
      // Handle errors here
      console.error('Error fetching weather:', error)
      throw new Error('Failed to fetch weather information')
    }
  })
  