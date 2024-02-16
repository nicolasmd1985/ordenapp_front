<template>
  <ClientsData 
    :client_data="items"
  />
</template>


<script setup>
definePageMeta({
  layout: "dashsupervisor",
});

const router = useRouter();

import useAuthStore from '~/store/authstore'
import useAdminSupervisor from "~/store/adminSupervisor";

const adminSupervisor = useAdminSupervisor();
const authStore = useAuthStore();

if (!authStore.userAuthentication) {
  router.push('/loginview');
}

const { data, error, pending, refresh }  = await useAsyncGql({
  operation: 'Clients',
  variables: { subsidiaryId: adminSupervisor.subsidiaryId },
});

const items = [];

if (data.value != null) {
  data.value.clients.forEach((client) => {
    items.push({
      "full_name": client.firstName + ' ' + client.lastName,
      "phone": client.phoneNumber1,
      "email": client.email,
      "options": client.id,
    })
  });
}


</script>


