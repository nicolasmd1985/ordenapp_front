import {defineStore} from 'pinia'

export default defineStore('authstore', {
  state: () => ({
    token: '233412312',
    userAuthentication: false 
  }),

})
