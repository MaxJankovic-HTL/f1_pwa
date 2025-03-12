<script setup>
import { onMounted } from 'vue';

let target;
let watchId;

function appendLocation(location, verb = 'updated') {
  const newLocation = document.createElement('p');
  newLocation.innerHTML = `Location ${verb}: ${location.coords.latitude}, ${location.coords.longitude}`;
  target.appendChild(newLocation);
}

onMounted(() => {
  target = document.getElementById('target');
  const askButton = document.getElementById('askButton');

  if (!askButton) return;

  if ('geolocation' in navigator) {
    askButton.addEventListener('click', () => {
      navigator.geolocation.getCurrentPosition((location) => {
        appendLocation(location, 'fetched');
      });
      watchId = navigator.geolocation.watchPosition(appendLocation);
    });
  } else {
    target.innerText = 'Geolocation API not supported.';
  }
});
</script>

<template>
  <div class="column items-center q-mt-md">
    <button id="askButton">Ask for location</button>
    <div id="target"></div>
  </div>
</template>
