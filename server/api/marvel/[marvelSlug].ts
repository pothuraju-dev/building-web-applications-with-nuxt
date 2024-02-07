import { makeAuthenticatedAPICall } from '~/server/utils/marvel'

export default defineEventHandler(async (event) => {
  // Define your API endpoint for marvel information
  const { marvelSlug } = getRouterParams(event)

  const requestURI = makeAuthenticatedAPICall(marvelSlug)
  // Create a function to fetch marvel information

  // Todo: getPagination

  // Todo: getQuery
  try {
    const response: any = await $fetch(requestURI)
    // Return the marvel data
    return response
  } catch (error) {
    // Handle errors here
    console.error('Error fetching marvel:', error)
    throw new Error('Failed to fetch marvel information')
  }
})