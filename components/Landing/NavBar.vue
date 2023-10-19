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
          <MDBNavbarItem to="#" active>
            Plans
          </MDBNavbarItem>
          <MDBNavbarItem to="/register">
            Create Account
            <!-- <div><p>{{ authStore }}</p></div> -->
          </MDBNavbarItem>
          <MDBNavbarItem to="/login">
            Login
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    
</template>

<script setup >


  // import { useAuthStore } from '~/store/auth'
  // const authStore = useAuthStore;

  //   // import { useAuthStore } from "~/stores/auth";
  //   // const authStore = useAuthStore();
  //   // const { user, isLoggedIn } = storeToRefs(authStore);
  //   await authStore.
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