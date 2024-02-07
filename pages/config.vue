<template>
  <form @submit.prevent="saveConfig">
    <input
      type="text"
      v-model="spoonacularAPI"
      placeholder="Please enter your spponacular API key"
    />
    <button type="submit">Save</button>
  </form>
</template>
<script setup lang="ts">
const spoonacularAPI: Ref<string | ''>= ref("")
const saveConfig = ():void =>{
    localStorage.setItem('spoonacular-api-key', spoonacularAPI.value)
}
</script>
