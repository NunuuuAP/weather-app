<script setup lang="ts">
import ContainerComponent from './ContainerComponent.vue';
</script>

<template>
    <div class="container">
        <div>¡Descubre todas las ventajas!</div>
        <button>Hazte Premium</button>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    border-radius: 25px;
    padding: 30px;
    gap: 20px;
}

.container button {
    border-style: none;
    border-radius: 25px;
    font-weight: bold;
    padding: 10px;
    background-color: var(--color-accent);
    color: var(--color-background-soft);
    cursor: pointer;
    box-shadow: 0 0 5px 0.1px rgba(0, 0, 0, 0.5);
}
</style>