<script setup lang="ts">
import { watch } from 'vue'

import { location, refreshLocation, weather, error, loading } from '@/controllers/weather-api'
import ContainerComponent from '@/components/ContainerComponent.vue'
import router from '../router/index'
import IconComponent from '@/components/IconComponent.vue'

/* Update location and weather data at init and stays watching for changes */
refreshLocation()
watch(location, async () => {
  refreshLocation()
})

/* Function to redirect to hourly prediction view  */
const redirectToHourly = (e: Event) => {
  e.preventDefault()
  router.push('/hourly')
}
</script>

<template>
  <ContainerComponent v-if="!weather">
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-if="!loading && error != ''">
      <i class="bi-exclamation-diamond"></i>
      <p>Error: {{ error }}</p>
    </div>
  </ContainerComponent>

  <ContainerComponent v-if="weather && error == ''" v-on:click="redirectToHourly">
    <main>
      <IconComponent v-if="weather.current" :currentItem="weather.current"></IconComponent>
      <div>
        <h1>{{ weather.current.temp }}ºC</h1>
        <h2>{{ weather.city }}, {{ weather.country }}</h2>
      </div>
    </main>
    <div class="other-info">
      <div class="item">
        <i class="bi-water"></i>
        <div class="content">
          <h3>{{ weather.current.humidity }}%</h3>
          <p>Humidity</p>
        </div>
      </div>
      <div class="item">
        <i class="bi-wind"></i>
        <div class="content">
          <h3>{{ weather.current.wind }} km/h</h3>
          <p>Wind</p>
        </div>
      </div>
    </div>
  </ContainerComponent>
</template>

<style scoped>
.container {
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
}

.container h1 {
  font-size: 4rem;
  text-align: center;
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.other-info {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.other-info h3 {
  font-size: 1.5rem;
}

.other-info i {
  font-size: 2rem;
}

.other-info .item {
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: left;
  gap: 10px;
}

.other-info .item i {
  font-size: 2rem;
}

.other-info .content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .other-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-end;
    text-align-last: end;
  }
}

@media (min-width: 1024px) and (max-height: 700px) {
  main {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
