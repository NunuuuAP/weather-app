<script lang="ts">
import ContainerComponent from './ContainerComponent.vue';

export default {
	name: "ModalComponent",
	components: { ContainerComponent }
};
</script>

<template>
  <div class="modal">
	<ContainerComponent>
	  <div class="modal-content">
		<slot></slot>
		<button @click="$emit('close')">QUIERO SER PREMIUM</button>
	  </div>
	</ContainerComponent>
  </div>
</template>


<style scoped>
.modal {
	position: absolute;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	z-index: 1;
  	width: 100%;
  	height: 100%;
  	overflow: auto;
  	background-color: rgba(0, 0, 0, 0.5);
  	backdrop-filter: blur(4px);
}

.container {
  	flex: none;
  	width: fit-content;
}
.modal-content {
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	gap: 20px;
}

.modal-content button {
	border-radius: 25px;
	border-style: none;
	width: fit-content;
	padding: 10px 15px;
	font-weight: bold;
	background-color: var(--color-accent);
}

.modal-content button:hover {
	background-color: var(--color-background-mute);
	color: var(--color-accent);
	outline: 1px solid var(--color-accent);
	cursor: pointer;
}

@media (min-width: 1024px){
  .modal-content {
}

}
</style>