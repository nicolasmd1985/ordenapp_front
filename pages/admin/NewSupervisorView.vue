<template>
  <SupervisorCard 
    :subsidiary_name="items"
  ></SupervisorCard>
</template>

<script setup>
  definePageMeta({
    layout: "dashadmin",
  });

  
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