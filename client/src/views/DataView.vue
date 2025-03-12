<script setup>
import { useTrackStore } from '../stores/trackStore.js';
import { ref } from 'vue';

const store = useTrackStore();

store.fetchdata();

const columns = [
  { name: 'name', required: true, label: 'Name', align: 'center', field: 'name' },
  { name: 'breitengrad', align: 'left', label: 'Breitengrad', required: true, field: 'breitengrad' },
  { name: 'laengengrad', align: 'left', label: 'Laengengrad', required: true, field: 'laengengrad' },
  { name: 'baujahr', align: 'left', label: 'Baujahr', field: 'baujahr' },
  { name: 'actions', align: 'center', label: 'Actions'}
]

const showChangeDialog = ref(false);
const showNewDialog = ref(false);
const selectedTrack = ref(null);
const newTrackData = ref({ name: '', breitengrad: '', laengengrad: '', baujahr: '' });
const newTrackName = ref('');

function openChangeDialog(track) {
  selectedTrack.value = track;
  newTrackName.value = track.name;
  showChangeDialog.value = true;
}

function confirmChangeTrackName() {
  if (selectedTrack.value) {
    store.patchdata(selectedTrack.value, newTrackName.value);
    showChangeDialog.value = false;
  }
}

function deleteTrack (track) {
  store.deletedata(track);
};

function openNewDialog() {
  newTrackData.value = { name: '', breitengrad: '', laengengrad: '', baujahr: '' };
  showNewDialog.value = true;
}

function confirmNewTrack() {
  store.postdata(
    newTrackData.value.name,
    newTrackData.value.breitengrad,
    newTrackData.value.laengengrad,
    newTrackData.value.baujahr
  );
  showNewDialog.value = false;
}
</script>

<template>
  <div class="column items-center q-mt-md">
    <q-table
      v-if="store.track"
      :rows="store.track"
      :columns="columns"
      row-key="id"
      responsive
      class="my-sticky-header-table"
      :pagination="{ rowsPerPage: 10 }"
      :grid="$q.screen.lt.md"
    >

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4" v-if="$q.screen.lt.md">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">{{ props.row.name || 'Track' }}</div>
            {{ props.row.breitengrad }}
            {{ props.row.laengengrad }}
            {{ props.row.baujahr }}
            </q-card-section>
            <q-separator />
            <q-card-actions>
              <q-btn color="secondary" dense @click="deleteTrack(props.row)">Löschen</q-btn>
              <q-btn color="quaternary" icon="edit" dense @click="openChangeDialog(props.row)">Ändern</q-btn>
              <q-btn color="tertiary" dense @click="openNewDialog">Neuen Track</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div class="row no-wrap q-gutter-sm justify-center">
            <q-btn color="secondary" @click="deleteTrack(props.row)">Löschen</q-btn>
            <q-btn color="quaternary" icon="edit" @click="openChangeDialog(props.row)">Ändern</q-btn>
            <q-btn color="tertiary" @click="openNewDialog">Neuen Track</q-btn>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showChangeDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Track-Namen ändern</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newTrackName" label="Neuer Name" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Abbrechen" v-close-popup />
          <q-btn color="quaternary" label="Speichern" @click="confirmChangeTrackName()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showNewDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Neuen Track hinzufügen</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newTrackData.name" label="Name" />
          <q-input v-model="newTrackData.breitengrad" label="Breitengrad" type="number" />
          <q-input v-model="newTrackData.laengengrad" label="Längengrad" type="number" />
          <q-input v-model="newTrackData.baujahr" label="Baujahr"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Abbrechen" v-close-popup />
          <q-btn color="quaternary" label="Erstellen" @click="confirmNewTrack()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>