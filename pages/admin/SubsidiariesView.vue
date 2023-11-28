<template>
  <!-- <ClientOnly> -->
    <InfoValue/>
    <!-- <p>{{ authStore.token }}</p>

  </ClientOnly> -->
</template>


<script setup>
  definePageMeta({
    layout: "dashadmin",
  });

  import InfoValue from '~/components/InfoValue.vue';

  const router = useRouter();

  import useAuthStore from '~/store/authstore'
  const authStore = useAuthStore();

  if (!authStore.userAuthentication) {
    router.push('/loginview');
  }

  useGqlToken({
    token: authStore.token,
    config: {
      type: 'Bearer',
      name: 'Authorization'
    }
  })

  const { data, error, pending, refresh }  = await useAsyncGql({
    // variables: {email: this.email, pass: this.password},
    operation: 'Subsidiaries',
  });


  if (data.value != null) {
    // debugger;
    // data.value.subsidiaries.forEach((subsidiary) => {
    //   items.push({
    //     "subsidiary": subsidiary.subsidiary,
    //     "phone": subsidiary.phone,
    //     "address": subsidiary.address,
    //     "email": subsidiary.email,
    //     "initials": subsidiary.initials,
    //     "enabled": subsidiary.enabled,
    //     "options": subsidiary.options,
    //   })
    // });
  }  

  if (error.value) {
      // eslint-disable-next-line no-console
      // debugger;
      console.log(error.value)
    }

</script>


