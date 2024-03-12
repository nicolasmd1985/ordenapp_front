<template>
  <TechniciansData 
    :technician_data="items"
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
  operation: 'Technicians',
  variables: { subsidiaryId: adminSupervisor.subsidiaryId },
});

const items = [];

if (data.value != null) {

  data.value.technicians.forEach((technician) => {
    items.push({
      "full_name": technician.firstName + ' ' + technician.lastName,
      "phone": technician.phoneNumber1,
      "email": technician.email,
      "options": technician.id,
    })
  });
}


</script>


