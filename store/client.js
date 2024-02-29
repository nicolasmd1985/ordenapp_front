import {defineStore} from 'pinia';

export default defineStore('client', {
  state: () => ({
    id_client: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: '',
  }),
  persist: true
})