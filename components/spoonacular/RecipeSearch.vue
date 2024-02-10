<script setup lang="ts">
import type { Ref } from 'vue'
import { useRecipeSearch } from '#imports'
import type { RecipeResults } from '~/types/spoonacular'
const emits = defineEmits(['recipeSelected'])
const searchQuery: Ref<string> = ref('')
const serachResults: Ref<RecipeResults[] | []> = ref([])
const getSearchResults = async () => {
  const result = await useRecipeSearch(searchQuery.value)
  serachResults.value = result.results
}

let timeout: ReturnType<typeof setTimeout>

const debouncedSearch = (): void => {
  clearTimeout(timeout)
  timeout = setTimeout(async () => {
    getSearchResults()
  }, 500)
}

watch(searchQuery, (): void => {
  debouncedSearch()
})
const recipeSelected = (result: RecipeResults): void => {
  emits('recipeSelected', result)
}
</script>
<template>
  <div>
    <div>
      <label for="search-query">Search</label>
      <input id="search-query" type="text" v-model="searchQuery" />
    </div>
    <ul>
      <li v-for="(result, index) in serachResults" :key="index">
        <button @click="recipeSelected(result)">{{ result.title }}</button>
      </li>
    </ul>
  </div>
</template>
