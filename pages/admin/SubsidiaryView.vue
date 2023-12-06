<template>
  <SubsidiaryCard
    :id_subsidary="subsidiary.id_subsidary"
    :subsidiary_name="subsidiary.subsidiary_name"
    :address="subsidiary.address"
    :phone="subsidiary.phone"
    :email="subsidiary.email"
    :type="type" 
  />
</template>

<script setup>
  definePageMeta({
    layout: "dashadmin",
  });
</script>

