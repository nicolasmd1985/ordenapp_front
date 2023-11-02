<template>

    <!-- <tw-navbar expand="lg" light bg="light" container>
      <NuxtLink to="/">
        <img
          src="~/assets/images/logo-03.png"
          height="80"
          alt=""
          loading="lazy"
        />  
      </NuxtLink>
      <tw-navbar-toggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></tw-navbar-toggler>
      <tw-collapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav right class="mb-2 mb-lg-0">
          <tw-navbar-item to="/plans">
            Plans
          </tw-navbar-item>
          <template v-if="store.userAuthentication">
            <tw-navbar-item to="/admins/profile">
              My Profile 
            </tw-navbar-item>
            <tw-navbar-item to="/" @click="signOut">
              Sign Out
            </tw-navbar-item>

          </template>
          <template v-else>
            <tw-navbar-item to="/register">
              Create Account
            </tw-navbar-item>
            <tw-navbar-item to="/login">
              Login
            </tw-navbar-item>
          </template>

        </MDBNavbarNav>
      </tw-collapse>
    </tw-navbar> -->
    
</template>

<script setup >
  import { createPinia } from 'pinia';
  import { createApp } from 'vue'
  import App from '@/app.vue'

  const pinia = createPinia()
  const app = createApp(App)
  app.use(pinia)


  import { useAuthStore } from '~/store/store'

  const store = useAuthStore();
  const token = store.token;


  function signOut() {
    store.userAuthentication = false;
  }

  // Initialization for ES Users
  import {
    Collapse,
    Dropdown,
    initTE,
  } from "tw-elements";

  initTE({ Collapse, Dropdown });




</script>