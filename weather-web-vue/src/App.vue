<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { user } from './user';
</script>

<template>
  <!--<LoginComponent />-->
  <!--v-if="user.isLoggedIn()">-->
  <section>
	<header>
		<HeaderComponent />
	  <!--
		<nav>

		  <RouterLink to="/">Home</RouterLink>
		  <RouterLink to="/about">About</RouterLink>
		</nav>
	  -->
	</header>
	<RouterView style="flex: 1;"/>
	<footer>
	  <FooterComponent />
	</footer>
  </section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	height: 100vh;
	gap: 20px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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
