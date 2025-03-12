<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = ref(null);
const userMarker = ref(null);
const userPosition = ref({ lat: 0, lng: 0 });

onMounted(() => {
  if (!navigator.geolocation) {
    alert('Geolocation wird nicht unterstützt.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userPosition.value = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      initMap();
    },
    (error) => {
      console.error("Fehler beim Abrufen der Position:", error);
      alert('Konnte Standort nicht abrufen.');
    }
  );
});

function initMap() {
  map.value = L.map('map').setView([userPosition.value.lat, userPosition.value.lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map.value);

  userMarker.value = L.marker([userPosition.value.lat, userPosition.value.lng]).addTo(map.value)
    .bindPopup('Du bist hier!')
    .openPopup();
}
</script>

<template>
  <div class="column items-center q-mt-md">
    <div id="map" style="height: 1000px; width: 90%; border-radius: 10px;"></div>
  </div>
</template>