<script setup lang="ts"></script>
<template>
  <div class="flex justify-between">
    <div class="flex flex-row my-2 gap-2">
      <CakeIcon
        class="h-8 w-8 text-violet-200 hover:text-violet-100"
        aria-hidden="true"
      ></CakeIcon>
      <p class="text-3xl font-semibold">Menu Planner</p>
    </div>
    <Menu :items="menuItems" title="Menu" class="my-2"></Menu>
  </div>
  <div></div>
</template>
<script setup lang="ts">
import { CakeIcon } from '@heroicons/vue/24/outline'
interface MenuItem {
  label: string
  to: string
}

type MenuArray = MenuItem[]

const menuItems: (MenuArray | MenuItem)[] = [
  {
    label: 'Home',
    to: '/apps/spoonacular/home',
  },
  {
    label: 'Recipes',
    to: '/apps/spoonacular/recipes',
  },
]
</script>
