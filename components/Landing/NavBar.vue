<template>
    <MDBNavbar expand="lg" light bg="light" container>
      <NuxtLink to="/">
        <img
          src="~/assets/images/logo-03.png"
          height="80"
          alt=""
          loading="lazy"
        />  
      </NuxtLink>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav right class="mb-2 mb-lg-0">
          <MDBNavbarItem to="/plans">
            Plans
          </MDBNavbarItem>
          <template v-if="store.userAuthentication">
            <MDBNavbarItem to="/admins/profile">
              My Profile 
            </MDBNavbarItem>
            <MDBNavbarItem to="/" @click="signOut">
              Sign Out
            </MDBNavbarItem>

          </template>
          <template v-else>
            <MDBNavbarItem to="/register">
              Create Account
              <!-- <div><p>{{ authStore }}</p></div> -->
            </MDBNavbarItem>
            <MDBNavbarItem to="/login">
              Login
            </MDBNavbarItem>
          </template>

        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    
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

  import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  const collapse1 = ref(false);
  const dropdown1 = ref(false);



</script>