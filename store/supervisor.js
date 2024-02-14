import {defineStore} from 'pinia';

export default defineStore('supervisor', {
  state: () => ({
    id_supervisor: '',
    full_name: '',
    email: '',
    phone: '',
    subsidiary: '',
    type: '',
  }),
  persist: true
})