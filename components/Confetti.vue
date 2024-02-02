<template>
  <div>
    <ConfettiExplosion
      v-if="visible"
      v-bind="{
        particleCount,
        particleSize,
        duration,
        colors,
        force,
        stageHeight,
        stageWidth,
        shouldDestroyAfterDone,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import ConfettiExplosion from 'vue-confetti-explosion'

interface Props {
  visible?: boolean
  particleCount?: number
  particleSize?: number
  duration?: number
  colors?: string[]
  force?: number
  stageHeight?: number
  stageWidth?: number
  shouldDestroyAfterDone?: boolean
}

withDefaults(defineProps<Props>(), {
  visible: false,
  particleCount: 150,
  particleSize: 12,
  duration: 3500,
  colors: () => ['#FFC700', '#FF0000', '#2E3191', '#41BBC7'],
  force: 0.5,
  stageHeight: 800,
  stageWidth: 1600,
  shouldDestroyAfterDone: true,
})
</script>
