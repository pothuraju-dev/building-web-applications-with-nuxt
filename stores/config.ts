import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

interface ApiConfig{
  marvelApiKey: string;
  spoonacularApiKey: string
}

export const useConfigStore = defineStore(
  'api-config',
  () => {
    const apiConfig = ref<ApiConfig | any>(useLocalStorage('api-config', {
      marvelApiKey: '', spoonacularApiKey: ''
    }))

    const getSpoonacularApiKey = computed(() => apiConfig.value.spoonacularApiKey)
    const getMarvelApiKey = computed(() => apiConfig.value.marvelApiKey)

    const setMarvelApiKey = (apiKey: string) => (apiConfig.value.marvelApiKey = apiKey)
    const setSpoonacularApiKey = (apiKey: string) =>
      (apiConfig.value.spoonacularApiKey = apiKey)

    return {
      getMarvelApiKey,
      getSpoonacularApiKey,
      setMarvelApiKey,
      setSpoonacularApiKey,
    }
  }
)
