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
	<section v-if="opened == null">
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
	height: 100vh;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

section {
	display: flex;
	flex-direction: column;
	height: 100vh;
	padding: 0 20px 20px 20px;
	gap: 20px;
}

footer {
  	margin-top: auto;
}

@media (min-width: 1024px) {

  nav {
	text-align: left;
	margin-left: -1rem;
	font-size: 1rem;

	padding: 1rem 0;
	margin-top: 1rem;
  }
}
</style>
