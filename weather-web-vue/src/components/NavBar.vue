<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { toggle } from '../controllers/menu-controller';
</script>

<template>
	<main>
		<nav>
			<RouterLink to="/" v-on:click="toggle(null)">
				<i class="bi-house"></i>
				<p>Inicio</p>
			</RouterLink>
			<RouterLink to="/hourly" v-on:click="toggle(null)">
				<i class="bi-clock"></i>
				<p>Por horas</p>
			</RouterLink>
			<RouterLink to="/weekly" v-on:click="toggle(null)">
				<i class="bi-calendar2"></i>
				<p>Semanal</p>
			</RouterLink>
			<RouterLink to="/theme" v-on:click="toggle(null)">
				<i class="bi-palette"></i>
				<p>Tema</p>
			</RouterLink>
		</nav>
	</main>
</template>

<style scoped>

main {
	padding: 0 20px 20px 20px;
}

nav {
	display: flex;
	flex-direction: column;
	background-color: var(--color-background-mute);
	border-radius: 25px;
	height: 100%;

	padding: 30px 20px 0 0;
}

a {
	display: flex;
	color: var(--color-text);
	padding: 10px 30px;
	border-radius: 0 30px 30px 0;
	gap: 10px;
}

a:hover {
	background-color: var(--color-accent);
	color: var(--color-background-soft);
}
  
@media (min-width: 1024px) {
	.container {
		display: flex;
		width: 20vw;
		background-color: blue;
	}
}
  </style>