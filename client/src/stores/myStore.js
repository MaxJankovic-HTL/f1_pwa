import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useMyStore = defineStore('myStore', () => {
  const track = ref([]);
  const base_url = import.meta.env.VITE_BASE_URL;

  const fetchdata = async () => {
    const { data } = await axios.get(base_url+'/track');
    track.value = data;
    console.log(track.value);
  }

  return { track, fetchdata };
});