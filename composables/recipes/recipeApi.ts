import type { SearchRecipe, Recipe } from '~/types/spoonacular'

interface ApiOptions {
  query?: string
}

export const useRecipeAPI = async (
  path: string,
  options?: ApiOptions
): Promise<any> => {
  const query = options?.query ? getQuery(options?.query) : ''
  const requestURI = getRequestURI(path, query)
  return useFetch(requestURI)
}

const getQuery = (query?: string): string => {
  return query ? `&query=${query}` : ''
}

const getRequestURI = (path: string, query?: string): string => {
  return `${path}?${query}`
}

export const useRecipeSearch = async (query: string): Promise<SearchRecipe> => {
  try {
    return (await useRecipeAPI('https://api.spoonacular.com/recipes/search', { query })) as any
  } catch {
    throw new Error('An eror occurred while trying to search recipes')
  }
}

export const useRecipeInformation = async (id: string): Promise<Recipe> => {
  try {
    return (await useFetch(
      `https://api.spoonacular.com/recipes/${id}/information/?apiKey=${
        useConfigStore().getSpoonacularApiKey
      }`
    )) as any
  } catch {
    console.error(
      'An error occured while trying to retrieve recipe information'
    )
  }
}
