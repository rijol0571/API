 
import { defineStore } from 'pinia'
import { useAuthStore as importedAuthStore } from '../stores/auth.js'

import { setItem } from '../helpers/persistenceStore.js'

export const useAuthStore = defineStore('auth', {

  state: () => ({
    isSubmitting: false,
    isLoggedIn: null,
    currentUser: null,
    validationErrors: null,
  }),

  actions: {
    async register(credentials) {
      this.isSubmitting = true
      this.validationErrors = null

      try {
        const response = await authApi.register(credentials)
        this.isSubmitting = false
        this.isLoggedIn = true
        this.currentUser = response.data.user
        setItem('accessToken', response.data.user.token)
        return response.data.user
      } catch (error) {
        this.isSubmitting = false
        this.validationErrors = error.response.data.errors
      }
    }
  },
})