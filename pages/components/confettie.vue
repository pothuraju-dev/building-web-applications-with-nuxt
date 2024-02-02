<template>
  <div class="flex flex-col gap-y-4">
    <span
      class="flex justify-center isolate inline-flex rounded-md gap-4"
    >
      <button
        type="button"
        class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        @click="explode"
      >
        Explode
      </button>
      <button
        type="button"
        class="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        @click="explodeConfetties"
      >
        Explode Multiple
      </button>
    </span>
    <div class="flex justify-center">
      <Confetti
        class="absolute"
        :visible="visible"
        v-bind="{...confettiProps}"
      />
      <div ref="componentContainer" class="absolute"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Confetti from '~/components/Confetti.vue'

const confettiProps = {particleCount: 200,particleSize: 10, duration:2500, colors:['var(--yellow)', 'var(--red)', '#2E3191', '#41BBC7'], force:0.5, shouldDestroyAfterDone: true  }

const visible = ref(false)
const explode = async () => {
  visible.value = false
  await nextTick()
  visible.value = true
}

const componentContainer = ref(null)
const { addComponent: explodeConfetties } = useDynamicComponent(
  componentContainer,
  Confetti,
  {
    ...confettiProps,
    visible: true,
  }
)
</script>
