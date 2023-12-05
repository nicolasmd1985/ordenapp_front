<template>
  <!-- <ClientOnly> -->
    <InfoValue 
      :items="items"
    />
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


  const { data, error, pending, refresh }  = await useAsyncGql({
    // variables: {email: this.email, pass: this.password},
    operation: 'Subsidiaries',
  });

  const items = [];

  if (data.value != null) {
    data.value.subsidiaries.forEach((subsidiary) => {
      items.push({
        "subsidiary": subsidiary.name,
        "phone": subsidiary.phone,
        "address": subsidiary.address,
        "email": subsidiary.email,
        "initials": subsidiary.subsidiaryInitials,
        "enabled": subsidiary.enabled,
        "options": subsidiary.options,
      })
    });
  }  

  if (error.value) {
      // eslint-disable-next-line no-console
      // debugger;
      console.log(error.value)
    }

</script>


