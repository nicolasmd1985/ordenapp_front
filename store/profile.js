import {defineStore} from 'pinia';

export default defineStore('profile', {
  state: () => ({
    id: 1,
    firstName: 'nicolas ',
    lastName: 'Mahecha',
    avatar: '@/assets/images/logo-03.png',
    state: 'active'
  })
})