<template>
  <div id="app">
    <!-- Your other content goes here -->
    <Loaders :is-loading="loading" size="100px" ></Loaders>
    <Loaders text="sriram" :is-loading="loading" class="loader-container" type="dots" size="100px"></Loaders>
  </div>
</template>

<script lang="ts" setup>
const loading = ref(false)

// Simulate loading, you can replace this with your actual loading logic
setTimeout(() => {
  loading.value = true
}, 1000)
</script>
<style scoped lang="postcss">
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
