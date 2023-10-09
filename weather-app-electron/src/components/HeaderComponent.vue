<script setup lang="ts">
import { location, searchs } from '../controllers/weather-api';
import { toggle, opened } from '../controllers/menu-controller';
import type { Ref } from 'vue';
import { ref } from 'vue';

const searchLocation: Ref<string> = ref<string>("");

function setSearchLocation(e: Event) {
	location.value = searchLocation.value;
	searchs.value += 1;
};
</script>

<template>
	<div class="container">
		<button class="item menu" v-on:click="toggle('menu')"><i class="bi-list"></i></button>

		<main v-if="opened == null">
			<h1>WEATHER NAPP</h1>
	
			<form @submit.prevent="setSearchLocation">
				<input v-model="searchLocation" id="location" class="item" type="text" name="search"
					placeholder="Ciudad" spellcheck="false" />
				<button class="item"><i class="bi-search"></i></button>
			</form>
		</main>
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
	flex: 1;
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
	color: var(--color-text);
	background-color: var(--color-input-background);
}

.container button {
	background-color: transparent;
	border-style: none;
	color: var(--color-input-text);
	cursor: pointer;
}

.container button:hover {
	background-color: var(--color-accent);
	color: var(--color-accent-text);
}

.container .item {
	background-color: var(--color-input-background);
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
	color: var(--color-accent-text);
}

main {
	display: flex;
	flex: 1;
	gap: 10px;
}

h1 {
	font-weight: 500;
	font-size: 2.6rem;
}

@media (min-width: 1024px) {
	main {
		align-items: center;
		gap: 20px;
	}

	main h1 {
		font-size: 2rem;
		display: inline;
	}

	.container {
		gap: 20px;
	}
	.container h1 {
		display: inline;
		font-weight: bold;
		color: var(--color-accent);
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
