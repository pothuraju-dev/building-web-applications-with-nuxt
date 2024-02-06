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
    return (await useRecipeAPI('recipes/search', { query })) as any
  } catch {
    throw new Error('An eror occurred while trying to search recipes')
  }
}

export const useRecipeInformation = async (id: string): Promise<Recipe> => {
  try {
    return (await useRecipeAPI(
      `/api/spoonacular/recipes/${id}/information`
    )) as any
  } catch {
    throw new Error(
      'An error occured while trying to retrieve recipe information'
    )
  }
}
