<template>
  <ClientOnly>
    <InfoValue/>
    <p>{{ authStore.token }}</p>

  </ClientOnly>
</template>


<script setup>
  definePageMeta({
    layout: "dashadmin",
  });

  import useAuthStore from '~/store/authstore'
  const authStore = useAuthStore();

  useGqlToken({
    token: authStore.token,
    config: {
      type: 'Bearer',
      name: 'X-Custom-Auth'
    }
  })

  const result = await useAsyncGql({
    // variables: {email: this.email, pass: this.password},
    operation: 'Subsidiaries',
  });


  if (result.data.value != null) {
    debugger;
  }  

</script>


