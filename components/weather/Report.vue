<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

type WeatherData = {
  location: {
    localtime: Date
    name: string
    region: string
    country: string
  }
  current: {
    temp_c: number
    temp_f: number
    precip_mm: number
    condition: {
      text: string
      icon: string
    }
    wind_degree: number
    wind_kph: number
    wind_mph: number
    is_day: number
    humudity: number
    vis_km: number
    vis_miles: number
  }
}

type Geolocation = {
  latitude: number
  longitude: number
}

interface Props {
  coords: Geolocation
}

const props = defineProps<Props>()
const data: Ref<WeatherData | undefined> = ref()

const fetchWeather = async (coords: Geolocation): Promise<WeatherData> => {
  const { latitude, longitude } = coords
  const q = `${latitude},${longitude}`
  try {
    const res = await useAsyncData('weatherData', () =>
      $fetch(`/api/weather/${q}`)
    )
    // Check if the response is in the 'idle' state and refresh if necessary

    if (res.status.value === 'success') {
      // Assuming your API returns a JSON response with the WeatherData structure
      return res.data.value as WeatherData
    } else {
      throw new Error('Failed to fetch weather information')
    }
  } catch (error) {
    // Handle errors here
    console.error('Error fetching weather:', error)
    throw new Error('Failed to fetch weather information')
  }
}

const formatDate = (dateString: Date): string =>{
  const date = new Date(dateString);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
  return new Intl.DateTimeFormat("default",{
    dateStyle:'long',
    timeStyle:'short',
  }).format(date)
}

onMounted(() => {
  const { latitude, longitude } = props.coords || {}
  if (latitude !== undefined && longitude !== undefined) {
    ;(async () => {
      const weatherResponse = await fetchWeather({
        latitude,
        longitude,
      })
      data.value = weatherResponse
    })()
  } else {
    console.error('Latitude or longitude is undefined.')
  }
})
</script>

<template>
  <div>
    <article
      v-if="data && data.current"
      class="w-full rounded-lg shadow-lg p-4 flex bg-white text-black"
    >
      <div class="basis-1/4 text-left">
        <img :src="data.current.condition.icon" class="h-16 w-16" />
      </div>
      <div class="basis-3/4 text-left">
        <h1 class="text-3xl font-bold">
          {{ data.current.condition.text }}
          <span class="text-2xl block">{{ data.current.temp_c }}&#8451;</span>
        </h1>
        <p>{{ data.location.name }} {{ data.location.region }}</p>
        <p>Precripitation: {{ data.current.precip_mm }}mm</p>
        <p data-testid="localtime">{{ formatDate(data.location.localtime) }}</p>
        <p>
          Wind: {{ data.current.wind_kph }} kph
          <WeatherWindDirection :degress="data.current.wind_degree"/>
        </p>
      </div>
    </article>
    <div v-else>Loading...</div>
  </div>
</template>
