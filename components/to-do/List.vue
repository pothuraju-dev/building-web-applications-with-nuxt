<!-- components/to-do/List.vue -->

<script setup lang="ts">
// Import necessary modules from Vue and Heroicons
import { ref, onMounted, computed } from 'vue'
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'
import type { Ref } from 'vue'

// Define the structure of each todo item
type Item = {
  title: string
  checked?: boolean
}

// Define reactive references for storage, newTodo, and currentItemIndex
const storageItems: Ref<Item[]> = ref([])
const newTodo: Ref<string> = ref('')
const currentItemIndex: Ref<number> = ref(0)

// Initialize the list items if the storage is empty
const initListItems = (): void => {
  if (storageItems.value?.length === 0) {
    const listItems = [
      { title: 'Make a todo list app', checked: true },
      // ... other default items ...
    ]
    setToStorage(listItems)
    storageItems.value = listItems
  }
}

// Load items from local storage on component mount
onMounted(() => {
  storageItems.value = getFromStorage()
  initListItems()
})

// Add or edit an item based on user input
const addEditItem = (value: string, type: 'add' | 'edit') => {
  // Logic for adding or editing an item
  if (type === 'add') {
    storageItems.value.push({ title: value, checked: false })
  } else if (type === 'edit') {
    storageItems.value[currentItemIndex.value].title = value
    currentItemIndex.value = 0
  }
  setToStorage(storageItems.value)
}

// Update the checked status of an item
const updateItem = (item: Item): void => {
  // Logic for updating the checked status of an it
  const updatedItem = findItemInList(item)
  if (updatedItem) {
    toggleItemChecked(updatedItem)
    setToStorage(storageItems.value)
  }
}

// Edit a selected item
const editItem = (selectedItem: Item, index: number): void => {
  // Logic for editing an item
  newTodo.value = selectedItem.title
  currentItemIndex.value = index
}

// Delete an item by index
const deleteItem = (index: number): void => {
  // Logic for deleting an item
  // Ensure index is within bounds
  if (index >= 0 && index < storageItems.value.length) {
    // Use splice to remove the item at the given index
    storageItems.value.splice(index, 1)
    setToStorage(storageItems.value)
  }
}

// Find an item in the list based on its properties
const findItemInList = (item: Item): Item | undefined => {
  // Logic for finding an item in the list
  return storageItems.value.find(
    (itemInList: Item) => itemInList.title === item.title
  )
}

// Toggle the checked status of an item
const toggleItemChecked = (item: Item): void => {
  // Logic for toggling the checked status of an item
  item.checked = !item.checked
}

// Computed property to get a sorted list based on checked status
const sortedList = computed(() =>
  [...storageItems.value].sort(
    (a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0)
  )
)

// Save items to local storage
const setToStorage = (items: Item[]): void => {
  localStorage.setItem('list-items', JSON.stringify(items))
}

// Get items from local storage
const getFromStorage = (): Item[] | [] => {
  const stored = localStorage.getItem('list-items')
  if (stored) {
    return JSON.parse(stored)
  }
  return []
}
</script>
<template>
  <div>
    <!-- ToDoAddItem component for adding new todos -->
    <ToDoAddItem v-model="newTodo" @input="addEditItem"></ToDoAddItem>

    <!-- List of todos -->
    <ul role="list" class="divide-y divide-gray-200">
      <li
        :key="key"
        v-for="(item, key) in sortedList"
        class="flex justify-between gap-x-4 py-3"
      >
        <!-- ToDoListItem component for displaying each todo item -->
        <ToDoListItem :is-checked="item.checked" @click="updateItem(item)"
          >{{ item.title }}
          <!-- Template for the right side of the list item -->
          <template #right-side>
            <div class="flex gap-x-2.5">
              <!-- Edit button with PencilSquareIcon -->
              <button @click="editItem(item, key)">
                <PencilSquareIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
              <!-- Delete button with TrashIcon -->
              <button @click="deleteItem(key)">
                <TrashIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </button>
            </div>
          </template>
        </ToDoListItem>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
li {
  margin: 0.4rem 0;
}
</style>
