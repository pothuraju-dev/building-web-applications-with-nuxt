<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-semibold mb-4">App Configuration</h1>
    <!-- <div class="mb-4">
      <label for="marvelApiKey" class="block font-semibold mb-1"
        >Marvel API Key:</label
      >
      <input
        type="text"
        id="marvelApiKey"
        v-model="marvelApiKey"
        placeholder="API Key"
        class="border rounded-md px-3 py-2 w-full"
      />
    </div> -->
    <div class="mb-4">
      <label for="spoonacularApiKey" class="block font-semibold mb-1"
        >Spoonacular API Key:</label
      >
      <input
        type="text"
        id="spoonacularApiKey"
        v-model="spoonacularApiKey"
        placeholder="API Key"
        class="border rounded-md px-3 py-2 w-full"
      />
    </div>
    <!-- <div class="mb-4">
      <label for="weatherApiKey" class="block font-semibold mb-1"
        >Weather API Key:</label
      >
      <input
        type="text"
        id="weatherApiKey"
        v-model="weatherApiKey"
        placeholder="API Key"
        class="border rounded-md px-3 py-2 w-full"
      />
    </div> -->
    <button
      @click="saveConfig"
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
    >
      Save
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppConfiguration',
  setup() {
    const configStore = useConfigStore()

    const marvelApiKey = ref(configStore.getMarvelApiKey)
    const spoonacularApiKey = ref(configStore.getSpoonacularApiKey)
    const weatherApiKey = ref(configStore.getWeatherApiKey)

    const saveConfig = () => {
      configStore.setApiConfig({
        marvelApiKey: marvelApiKey.value || '',
        spoonacularApiKey: spoonacularApiKey.value || '',
        weatherApiKey: weatherApiKey.value || ''
      })
    }

    return {
      marvelApiKey,
      spoonacularApiKey,
      saveConfig,
      weatherApiKey
    }
  },
})
</script>

<style>
/* You can add Tailwind CSS utility classes here if needed */
</style>
