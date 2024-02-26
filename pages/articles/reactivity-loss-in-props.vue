<template>
  <div>
    <div>
      <Counter :count="count" />
      <button @click="count++">Increment</button>
    </div>
    <div>
      <p>
        <a :href="githubLink" target="_blank">View Component File on GitHub</a>
      </p>
      <div id="gist-section">
        <GistView></GistView>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
