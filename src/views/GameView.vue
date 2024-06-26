<script setup>
import { ref } from 'vue'

const sizeX = ref(0);
const sizeY = ref(0);

const toggleColor = (event) => {
  event.target.classList.toggle('blue')
}

</script>


<template>
  <v-container class="flex-container">
    <div class="field">
      <div class="input-container">
        <v-text-field v-model="sizeY" label="sizeY" type="number" />
      </div>
      <div class="input-container">
        <v-text-field v-model="sizeX" label="sizeX" type="number" />
      </div>
    </div>

    <div v-for="y in parseInt(sizeY)" :key="y" class="row">
      <div v-for="x in parseInt(sizeX)" :key="x" class="square" @mouseover="toggleColor($event)">
      </div>
    </div>

  </v-container>
</template>



<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
}

.input-container {
  margin-right: 10px;
}

.square {
  --primary-color: white;
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  margin: 5px;

}

.blue {
  --primary-color: blue;
}

.row {
  display: flex;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
