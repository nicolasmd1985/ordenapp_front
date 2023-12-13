import {defineStore} from 'pinia'

export default defineStore('authstore', {
  state: () => ({
    userAuthentication: false 
  }),

})
