<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavBar from './components/NavBar.vue';
import { opened } from './controllers/menu-controller';
import { user } from './user';
</script>

<template>
  <!--<LoginComponent />-->
  <!--v-if="user.isLoggedIn()">-->
  <main>
	<header>
		<HeaderComponent />
	</header>
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
