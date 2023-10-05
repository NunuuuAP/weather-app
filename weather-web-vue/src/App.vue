<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBar from './components/NavBar.vue';
import ModalComponent from './components/ModalComponent.vue';
import { opened } from './controllers/menu-controller';
import { searchs } from '@/controllers/weather-api';
</script>

<template>
  <main>
	<header>
		<HeaderComponent />
	</header>
	<ModalComponent v-if="searchs >= 5" :searchs="searchs">
		Has superdado el límite de búsquedas gratuitas
	</ModalComponent>
	<NavBar v-if="opened == 'menu'"/>
	<section v-else>
		<RouterView style="flex: 1;"/>
		<footer>
		  <FooterComponent />
		</footer>
	</section>
  </main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	height: 100%;
}

section {
	display: flex;
	flex-direction: column;
	padding: 0 20px 20px 20px;
	gap: 20px;
	height: calc(100vh - 100px);
}

footer {
  	margin-top: auto;
}

@media (min-width: 1024px) {

}
</style>
