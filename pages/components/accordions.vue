<template>
  <Accordion :items="accordions">
    <template #summary="{ info }"> {{ info }}</template>
    <template #instructions="{ info }"> {{ info }}</template>
  </Accordion>
</template>
<script setup lang="ts">
const accordions = {
  Summary: {
    title: 'Cooking Summary',
    key: 'summary',
  },
  Instructions: {
    title: 'Cooking Instructions',
    key: 'instructions',
  },
}
</script>
