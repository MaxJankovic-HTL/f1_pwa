import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMyStore = defineStore('myStore', () => {
  const track = ref([]);

  const fetchdata = async () => {
    const { data } = await axios.get('http://localhost:3000/track');
    track.value = data;
    console.log(track.value);
  }

  return { track, fetchdata };
});