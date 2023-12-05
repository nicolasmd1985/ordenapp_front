<template>
  
  <br/>

  <span>search value: </span>
  <input type="text" v-model="searchValue">

  <EasyDataTable
    :headers="headers"
    :items="items"
    :search-field="searchField"
    :search-value="searchValue"
  />
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import type { Header, Item } from "vue3-easy-data-table";

  const props = defineProps({
    items: {
      type: Array as PropType<Item[]>,
      default: [],
    },
  });


  // const searchField = ref("player");
  const searchField = ["subsidiary", "phone", "address", "email", "initials", "enabled", "options"];
  const searchValue = ref("");

  const headers: Header[] = [
    { text: "subsidiary", value: "subsidiary" },
    { text: "phone", value: "phone"},
    { text: "address", value: "address"},
    { text: "email", value: "email"},
    { text: "initials", value: "initials", sortable: true},
    { text: "enabled", value: "enabled"},
    { text: "options", value: "options"},
  ];

</script>