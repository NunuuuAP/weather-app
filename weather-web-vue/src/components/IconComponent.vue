<script setup lang="ts">

/* Optional variables to show weather icons in every case */
defineProps<{
    currentItem?: {
        humidity: number;
        weather: string;
        temp: number;
        wind: number;
    };
    hourItem?: {
        time: string;
        weather: string;
        temp: number;
    };
    weekItem?: {
        date: string;
        maxTemp: number;
        minTemp: number;
        weather: string;
    };
}>();
</script>

<template>
    <div v-if="currentItem !== undefined" class="big">
        <span class="sun" v-if="currentItem.weather == 'Clear' || currentItem.weather == 'Sunny'">
            <i class="bi-sun-fill"></i>
        </span>
        <span class="clouds" v-if="currentItem.weather == 'Cloudy' || currentItem.weather == 'Partly cloudy' || 
            currentItem.weather == 'Overcast'">
            <i class="bi-cloud-fill"></i>
        </span>
        <span class="rain" v-if="currentItem.weather == 'Rain'">
            <i class="bi-cloud-rain-fill"></i>
        </span>
        <span class="snow" v-if="currentItem.weather == 'Snow'">
            <i class="bi-cloud-snow-fill"></i>
        </span>
    </div>

    <div v-if="hourItem !== undefined" class="small">
        <span class="night" v-if="(hourItem.weather == 'Clear' || hourItem.weather == 'Sunny') && 
		    (hourItem.time >= '20' || hourItem.time < '07')">
            <i class="bi-moon-fill"></i>
        </span>
		<span class="sun" v-if="(hourItem.weather == 'Clear' || hourItem.weather == 'Sunny') && 
		    (hourItem.time < '20' && hourItem.time >= '07')">
            <i class="bi-sun-fill"></i>
        </span>
		<span class="clouds" v-if="hourItem.weather == 'Cloudy' || hourItem.weather == 'Partly cloudy' || 
		    hourItem.weather == 'Overcast'">
            <i class="bi-cloud-fill"></i>
        </span>
		<span class="rain" v-if="hourItem.weather == 'Rain'">
            <i class="bi-cloud-rain-fill"></i>
        </span>
		<span class="snow" v-if="hourItem.weather == 'Snow'">
            <i class="bi-cloud-snow-fill"></i>
        </span>
    </div>

    <div v-if="weekItem !== undefined" class="medium">
		<span class="sun" v-if="weekItem.weather == 'Clear' || weekItem.weather == 'Sunny'">
            <i class="bi-sun-fill"></i>
        </span>
		<span class="clouds" v-if="weekItem.weather == 'Cloudy' || weekItem.weather == 'Partly cloudy' || 
		    weekItem.weather == 'Overcast'">
            <i class="bi-cloud-fill"></i>
        </span>
		<span class="rain" v-if="weekItem.weather == 'Rain'">
            <i class="bi-cloud-rain-fill"></i>
        </span>
		<span class="snow" v-if="weekItem.weather == 'Snow'">
            <i class="bi-cloud-snow-fill"></i>
        </span>
    </div>
</template>

<style scoped>
.big {
	font-size: 6rem;
}

.medium {
    font-size: 3rem;
}

.small {
    font-size: 1.5rem;
}
</style>
