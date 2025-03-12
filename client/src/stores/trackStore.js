import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useTrackStore = defineStore('trackStore', () => {
  const track = ref([]);
  const base_url = import.meta.env.VITE_BASE_URL;

  const fetchdata = async () => {
    const res = await axios.get(base_url+'/track');
    track.value = res.data;
    console.log(track.value);
  }

  const deletedata = async (track) => {
    await axios.delete(base_url + `/track/${track.id}`);
    fetchdata();
  }

  const patchdata = async (track, name) => {
    await axios.patch(`${base_url}/track/${track.id}`, { name });
    fetchdata();
  };

  const postdata = async (name, breitengrad, laengengrad, baujahr) => {
    await axios.post(`${base_url}/track`, {
      name,
      bg: breitengrad,
      lg: laengengrad,
      bj: baujahr,
    });
    fetchdata();
  };

  return { track, fetchdata, deletedata, patchdata, postdata };
});