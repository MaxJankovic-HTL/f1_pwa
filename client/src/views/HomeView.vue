<script setup>
import { useMyStore } from '../stores/myStore';
import { ref } from 'vue';

const store = useMyStore();

store.fetchdata();

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: 'name',
  },
  { name: 'breitengrad', label: 'Breitengrad', required: true, field: 'breitengrad' },
  { name: 'laengengrad', label: 'Laengengrad', required: true, field: 'laengengrad' },
  { name: 'img', label: 'Bilder', field: 'img' },
  { name: 'baujahr', label: 'Baujahr', field: 'baujahr' }
]

var target = document.getElementById('target');
var watchId;

function appendLocation(location, verb) {
  verb = verb || 'updated';
  var newLocation = document.createElement('p');
  newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
  target.appendChild(newLocation);
}

if ('geolocation' in navigator) {
  document.getElementById('askButton').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, 'fetched');
    });
    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
} else {
  target.innerText = 'Geolocation API not supported.';
}
</script>

<template>
  <div class="column items-center q-mt-md">
    <q-table
      :rows="store.track"
      :columns="columns"
      row-key="id"
    />
  </div>
  
  <button id="askButton">Ask for location</button>

  <div id="target"></div>
</template>

