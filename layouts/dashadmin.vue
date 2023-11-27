<template>

  <ClientOnly>
    <NavBarAdmin/>
    <SideBarAdmin/> 
    <div class="" id="content">
      <div class="my-5">
        <NavBarName/>
        <slot/>
      </div>      
    </div>
  </ClientOnly>

</template>


<script setup>

</script>