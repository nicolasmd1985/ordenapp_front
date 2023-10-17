<template>
    <MDBNavbar expand="lg" light bg="light" container>
      <MDBNavbarBrand href="#">
        <img
          src="~/assets/images/logo-03.png"
          height="80"
          alt=""
          loading="lazy"
        />  
      </MDBNavbarBrand>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav right class="mb-2 mb-lg-0">
          <MDBNavbarItem to="#" active>
            Plans
          </MDBNavbarItem>
          <MDBNavbarItem href="#">
            Create Account
          </MDBNavbarItem>
          <MDBNavbarItem to="#">
            Login
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </template>

<script setup lang="ts">
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