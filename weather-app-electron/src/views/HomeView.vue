<script setup lang="ts">
import CurrentWeather from '@/components/CurrentWeather.vue';
import HourlyWeather from '@/components/HourlyWeather.vue';
import WeeklyWeather from '@/components/WeeklyWeather.vue';
</script>

<template>
  	<main>
		<CurrentWeather />
		<HourlyWeather class="big-screen"/>
	</main>
	<WeeklyWeather class="big-screen"/>
</template>

<style scoped>
main {
	display: flex;
	gap: 20px;
	overflow: auto;
	flex:1;
}

.big-screen {
	display: none;
}

@media(min-width: 1024px) {
	.big-screen {
		display: unset;
	}
}
</style>
