<template>
  <ClientOnly>
    <ProfileCard
      :avatar="profile.avatar"
      :firstName="profile.firstName"
      :lastName="profile.lastName"
      :email="profile.email"
    >
  </ProfileCard>

  </ClientOnly>
  
</template>

<script setup>

  definePageMeta({
    layout: "dashadmin",
  });


  import useProfile from '~/store/profile'
  import ProfileCard from '~/components/ProfileCard.vue';
  import useAuthStore from '~/store/authstore'
  
  const profile = useProfile();
  const router = useRouter();
  const authStore = useAuthStore();


  if (!authStore.userAuthentication) {
    router.push('/loginview');
  }

  debugger;


  const { data, error, pending, refresh } = await useAsyncGql({
    operation: 'UserAdmin',
  });


  if (data.value != null) {
    // debugger;
    profile.avatar = data.value.userAdmin.avatar;
    profile.firstName = data.value.userAdmin.firstName;
    profile.lastName = data.value.userAdmin.lastName;
    profile.email = data.value.userAdmin.email;    
  } 
  if (error.value) {
      // eslint-disable-next-line no-console
      console.log(error.value)
    }


</script>