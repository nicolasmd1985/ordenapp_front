<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
      <div ><p>{{ store.name }}</p></div>

    </NuxtLayout>
  </div>
</template>

<script setup>

import { useStore } from '~/store/store'
const store = useStore();

  // import { useAuthStore } from "~/stores/auth";
  // const authStore = useAuthStore();
  // const { user, isLoggedIn } = storeToRefs(authStore);
  // await authStore.loggedInUser;
</script>
