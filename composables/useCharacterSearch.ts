import type { Characters } from '~/types/marvel'

export const useCharacters = async (
  query: string,
  page: number = 0
): Promise<Characters> => {
  const res = await useAsyncData('comicsData', () =>
    $fetch(`/api/marvel/characters?nameStartsWith=${query}&offset=${page}`, {})
  )
  return res.data.value.data as Characters
}
