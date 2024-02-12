<template>
  <div v-if="!store.isAuthenticated">
    <button @click="store.login('username', 'password')">Login</button>
  </div>
  <div v-else>
    <button @click="store.logout()">Logout</button>
  </div>
</template>
<script setup lang="ts">
const store = useGlobalAuthStore()
</script>
