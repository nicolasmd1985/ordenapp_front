<template>
  <ClientCard
    :id_client="client.id_client"
    :first_name="client.firstName"
    :last_name="client.lastName"
    :phone="client.phone"
    :email="client.email"
    :type="client.type"
  />
</template>

<script setup>
  definePageMeta({
    layout: "dashsupervisor",
  });
  import useClient from '~/store/client';
  const client = useClient();

</script>

