import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

interface ApiConfig {
  marvelApiKey: string
  spoonacularApiKey: string
  weatherApiKey: string
}

export const useConfigStore = defineStore('api-config', () => {
  const apiConfig = ref<ApiConfig | any>(
    useLocalStorage('api-config', {
      marvelApiKey: '',
      spoonacularApiKey: '',
      weatherApiKey: '',
    })
  )

  const getSpoonacularApiKey = computed(() => apiConfig.value.spoonacularApiKey)
  const getMarvelApiKey = computed(() => apiConfig.value.marvelApiKey)
  const getWeatherApiKey = computed(() => apiConfig.value.weatherApiKey)

  const setMarvelApiKey = (apiKey: string) =>
    (apiConfig.value.marvelApiKey = apiKey)
  const setSpoonacularApiKey = (apiKey: string) =>
    (apiConfig.value.spoonacularApiKey = apiKey)
  const setWeatherApiKey = (apiKey: string) =>
    (apiConfig.value.getWeatherApiKey = apiKey)

  const setApiConfig = (config: ApiConfig) => apiConfig.value = config

  return {
    getMarvelApiKey,
    getSpoonacularApiKey,
    getWeatherApiKey,
    setMarvelApiKey,
    setSpoonacularApiKey,
    setWeatherApiKey,
    setApiConfig
  }
})
