<script setup lang="ts">
import { location } from '../controllers/weather-api';

import type { Ref } from 'vue';
import { ref } from 'vue';

const searchLocation: Ref<string> = ref<string>("");

function setSearchLocation(e: Event) {
	location.value = searchLocation.value;
}
</script>

<template>
	<div class="container">
		<div class="item menu"><i class="bi-list"></i></div>

		<h1>WEATHER NAPP</h1>

		<form @submit.prevent="setSearchLocation">
			<input v-model="searchLocation" id="location" class="item" type="text" name="search"
				placeholder="Ciudad" spellcheck="false" />
			<button class="item"><i class="bi-search"></i></button>
		</form>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	max-height: 100px;
	width: 100vw;
	align-items: center;
	justify-content: space-between;
	padding: 30px 20px 20px 20px;
	gap: 10px;
}

.container h1 {
	display: none;
}

.container form {
	display: flex;
	gap: 10px;
	width: 100%;
}

.container input {
	flex: 1;
	background-color: transparent;
	height: 100%;
	border-style: none;
	border-radius: 25px;
	text-indent: 20px;
	padding: 2px;
}

.container input:focus {
	outline: var(--color-accent) solid 2px;
}

.container button {
	background-color: transparent;
	border-style: none;
	color: var(--color-background-soft);
}

.container button:hover {
	background-color: var(--color-accent);
}

.container .item {
	background-color: var(--color-heading);
	border-radius: 25px;
	height: 3rem;
	aspect-ratio: 1/1;
	font-size: 1rem;
}

.container .item.menu {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--color-accent);
	color: var(--color-background-soft);
}

h1 {
	font-weight: 500;
	font-size: 2.6rem;
}

@media (min-width: 1024px) {

	.container h1 {
		display:inline;
	}
	.format {
		flex: 2;
		justify-content: space-between;
	}

	.format h1 {
		text-align: center;
	}
	.search-input {
		display: flex;
		max-width: 400px;
		flex: 1;
		justify-content: space-between;
	}
	.search-input input {
		border-radius: 25px;
		width: 100%;
 	}

	.search-input button {
		justify-self: flex-end;
		border: none;
    	outline: none;
		background-color: transparent;
		cursor: pointer;
	}
}
</style>
