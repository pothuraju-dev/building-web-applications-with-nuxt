import type { Comics } from '~/types/marvel'

export const useComics = async (): Promise<Comics> => {
  const res = await useAsyncData('comicsData', () =>
    $fetch(`/api/marvel/comics`, {})
  )
  return res.data.value.data as Comics
}
