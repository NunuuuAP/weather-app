<script setup lang="ts">
import ContainerComponent from './ContainerComponent.vue'
</script>

<template>
  <div class="modal">
    <ContainerComponent>
      <div class="modal-content">
        <slot></slot>
        <router-link to="/subscription">
          <!-- Close the modal on click to view subscription page -->
          <button v-on:click="$emit('close')">GO PREMIUM!</button>
        </router-link>
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
  width: 90%;
  height: fit-content;
}
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
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

@media (min-width: 1024px) {
  .container {
    flex: none;
    width: fit-content;
  }
}
</style>
