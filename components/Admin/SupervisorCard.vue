<template>
  <div class="h-full flex justify-center items-center p-6">
    <div
      class="w-96 block rounded-lg bg-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
        <input 
          :value="first_name"
          type="text" 
          id="first_name" 
          name="first_name" 
          class=" py-[0.32rem] mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mb-4">
        <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
        <input :value="last_name" 
        type="text" id="last_name" name="last_name" class=" py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
      <div class="mb-4" id="select_subsidiary">
        <label for="subsidiary_name" class="block text-sm font-medium text-gray-700">Subsidiary Name</label>
        <select v-model="selectedSubsidiary" id="subsidiary_name" name="subsidiary_name" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          <option v-for="subsidiary in subsidiary_name" :key="subsidiary.id" :value="subsidiary.id">{{ subsidiary.name }}</option>
        </select>
      </div>
      <div class="mb-4 hidden">
        <label for="id_supervisor" class="block text-sm font-medium text-gray-700">Id Subsidiary</label>
        <input :value="id_supervisor"
        type="text" id="id_supervisor" name="id_supervisor" class="py-[0.32rem] p-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <button 
        type="submit" 
          class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
        {{ props.type == 'create' ? 'Create' : 'Update'  }}
      </button>
    </form>
  </div>

  </div>

</template>

<script setup>

  const props = defineProps({
    id_supervisor: {
      type: String,
      default: ''
    },
    first_name:{
      type: String,
      default: ''
    },
    last_name:{
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
    subsidiary_name:{
      type: Array,
      default: []
    },
    subsidiary_id:{
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

    const id_supervisor = document.getElementById('id_supervisor').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subsidiary_name = document.getElementById('subsidiary_name').value;
    if (props.type == 'create') {
      graphql('CreateSupervisor', id_supervisor, first_name, last_name, phone, email, subsidiary_name)
    } else {
      graphql('UpdateSupervisor', id_supervisor, first_name, last_name, phone, email, subsidiary_name)
    }
  };

  async function graphql(operation, id_supervisor, first_name, last_name, phone, email, subsidiary_name) {
    const { data, error, pending, refresh }  = await useAsyncGql({ 
      operation: operation,
      variables: { 
        id: id_supervisor, 
        firstName: first_name, 
        lastName: last_name, 
        phoneNumber1: phone, 
        email: email, 
        subsidiaryId: subsidiary_name
      }, 
    });

    if (data.value && (data.value.createSupervisor?.errors.length == 0 || data.value.updateSupervisor?.errors.length == 0)) {
      router.push({ path: '/admin/supervisorsview' });
    }
    if (error.value || (data.value.createSupervisor?.errors.length > 0 || data.value.updateSupervisor?.errors.length > 0)) {
      useNuxtApp().$toast.error(data.value.createSupervisor.errors);
      console.log(error.value)
    }

  }

  const subsidiary_n = props.subsidiary_id;
  const selectedSubsidiary = ref(subsidiary_n);


</script>
