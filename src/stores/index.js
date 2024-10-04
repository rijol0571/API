 // store/index.js
 import { createPinia } from 'pinia'
 import { useAuthStore } from './auth' // Import your auth store
 const authStore = useAuthStore(pinia)
 
 const pinia = createPinia()
 
 export { pinia, authStore }
