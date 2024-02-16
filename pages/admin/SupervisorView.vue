<template>
  <SupervisorCard
    :id_supervisor="supervisor.id_supervisor"
    :first_name="supervisor.firstName"
    :last_name="supervisor.lastName"
    :phone="supervisor.phone"
    :email="supervisor.email"
    :subsidiary_name="items"
    :subsidiary_id="supervisor.subsidiary_id"
    :type="supervisor.type"
  />
</template>

<script setup>
  definePageMeta({
    layout: "dashadmin",
  });
  import useSupervisor from '~/store/supervisor';
  const supervisor = useSupervisor();


  const { data, error, pending, refresh }  = await useAsyncGql({
    operation: 'Subsidiaries',
  });

  const items = [];

  if (data.value != null) {
    data.value.subsidiaries.forEach((subsidiary) => {
      items.push({
        "name": subsidiary.name,
        "id": subsidiary.id,
      })
    });
  }  

  if (error.value) {
    console.log(error.value)
  }
  
</script>

