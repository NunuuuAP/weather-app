<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { opened } from '@/controllers/menu-controller';
import { searchs } from '@/controllers/weather-api'
import { ref, watch } from 'vue';

const open = ref<boolean>(false);

const showModal = () => {
	if (searchs.value === 5) {
		open.value = true;
	} else {
		open.value = false;
	}
};

watch(searchs, async () => {
	showModal();
});

</script>

<template>
  <main>
	<header>
		<HeaderComponent />
	</header>
	<ModalComponent v-if="open == true" v-on:close="open = false">
		You have exceeded the limit of free searches
	</ModalComponent>
	<NavBar v-if="opened == 'menu'"/>
	<section>
		<RouterView />
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
</style>
