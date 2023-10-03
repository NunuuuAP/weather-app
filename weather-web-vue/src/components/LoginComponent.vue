<script setup lang="ts">
import { ref } from 'vue';
import router from '../router/index';

const login = ref<string>("");

const accountLogin = (e: Event) => {
    e.preventDefault();
    router.replace({ path: "/auth", query: {
        login: login.value
    } })
}
</script>

<template>
    <div class="container">
        <form>
            <label>Iniciar sesión</label>
            <input v-model="login">
            <button v-on:click="accountLogin">Acceder</button>
        </form>
    </div>
</template>


<style scoped>
.container {
    height: 100vh;
    background-color: var(--color-background);
}

.container form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
}

.container label {
    font-size: 1.5rem;
}

.container input {
    width: 200px;
    height: 30px;
    border-radius: 25px;
    border: none;
    background-color: var(--color-background-soft);
    color: var(--color-text);
}

.container input:focus {
    outline: 1pt solid white;
}

.container button {
    width: 100px;
    height: 30px;
    border-radius: 25px;
    border: none;
    background-color: var(--color-background-soft);
    color: var(--color-text);
    cursor: pointer;
}
</style>