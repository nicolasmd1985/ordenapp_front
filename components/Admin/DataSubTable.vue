<template>
  <div>
    <easy-data-table :headers="headers" :items="items" alternating />
    <button @click="addFakeData">Add fake data</button>
    <button @click="deleteRow">Delete row</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { easyDataTable } from "vue3-easy-data-table";
// import the Header and Item types from the library
import type { Header, Item } from "vue3-easy-data-table";

// use the Header and Item types to annotate the headers and items variables
const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Phone", value: "phone" },
  { text: "Email", value: "email" },
];

let items: Ref<Item[]> = ref([]);

const addFakeData = () => {
  // generate some fake data using a library or a custom function
  const fakeData: Item = {
    name: "John Doe",
    address: "123 Main Street",
    phone: "555-1234",
    email: "john.doe@example.com",
  };
  // push the fake data to the items array
  items.value.push(fakeData);
};


// add a new function for deleting rows
const deleteRow = () => {
  // check if the items array is not empty
  if (items.value.length > 0) {
    // remove the last element from the items array
    items.value.pop();
  }
};
</script>

<style>
/* customize the table appearance using CSS variables */
.customize-table {
  --easy-table-body-even-background-color: lightgray;
  --easy-table-body-odd-background-color: white;
}
</style>
