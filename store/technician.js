import {defineStore} from 'pinia';

export default defineStore('technician', {
  state: () => ({
    id_technician: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: '',
  }),
  persist: true
})