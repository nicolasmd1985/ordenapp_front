<template>
  <SubsidiaryCard
    :id_subsidary="subsidiary.id_subsidary"
    :subsidiary_name="subsidiary.subsidiary_name"
    :address="subsidiary.address"
    :phone="subsidiary.phone"
    :email="subsidiary.email"
    :type="subsidiary.type" 
  />
</template>

<script setup>
  definePageMeta({
    layout: "dashadmin",
  });
  import useSubsidiary from '~/store/subsidiary';
  const subsidiary = useSubsidiary();


  
</script>

