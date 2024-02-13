<script setup lang="ts">
import { computed } from 'vue'
import type { Comic } from '@/types/marvel'

const props = defineProps<{
  comic: Comic
}>()

const lf = new Intl.ListFormat('en')

const charactersList = computed(() =>
  props.comic.characters.items.map((c) => c.name)
)
const creatorsList = computed(() =>
  props.comic.creators.items.map((c) => c.name)
)
</script>
<template>
  <div
    class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
  >
    <img
      :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
      alt=""
      class="pointer-events-none object-cover group-hover:opacity-75"
    />
    <button type="button" class="absolute inset-0 focus:outline-none">
      <span class="sr-only">View details for {{ comic.title }}</span>
    </button>
  </div>
  <p
    class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900"
  >
    {{ comic.title }}
  </p>
  <div class="truncate">
    <dl>
      <dt class="font-semibold">Series:</dt>
      <dd>{{ comic.series.name }}</dd>
      <dt v-if="charactersList.length > 0" class="font-semibold">
        Characters:
      </dt>
      <dd v-if="charactersList.length > 0">
        {{ lf.format(charactersList) }}
      </dd>
      <dt v-if="creatorsList.length > 0" class="font-semibold">Creators:</dt>
      <dd v-if="creatorsList.length > 0">{{ lf.format(creatorsList) }}</dd>
    </dl>
  </div>
</template>
