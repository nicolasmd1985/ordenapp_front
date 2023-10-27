import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as any | null,
    userAuthentication: false as boolean
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    setUser(user: any) {
      this.user = user
    },
    clearToken() {
      this.token = null
      localStorage.removeItem('token')
    },
    clearUser() {
      this.user = null
    }
  },
})
