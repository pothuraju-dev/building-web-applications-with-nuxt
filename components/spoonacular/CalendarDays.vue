<script setup lang="ts">
import { CardView } from '#build/components'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { RecipeResults } from '~/types/spoonacular'

interface Today {
  id: number
  title: string
  readyInMinutes: number
}

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
  days: {
    type: Number,
    required: false,
    default: 7,
  },
  recipes: {
    type: Array,
    required: false,
    value: [],
  },
})

interface Card {
  date: Date
  content: string
  today: Today[]
}

const generateCards = (startDate: Date, numberOfDays: number): Card[] => {
  const cards: Card[] = []
  const currentDate = new Date(startDate)

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(currentDate.getTime())
    const content = `Card ${i + 1}`
    const recipesThisDay = (props.recipes || []).filter((recipe: any) => {
      const recipeDate = new Date(recipe.date).setHours(0, 0, 0, 0)
      return recipeDate === date.setHours(0, 0, 0, 0)
    }) as Today[]

    cards.push({ date, content, today: recipesThisDay })
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return cards
}
const cards = ref<Card[]>(generateCards(props.date, props.days))
const modalVisible: Ref<boolean> = ref(false)
const dateSelected: Ref<Date | null> = ref(null)
const recipeModalOpen = (card: Card): void => {
  dateSelected.value = card.date
  modalVisible.value = true
}

const recipeModalClose = (): void => {
  dateSelected.value = null
  modalVisible.value = false
}
const insertRecipeOnDay = (recipe: RecipeResults): void => {
  if (dateSelected.value) {
    cards.value = cards.value.map((card) => {
      if (card.date.getTime() === dateSelected.value?.getTime()) {
        return { ...card, today: [...card.today, recipe] }
      }
      return card
    })
    recipeModalClose()
  }
}

const removeRecipeFromDay = (recipe: { id: number }, date: Date): void => {
  cards.value = cards.value.map((card) => {
    if (card.date.getTime() === date.getTime()) {
      return {
        ...card,
        today: card.today.filter((today) => today.id !== recipe.id),
      }
    }
    return card
  })
}
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 ml-2">Upcoming Days</h1>
    <ul role="list" class="grid grid-cols-1 gap-6 bg">
      <li
        v-for="card in cards"
        :key="card.date.toString()"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <SpoonacularCalendarCard
          :card="card"
          @daySelected="recipeModalOpen"
          @recipeRemoved="removeRecipeFromDay"
        />
      </li>
    </ul>
    <Modal :open="modalVisible" @close="recipeModalClose">
      <template #title>Search for a recipe to add to this day</template>
      <RecipeSearch @recipeSelected="insertRecipeOnDay" />
    </Modal>
  </div>
</template>
