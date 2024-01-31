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

const testSample = {
  "location": {
    "name": "Patancheru",
    "region": "Andhra Pradesh",
    "country": "India",
    "lat": 17.47,
    "lon": 78.37,
    "tz_id": "Asia/Kolkata",
    "localtime_epoch": 1706729340,
    "localtime": "2024-02-01 2:28"
  },
  "current": {
    "last_updated_epoch": 1706728500,
    "last_updated": "2024-02-01 00:45",
    "temp_c": 21,
    "temp_f": 69.8,
    "is_day": 0,
    "condition": {
      "text": "Clear",
      "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
      "code": 1000
    },
    "wind_mph": 5.6,
    "wind_kph": 9,
    "wind_degree": 100,
    "wind_dir": "E",
    "pressure_mb": 1017,
    "pressure_in": 30.03,
    "precip_mm": 0,
    "precip_in": 0,
    "humidity": 69,
    "cloud": 0,
    "feelslike_c": 21,
    "feelslike_f": 69.8,
    "vis_km": 6,
    "vis_miles": 3,
    "uv": 1,
    "gust_mph": 15.3,
    "gust_kph": 24.6
  }
}

const props = defineProps<Props>()
const data: Ref<WeatherData | undefined> = ref()

const fetchWeather = async (coords: Geolocation): Promise<WeatherData> => {
  const { latitude, longitude } = coords
  const q = `${latitude},${longitude}`
  try {
    // const res = await useAsyncData('weatherData', () =>
    //   $fetch(`/api/weather/${q}`)
    // )
    const res = {data: {value:testSample}, status:{value: 'success'}}
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
      class="max-w-md w-96 rounded-lg shadow-lg p-4 flex bg-white text-black"
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
