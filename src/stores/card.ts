import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', () => {
  const card = ref({})

  return { card } 
}, {
  persist: true
})
