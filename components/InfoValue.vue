<template>
  <!-- <span>search field:</span> -->
  <!-- <select v-model="searchField">
    <option>player</option>
    <option>team</option>
  </select> -->
  
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

  // const searchField = ref("player");
  const searchField = ["Subsidiary", "Phone", "Address", "Email", "Initials", "Enabled", "Options"];
  const searchValue = ref("");

  const headers: Header[] = [
    { text: "Subsidiary", value: "subsidiary" },
    { text: "Phone", value: "phone"},
    { text: "Address", value: "address"},
    { text: "Email", value: "email"},
    { text: "Initials", value: "initials", sortable: true},
    { text: "Enabled", value: "enabled"},
    { text: "Options", value: "options"},
  ];

  const items: Item[] = [
    { "player": "Stephen Curry", "team": "GSW", "number": 30, "position": 'G', "height": '6-2', "weight": 185, "lastAttended": "Davidson", "country": "USA"},
    { "player": "Lebron James", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', "weight": 250, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA"},
    { "player": "Kevin Durant", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 240, "lastAttended": "Texas-Austin", "country": "USA"},
    { "player": "Giannis Antetokounmpo", "team": "MIL", "number": 34, "position": 'F', "height": '6-11', "weight": 242, "lastAttended": "Filathlitikos", "country": "Greece"},
  ];
</script>