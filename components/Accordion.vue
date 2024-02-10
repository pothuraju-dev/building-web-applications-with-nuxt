<template>
  <div>
    <div class="mx-auto w-full rounded-2xl bg-white p-2">
      <Disclosure as="div"  v-slot="{ open }" v-for="accordion in Object.keys(items)" :key="accordion">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>{{ items[accordion].title }}</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
          <slot :name=" items[accordion].key" v-bind="{info: items[accordion]}"></slot>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

defineProps({
  items: Object,
  default: () => {},
})
</script>
