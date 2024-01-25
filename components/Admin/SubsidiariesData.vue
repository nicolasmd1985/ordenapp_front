<template>
  <span>search value: </span>
  <input type="text" v-model="searchValue"/>

  <EasyDataTable
    :headers="headers"
    :items="subsidiary_data"
    :search-field="searchField"
    :search-value="searchValue"
  >
    <template #item-options="{ options }" >
      <div class="flex space-x-1">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="editItem(options)"
        >
          Edit
        </button>
        <button
          class="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          @click="supervision(options)"
        >
          Supervision
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
  import useSubsidiary from "~/store/subsidiary";
  

  const subsidiary = useSubsidiary();
  const router = useRouter();
  const searchField = ["subsidiary", "phone", "address", "email", "initials", "options"];
  const searchValue = ref("");

  const headers: Header[] = [
    { text: "subsidiary", value: "subsidiary" },
    { text: "phone", value: "phone"},
    { text: "address", value: "address"},
    { text: "email", value: "email"},
    { text: "initials", value: "initials", sortable: true},
    { text: "options", value: "options"},
  ];

  const props = defineProps({
    subsidiary_data: {
      type: Array as PropType<Item[]>,
      required: true
    }
  })

  const subsidiary_data = ref(props.subsidiary_data)
  

  const editItem = async (option: any) => {
    console.log("editItem", option);
    const { data, error, pending, refresh }  = await useAsyncGql({ 
      operation: 'GetSubsidiary',
      variables: { id: option }, 
    });
    if (data.value) {
      subsidiary.id_subsidary = data.value.getSubsidiary.id || '';
      subsidiary.subsidiary_name = data.value.getSubsidiary.name || '';
      subsidiary.address = data.value.getSubsidiary.address || '';
      subsidiary.email = data.value.getSubsidiary.email || '';
      subsidiary.phone = data.value.getSubsidiary.phone || '';
      subsidiary.subsidiaryInitials = data.value.getSubsidiary.subsidiaryInitials || '';
      subsidiary.type = 'edit';
      router.push({ path: '/admin/subsidiaryview' });
    }


  };

  const supervision = async (option: any) => {
    console.log("supervision", option);
    router.push({ path: '/supervisor/technicalmap' });
  };

  const deleteItem = async (option: any) => {
    console.log("deleteItem", option);
    const { data, error, pending, refresh }  = await useAsyncGql({ 
      operation: 'DeleteSubsidiary',
      variables: { id: option }, 
    });
    if (data.value) {
      console.log("deleteItem", data.value.deleteSubsidiary);
      const index = subsidiary_data.value.findIndex((item) => item.options === option);
      if (index > -1) {
        subsidiary_data.value.splice(index, 1);
      }
    }
    if (error.value) {
      console.log("deleteItem", error.value);
      
    }
  };  

</script>
