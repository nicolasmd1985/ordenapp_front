<template>

  <div class="h-full flex justify-center items-center p-6">
    <div
    class="w-96 block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <form @submit.prevent="submit" class="">
      <!--Avatar-->
      <div class="relative col-span-2 mb-6">
        <img
          :src="avatar"
          class="rounded-full w-20 h-20 mx-auto"
          alt="Profile picture" />
      </div>

      <!--First Name input-->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          :value="firstName"
          type="text"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="firstNameId"
          aria-describedby="emailHelp"
          placeholder="Enter email" />
        <label
          for="firstNameId"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >First Name</label
        >
      </div>

      <!--Last Name input-->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          :value="lastName"
          type="text"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="lastNameId"
          placeholder="Password" />
        <label
          for="lastNameId"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Last Name</label
        >
      </div>

      <!--Email input-->
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          :value="email"
          type="email"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="emailId"
          placeholder="Password" />
        <label
          for="emailId"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Email</label
        >
      </div>

      <!--Submit button-->
      <button
        type="submit"
        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Submit
      </button>
    </form>
  </div>
  </div>

  
</template>

<script setup >

  onMounted(async () => {
    const { Ripple, Input, initTE } = await import("tw-elements");
    initTE({ Ripple, Input } ,{ allowReinits: true });
  });

  import useAuthStore from '~/store/authstore';
  const authStore = useAuthStore();
  import useProfile from '~/store/profile'
  const profile = useProfile();

  const props = defineProps({
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/500'
  },
  firstName: {
    type: String,
    default: 'FirstName'
  },
  lastName: {
    type: String,
    default: 'LastName'
  },
  email: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: null
  }
})



const submit = async () => {

  const firstName = document.getElementById('firstNameId').value;
  const lastName =  document.getElementById('lastNameId').value;
  const email =  document.getElementById('emailId').value;
  console.log('submit');
  const { data, error, pending, refresh } = await useAsyncGql('UpdateAdminUser', { 
    firstName: firstName, 
    lastName: lastName }
    );

  if (error.value) {
    // eslint-disable-next-line no-console
    console.log(error.value)
  }
  if (data.value) {
    profile.firstName = firstName.value;
    profile.lastName = lastName.value;
    profile.email = email.value;
  }
  if (pending) {
    
  }
}

</script>
