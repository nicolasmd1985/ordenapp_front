<template>
  <div class="h-full flex justify-center items-center p-6">
    <div
      class="w-96 block rounded-lg bg-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input 
          v-model="name" 
          type="text" 
          id="name" 
          name="name" 
          class=" py-[0.32rem] mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
        <input v-model="address" type="text" id="address" name="address" class=" py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
        <input v-model="phone" type="text" id="phone" name="phone" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="email" type="text" id="email" name="email" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <button 
        type="submit" 
          class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
        Create Subsidiary
      </button>
    </form>
  </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const address = ref('');
const phone = ref('');
const email = ref('');

import useAuthStore from '~/store/authstore';
const authStore = useAuthStore();

const router = useRouter();
if (!authStore.userAuthentication) {
    router.push('/loginview');
  }



const submit = async () => {
    // Perform create subsidiary logic here
  // useGqlToken({
  //   token: authStore.token,
  //   config: {
  //     type: 'Bearer',
  //     name: 'Authorization'
  //   }
  // })
    console.log('Creating subsidiary...');
    const { data, error, pending, refresh } = await useAsyncGql('CreateSubsidiary', { 
      name: name.value,
      address: address.value,
      phone: phone.value,
      email: email.value
    });

    if (error.value) {
      console.log(error.value)
    }
    if (data.value) {
      console.log('Created subsidiary!');
      router.push('/admin/subsidiariesView');

    }
    if (pending) {
      
    }
  };
</script>
