<script setup lang="ts">
interface Props {
  degress: number
}

const props = defineProps<Props>()
const windStyle = computed(() => ({
  transform: 'rotate(' + props.degress + 'deg)',
}))
</script>
<template>
    <span>
        <span class="inline-block" aria-hidden="true" data-testid="direction" :style="windStyle">⬇</span>
        <span class="sr-only" data-testid="direction-sr">Wind direction: {{ degress }} degress</span>
    </span>
</template>