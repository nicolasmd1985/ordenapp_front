<template>
  <div v-if="hasValidCoords">
    <GoogleMap api-key="AIzaSyC7zkb57kG86b7ddqhrG1hJCmta9aoyIx8" style="width: 100%; height: 500px" :center="center" :zoom="13">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
  <div v-else>
    <GoogleMap api-key="AIzaSyC7zkb57kG86b7ddqhrG1hJCmta9aoyIx8" style="width: 100%; height: 500px" :center="center" :zoom="13">
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>

</template>

<script setup>
  definePageMeta({
    layout: "dashadmin",
  });

  import { GoogleMap, Marker } from "vue3-google-map";
  import { useGeolocation } from "@vueuse/core";
  import { watchEffect } from 'vue';


  const { coords, locatedAt, error, resume, pause } =  await useGeolocation()
  const hasValidCoords = ref(false);
  const center = {lat:  4.3 , lng:  -74.8};


  watchEffect(() => {
    if (coords.value.latitude !== 0 && coords.value.latitude !== Infinity &&
        coords.value.longitude !== 0 && coords.value.longitude !== Infinity) {
      // Proceed with actions using valid coordinates
      console.log('Valid coordinates obtained:', coords.value);
      // Perform your intended tasks here
      hasValidCoords.value = true;
      center.lat = coords.value.latitude;
      center.lng = coords.value.longitude;
    }
  });



</script>