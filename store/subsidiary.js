import {defineStore} from 'pinia';

export default defineStore('subsidiary', {
  state: () => ({
    id_subsidary: '',
    address: '',
    email: '',
    subsidiary_name: '',
    phone: '',
    subsidiaryInitials: '',
    type: '',
  }),
  persist: true
})