import {defineStore} from 'pinia';

export default defineStore('subsidiaries', {
  state: () => ({
    subsidiaries: []
  }),
  persist: true

})