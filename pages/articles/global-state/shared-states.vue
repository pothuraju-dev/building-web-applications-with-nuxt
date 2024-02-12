<!-- ShoppingCart.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <div>
      <h2 class="text-lg font-bold mb-4">Shopping Cart</h2>
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex items-center justify-between border-b border-gray-200 py-2"
      >
        <div>
          <p>{{ item.name }} - {{ item.price }}</p>
        </div>
        <button
          @click="removeItemFromCart(index)"
          class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
    <p class="mt-8">
      Current color:
      <span class="text-lg font-bold" :style="{ color: color }">{{
        color
      }}</span>
    </p>
    <button
      @click="addItemToCart({ name: 'New Item', price: 10 })"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add Item
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartItems, useColor } from '~/composables/states'

const cartItems = useCartItems()
const color = useColor()

// Function to remove item from cart
const removeItemFromCart = (index: number) => {
  cartItems.value.splice(index, 1)
}

// Function to add item to cart
const addItemToCart = (item: { name: string; price: number }) => {
  cartItems.value.push(item)
}
</script>
