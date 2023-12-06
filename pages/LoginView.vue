<template>
  <ClientOnly>
    <Login/>
  </ClientOnly>
</template>


<script setup lang="ts">
  definePageMeta({
    layout: "default",
  });
  import Login from '~/components/Login.vue';
</script>
