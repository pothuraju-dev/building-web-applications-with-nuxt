export default defineEventHandler(async (event) => {
  // Define your API endpoint for weather information
  const { citySlug } = getRouterParams(event)

  // Define your environment keys
  const apiKey = process.env.VITE_APP_WEATHER_API_KEY // Make sure you set this environment variable
  const weatherApiEndpoint = `https://api.weatherapi.com/v1/current.json`
  // Create a function to fetch weather information
  try {
    const response: any = await $fetch(weatherApiEndpoint, {
      query: { key: apiKey, q: citySlug },
    })
    // Return the weather data
    return response
  } catch (error) {
    // Handle errors here
    console.error('Error fetching weather:', error)
    throw new Error('Failed to fetch weather information')
  }
})
