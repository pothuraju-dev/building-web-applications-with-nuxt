<script lang="ts" setup>
import type { Ref } from 'vue'

type Geolocation = {
  latitude: number
  longitude: number
}

const coords: Ref<Geolocation | undefined> = ref()

const geolocationBlockedByUser: Ref<boolean> = ref(false)
const getGeolocation = async (): Promise<void> => {
  await navigator.geolocation.getCurrentPosition(
    async (position: { coords: Geolocation }) => {
      coords.value = position.coords
    },
    (error: { message: string }) => {
      geolocationBlockedByUser.value = true
      console.error(error.message)
    }
  )
}

onMounted(async () => {
  await getGeolocation()
})
</script>
<template>
  <div v-if="geolocationBlockedByUser">User denied access</div>
  <WeatherReport v-if="coords" :coords="coords" />
</template>
