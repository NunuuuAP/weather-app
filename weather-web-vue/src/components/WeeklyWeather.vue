<script setup lang="ts">
import { watch } from 'vue';

import { location, refreshLocation, weather} from '@/controllers/weather-api';
import ContainerComponent from '@/components/ContainerComponent.vue';
import IconComponent from '@/components/IconComponent.vue';

refreshLocation();
watch(location, async () => {
	refreshLocation();
});
</script>

<template>
	<ContainerComponent id="background">
		<div class="content" >
			<div v-for="item in weather?.daily" v-bind:key="item.weather" class="items">
				<div >
					<p >{{ item.date.substring(0, 3) }}</p>
				</div>
				<div>
					<IconComponent v-if="item" :weekItem="item"></IconComponent>
				</div>
				<div>
					<p class="max">{{ item.maxTemp }}ºC</p>
					<p> - </p>
					<p class="min">{{ item.minTemp }}ºC</p>
				</div>
			</div>
		</div>
	</ContainerComponent>
</template>

<style scoped>

.content {
  display: flex;
  text-align: center;
  height: 100%;
  gap: 10px;
  flex: 1;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-background-mute);
  padding: 20px;
  border-radius: 25px;
  height: 100%;
  overflow: scroll;
  gap: 10px;
  flex: 1;
}

.items i {
	font-size: 3rem;
}

@media (min-width: 1024px) and (max-height: 700px){
	.items {
		flex-direction: row;

	}
}
</style>