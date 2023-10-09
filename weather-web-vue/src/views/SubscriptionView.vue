<template>
	<div>
		<i class="bi-cone-striped"></i>
		<h2>Website under construction</h2>
		<h3>(Here should go the subscription page)</h3>
		<router-link to="/">
			<button>Return to home</button>
   		</router-link>
	</div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
	justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: 30px;
    gap: 20px;
    overflow: auto;
	height: 100%;
}

button {
    border-style: none;
    border-radius: 25px;
    font-weight: bold;
    padding: 10px;
    background-color: var(--color-accent);
    color: var(--color-accent-text);
    cursor: pointer;
    box-shadow: 0 0 5px 0.1px rgba(0, 0, 0, 0.5);
	margin: 25px;
}

i {
	font-size: 5rem;
}
</style>