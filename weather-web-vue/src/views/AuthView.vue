<script setup lang="ts">
import { onBeforeMount } from 'vue';
import router from '../router/index';

onBeforeMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const login = params.get('login');

    if (!code && !login) {
        return router.replace({ path: "/" });
    }

    let response;

    if (login) {
        response = await fetch(`http://localhost:3000/auth/fake-callback?login=${login}`);
    }

    if (!response) {
        return router.replace({ path: "/" });
    }
    if (response.status != 200) {
        return router.push({ path: "/" });
    }

    const result = await response.text();
/*
    if (await user.auth(result)) {
        return router.replace({ path: "/" });
    }*/
});
</script>

<template>
    <p>Estás siendo redirigido a tu perfil...</p>
</template>