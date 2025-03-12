<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

</script>

<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-white text-primary" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="lt-md"/>

        <q-toolbar-title>
          <q-img class="q-ma-md" alt="Formel 1" src="../public/images/newf1.png" width="150px" />
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs v-if="!$q.screen.lt.md" align="left">
        <q-route-tab to="/" label="Home"/>
        <q-route-tab to="/data" label="Daten"/>
        <q-route-tab to="/about" label="Impressum"/>
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>
        <q-item clickable v-ripple to="/">
          <q-item-section class="text-primary">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/data">
          <q-item-section class="text-primary">Daten</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about">
          <q-item-section class="text-primary">Impressum</q-item-section>
        </q-item>
      </q-list>
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
