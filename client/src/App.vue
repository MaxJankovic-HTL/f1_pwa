<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>

<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <img alt="Formel 1" src="../public/images/f1.png"></img>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/data" label="Daten" />
        <q-route-tab to="/about" label="Impressum" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Lora";
  src: url("/fonts/Lora/Lora-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "LibreBodoni";
  src: url("/fonts/LibreBodoni/LibreBodoni-Regular.ttf") format("truetype");
}

* {
  font-family: "Montserrat";
}
</style>
