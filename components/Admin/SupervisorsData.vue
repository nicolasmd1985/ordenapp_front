<template>
  <span>search value: </span>
  <input type="text" v-model="searchValue"/>

  <EasyDataTable
    :headers="headers"
    :items="supervisor_data"
    :search-field="searchField"
    :search-value="searchValue"
  >
    <template #item-options="{ options }" >
      <div class="flex justify-center space-x-1">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="editItem(options)"
        >
          Edit
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          @click="deleteItem(options)"
        >
          Delete
        </button>
      </div>
    </template>
  </EasyDataTable>

</template>

<script setup lang="ts">
  import type { Header, Item } from "vue3-easy-data-table";
  import useSupervisor from "~/store/supervisor";
  

  const supervisor = useSupervisor();
  const router = useRouter();
  const searchField = ["full_name", "phone", "email", "subsidiary", "options"];
  const searchValue = ref("");

  const headers: Header[] = [
    { text: "full_name", value: "full_name" },
    { text: "phone", value: "phone"},
    { text: "email", value: "email"},
    { text: "subsidiary", value: "subsidiary"},
    { text: "options", value: "options"},
  ];

  const props = defineProps({
    supervisor_data: {
      type: Array as PropType<Item[]>,
      required: true
    }
  })

  const supervisor_data = ref(props.supervisor_data)
  

  const editItem = async (option: any) => {
    console.log("editItem", option);
    const { data, error, pending, refresh }  = await useAsyncGql({ 
      operation: 'Supervisors',
      variables: { id: option }, 
    });
    if (data.value) {
      // supervisor.id_supervisor = data.value.supervisors || '';
      // subsidiary.full_name = data.value.getSubsidiary.nam || '';
      // subsidiary.address = data.value.getSubsidiary.address || '';
      // subsidiary.email = data.value.getSubsidiary.email || '';
      // subsidiary.phone = data.value.getSubsidiary.phone || '';
      // subsidiary.subsidiaryInitials = data.value.getSubsidiary.subsidiaryInitials || '';
      // subsidiary.type = 'edit';
      router.push({ path: '/admin/subsidiaryview' });
    }
  };

  const deleteItem = async (option: any) => {
    // console.log("deleteItem", option);
    // const { data, error, pending, refresh }  = await useAsyncGql({ 
    //   operation: 'DeleteSubsidiary',
    //   variables: { id: option }, 
    // });
    // if (data.value) {
    //   console.log("deleteItem", data.value.deleteSubsidiary);
    //   const index = subsidiary_data.value.findIndex((item) => item.options === option);
    //   if (index > -1) {
    //     subsidiary_data.value.splice(index, 1);
    //   }
    // }
    // if (error.value) {
    //   console.log("deleteItem", error.value);
      
    // }
  };  

</script>
