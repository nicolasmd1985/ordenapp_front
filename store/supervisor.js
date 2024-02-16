import {defineStore} from 'pinia';

export default defineStore('supervisor', {
  state: () => ({
    id_supervisor: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subsidiary_name: '',
    subsidiary_id: '',
    type: '',
  }),
  persist: true
})