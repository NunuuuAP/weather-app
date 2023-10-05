<script setup lang="ts">
import { watch } from 'vue';

import { location, refreshLocation, weather} from '@/controllers/weather-api';
import ContainerComponent from '@/components/ContainerComponent.vue';

refreshLocation();
watch(location, async () => {
	refreshLocation();
});
</script>

<template>
	<ContainerComponent id="background">
		<div class="content" >
			<div v-for="item in weather?.daily" v-bind:key="item.weather" class="items">
				<div >
					<p >{{ item.date.substring(0, 3) }}</p>
				</div>
				<div>
					<p v-if="item.weather == 'Clear' || item.weather == 'Sunny'"><i class="bi-sun"></i></p>
					<p v-if="item.weather == 'Cloudy' || item.weather == 'Partly cloudy' || item.weather == 'Overcast'"><i class="bi-cloud"></i></p>
					<p v-if="item.weather == 'Rain'"><i class="bi-rain"></i></p>
					<p v-if="item.weather == 'Snow'"><i class="bi-snow"></i></p>
				</div>
				<div>
					<p>Max {{ item.maxTemp }}ºC</p>
					<p>Min {{ item.minTemp }}ºC</p>
				</div>
			</div>
		</div>
	</ContainerComponent>
</template>

<style scoped>

.content {
  display: flex;
  text-align: center;
  height: 100%;
  gap: 10px;
  overflow-x: auto;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-background-mute);
  padding: 20px;
  border-radius: 25px;
  height: 100%;
  gap: 10px;
}

.items i {
	font-size: 3rem;
}

</style>


