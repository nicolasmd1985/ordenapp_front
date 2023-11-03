<template>

  <ClientOnly>
    <NavBarAdmin/>
    <SideBarAdmin/> 
    <div class="" id="content">
      <div class="my-5 flex text-start">
        <slot/>
      </div>      
    </div>
  </ClientOnly>

</template>


<script setup>

</script>