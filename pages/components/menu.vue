<template>
  <Menu label="Menu" :items="menuItems"></Menu>
</template>
<script setup lang="ts">
interface MenuItem {
  label: string
  to: string
}

type MenuArray = MenuItem[]

const menuItems:  (MenuArray | MenuItem)[] = [
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
