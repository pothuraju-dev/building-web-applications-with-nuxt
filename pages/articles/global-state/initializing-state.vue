<template>
  <div
    v-if="jokesData"
    class="rounded rounded-2xl bg-white px-4 py-5 sm:px-6 flex flex-col gap-y-4"
  >
    <p class="text-3xl font-semibold">{{ jokesData.setup }}</p>
    <p class="text-xl font-semibold">{{ jokesData.punchline }}</p>
  </div>
</template>
<script setup lang="ts">
interface Joke {
  type: string
  setup: string
  punchline: string
}
const jokesData: Ref<Joke> = useState('jokes')

// Function to fetch initial joke data
const fetchJokesData = async () => {
  jokesData.value = await $fetch(
    'https://official-joke-api.appspot.com/random_joke'
  )
}

onMounted(async () => {
  await fetchJokesData()
})
</script>
