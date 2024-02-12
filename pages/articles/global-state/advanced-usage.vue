<template>
  <div class="container mx-auto px-4 py-8">
    <div>
      <h2 class="text-lg font-bold mb-4">Messages</h2>
      <div v-for="(message, index) in messages" :key="index" class="mb-2">
        <p class="text-gray-800">{{ message }}</p>
      </div>
    </div>
    <div>
      <h2 class="text-lg font-bold mb-4">Online Users</h2>
      <div v-for="(user, index) in onlineUsers" :key="index" class="mb-2">
        <p class="text-green-600">{{ user }} is online</p>
      </div>
    </div>
    <div class="mt-8">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type your message"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <button
        @click="sendMessageHandler"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Send Message
      </button>
    </div>
    <div class="mt-4">
      <input
        v-model="newUser"
        type="text"
        placeholder="New user ID"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500"
      />
      <button
        @click="trackOnlineUserHandler"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Track Online User
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const messages = useState<string[]>('messages', () => [])
const onlineUsers = useState<string[]>('onlineUsers', () => [])
let newMessage = ''
let newUser = ''

// Function to send message
const sendMessage = (message: string) => {
  // Send message logic
  messages.value.push(message)
}

// Function to track online users
const trackOnlineUsers = (userId: string) => {
  // Track online users logic
  onlineUsers.value.push(userId)
}

// Handler for sending a message
const sendMessageHandler = () => {
  sendMessage(newMessage)
  newMessage = ''
}

// Handler for tracking online user
const trackOnlineUserHandler = () => {
  trackOnlineUsers(newUser)
  newUser = ''
}
</script>
