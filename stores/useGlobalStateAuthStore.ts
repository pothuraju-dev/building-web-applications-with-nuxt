import { defineStore } from 'pinia'

// Define interface for user object
interface User {
  username: string
}

// Define interface for state properties
interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

// Define store
export const useGlobalAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(username: string, password: string) {
      // Perform authentication logic
      this.isAuthenticated = true
      this.user = { username }
    },
    logout() {
      // Perform logout logic
      this.isAuthenticated = false
      this.user = null
    },
  },
})
