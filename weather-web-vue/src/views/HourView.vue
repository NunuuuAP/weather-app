<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, watch } from 'vue';
import type { IWeatherInfo } from '@/controllers/weather-api';
import { fetchWeather, location } from '@/controllers/weather-api';
import ContainerComponent from '@/components/ContainerComponent.vue';

const loading: Ref<boolean> = ref<boolean>(true);
const error: Ref<string> = ref<string>("");
const weather: Ref<IWeatherInfo | null> = ref<IWeatherInfo | null>(null);

const refreshLocation = async () => {
	const data: boolean | IWeatherInfo = await fetchWeather(location.value);
	
	if (data == false) {
		loading.value = false;
		error.value = "Ciudad no existente.";
	} else {
		loading.value = false;
		weather.value = data as IWeatherInfo;
	}
}

refreshLocation();
watch(location, async () => {
	refreshLocation();
});
</script>

<template>
	<ContainerComponent>
		<div class="content" >
			<div v-for="item in weather?.hourly" v-bind:key="item.time">
				<div class="items">
					<div>
						<p>{{ item.time }}h</p>
					</div>
					<div>
						<p v-if="(item.weather == 'Clear' || item.weather == 'Sunny') && (item.time >= '20' || item.time < '07')"><i class="bi-moon"></i></p>
						<p v-if="(item.weather == 'Clear' || item.weather == 'Sunny') && (item.time < '20' && item.time >= '07')"><i class="bi-sun"></i></p>
						<p v-if="item.weather == 'Cloudy' || item.weather == 'Partly cloudy' || item.weather == 'Overcast'"><i class="bi-cloud"></i></p>
						<p v-if="item.weather == 'Rain'"><i class="bi-rain"></i></p>
						<p v-if="item.weather == 'Snow'"><i class="bi-snow"></i></p>
					</div>
					<div>
						<p>{{ item.temp }}ºC</p>
					</div>
				</div><hr>
			</div>
		</div>
	</ContainerComponent>
</template>

<style scoped>

.container {
	justify-content: unset;
}

.content {
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 100%;
}

.items {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.items i {
	font-size: 1.5rem;
}

hr {
	border: none;
    border-top: 1pt solid var(--color-background-mute);
	margin: 20px;
    text-align: center;
}
</style>

