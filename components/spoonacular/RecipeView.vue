<script setup lang="ts">
const router = useRouter();
const recipeId = Number(router.currentRoute.value.params.id);
</script>
<template>
    <SpoonacularCookingInstructions :id="recipeId" :active-panel="1"/>
</template>