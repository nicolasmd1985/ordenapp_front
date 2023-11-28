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

  import useAuthStore from '~/store/authstore'
  import useProfile from '~/store/profile'

  import ProfileCard from '~/components/ProfileCard.vue';
  
  const authStore = useAuthStore();
  const profile = useProfile();
  const router = useRouter();


  if (!authStore.userAuthentication) {
    router.push('/loginview');
  }

  useGqlToken({
    token: authStore.token,
    config: {
      type: 'Bearer',
      name: 'Authorization'
    }
  })

  const { data, error, pending, refresh } = await useAsyncGql({
    // variables: {email: this.email, pass: this.password},
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
      // debugger;
      console.log(error.value)
    }


</script>