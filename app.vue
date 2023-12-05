<script setup>
  import "tw-elements/dist/css/tw-elements.min.css";
  import useAuthStore from '~/store/authstore';
  const authStore = useAuthStore();
  useGqlToken({
    token: authStore.token,
    config: {
      type: 'Bearer',
      name: 'none'
    }
  })
  
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

