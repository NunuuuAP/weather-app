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
	<ContainerComponent>
		<div class="content" >
			<div v-for="item in weather?.hourly" v-bind:key="item.time">
				<div class="items">
					<div>
						<p>{{ item.time }}h</p>
					</div>
					<div>
						<IconComponent v-if="item" :hourItem="item"></IconComponent>
					</div>
					<div>
						<p>{{ item.temp }}ºC</p>
					</div>
				</div><hr>
			</div>
		</div>
	</ContainerComponent>
</template>

<style scoped>

.container {
	justify-content: unset;
}

.content {
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 100%;
}

.items {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.items i {
	font-size: 1.5rem;
}

hr {
	border: none;
    border-top: 1pt solid var(--color-background-mute);
	margin: 20px 10px;
    text-align: center;
	border-color: var(--color-text);
}
</style>
