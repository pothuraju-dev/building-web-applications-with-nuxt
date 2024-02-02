<template>
    <div>
      <p v-html="gistDiv" />
    </div>
  </template>
  <script setup lang="ts">
  defineProps<{
    gistDiv: string
  }>()
  </script>
  <style scoped>
  @import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
  </style>