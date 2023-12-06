<template>
  <div class="h-full flex justify-center items-center p-6">
    <div
      class="w-96 block rounded-lg bg-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input 
          :value="subsidiary_name"
          type="text" 
          id="name" 
          name="name" 
          class=" py-[0.32rem] mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
        <input :value="address" 
        type="text" id="address" name="address" class=" py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
        <input :value="phone"
        type="text" id="phone" name="phone" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input :value="email"
        type="text" id="email" name="email" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4 hidden">
        <label for="id_subsidary" class="block text-sm font-medium text-gray-700">Id Subsidiary</label>
        <input :value="id_subsidary"
        type="text" id="id_subsidary" name="id_subsidary" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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

  const props = defineProps({
    id_subsidary: {
      type: String,
      default: ''
    },
    subsidiary_name:{
      type: String,
      default: ''
    },
    address:{
      type: String,
      default: ''
    },
    phone:{
      type: String,
      default: ''
    },
    email:{
      type: String,
      default: ''
    },
    type:{
      type: String,
      default: 'create'
    },
  });


  import useAuthStore from '~/store/authstore'
  const router = useRouter();
  const authStore = useAuthStore();
  if (!authStore.userAuthentication) {
    router.push('/loginview');
  }

  const submit = async () => {
    const id_subsidary = document.getElementById('id_subsidary').value;
    const subsidiary_name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    if (props.type == 'create') {
      graphql('CreateSubsidiary', id_subsidary, subsidiary_name, address, phone, email)
    } else {
      graphql('UpdateSubsidiary', id_subsidary, subsidiary_name, address, phone, email)
    }
  };

  async function graphql(query, id_subsidary, subsidiary_name, address, phone, email) {
    const { data, error, pending, refresh } = await useAsyncGql(query, {
      id_subsidary: id_subsidary, 
      name: subsidiary_name,
      address: address,
      phone: phone,
      email: email
    });

    if (error.value) {
      console.log(error.value)
    }
    if (data.value) {
      console.log(query);
      router.push('/admin/subsidiariesView');

    }
    if (pending) {
      
    }
  }
</script>
