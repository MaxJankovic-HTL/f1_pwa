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
  { name: 'breitengrad', align: 'center', label: 'Breitengrad', required: true, field: 'breitengrad' },
  { name: 'laengengrad', label: 'Laengengrad', required: true, field: 'laengengrad' },
  { name: 'img', label: 'Bilder', field: 'img' },
  { name: 'baujahr', label: 'Baujahr', field: 'baujahr' }
]

</script>

<template>
  <div class="column items-center q-mt-md">
    <q-table
      title="Treats"
      :rows="store.track"
      :columns="columns"
      row-key="id"
    />
  </div>
</template>
