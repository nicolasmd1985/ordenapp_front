import {defineStore} from 'pinia'

export default defineStore('admin_supervisor', {
  state: () => ({
    subsidiaryId: '' 
  }),
  persist: true

})
