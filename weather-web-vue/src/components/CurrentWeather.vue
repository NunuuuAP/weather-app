<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, watch } from 'vue';

import type { IWeatherInfo } from '@/controllers/weather-api';
import { fetchWeather, location } from '@/controllers/weather-api';

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
	<p v-if="loading">Cargando</p>
	<p v-if="!loading && error != ''">{{ error }}</p>

	<div class="container" v-if="weather && error == ''">
		<i class="bi bi-sun"></i>
		<h1>{{ weather.temp }}ºC</h1>
		<h2>{{ weather.city }}, {{ weather.country }}</h2>
		<div class="other-info">
			<div class="item">
				<i class="bi-water"></i>
				<div class="content">
					<h3>{{ weather.humidity }}%</h3>
					<p>Humedad</p>
				</div>
			</div>
			<div class="item">
				<i class="bi-wind"></i>
				<div class="content">
					<h3>{{ weather.wind }} km/h</h3>
					<p>Velocidad</p>
				</div>
			</div>
		</div>
	</div>	
</template>

<style scoped>

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--color-background-soft);
	color: var(--color-text);
	height: 100%;
	border-radius: 25px;
	margin: 10px 20px;
	padding: 30px;
}
.container i {
	font-size: 5rem;
}

.container h1 {
	font-size: 4rem;
	text-align: center;
	margin: 0;
}

.other-info {
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-around;
	margin-top: 15px;
	
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
	display: flex;
	width: 100vw;
	background-color: blue;
	}
}

</style>
