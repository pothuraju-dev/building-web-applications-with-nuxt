<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { Comic } from '~/types/marvel'

const isLoading: Ref<boolean> = ref(false)
const data: Ref<Comic[] | undefined> = ref()
const getComics = async () => {
  isLoading.value = true
  const comics = await useComics()
  console.log('comics', comics)
  data.value = comics.results
  isLoading.value = false
}
onMounted(async () => {
  setTimeout(async () => {
    await getComics()
  }, 0)
})
</script>
<template>
  <div v-if="isLoading">
    <LoadingIndicator v-if="isLoading" text="Loading comics..." />
  </div>
  <div v-if="data?.length && !isLoading">
    <div
      class=""
    >
      <ul
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li :key="comic.id" v-for="comic in data" class="relative">
          
         <MarvelComicCard :comic="comic"></MarvelComicCard>
        </li>
      </ul>
      <!-- <div :key="comic.id" v-for="comic in data">
        <MarvelComicCard :comic="comic"></MarvelComicCard>
      </div> -->
    </div>
  </div>
</template>
