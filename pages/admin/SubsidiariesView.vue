<template>
    <SubsidiariesData 
      :subsidiary_data="items"
    />
</template>


<script setup>
  definePageMeta({
    layout: "dashadmin",
  });


  const router = useRouter();

  import useAuthStore from '~/store/authstore'
  const authStore = useAuthStore();

  if (!authStore.userAuthentication) {
    router.push('/loginview');
  }


  const { data, error, pending, refresh }  = await useAsyncGql({
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
        "options": subsidiary.id,
      })
    });
  }  

  if (error.value) {
    console.log(error.value)
  }

</script>


