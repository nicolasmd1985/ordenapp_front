<template>
    <SupervisorsData 
      :supervisor_data="items"
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
    operation: 'Supervisors',
  });

  const items = [];

  if (data.value != null) {
    data.value.supervisors.forEach((supervisor) => {
      items.push({
        "full_name": supervisor.firstName + ' ' + supervisor.lastName,
        "phone": supervisor.phoneNumber1,
        "email": supervisor.email,
        "subsidiary": supervisor.subsidiary,
        "options": supervisor.id,
      })
    });
  }
  



</script>


