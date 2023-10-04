<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: var(--color-background-soft);
	color: var(--color-text);
	width: 100%;
	border-radius: 25px;
	padding: 30px;
    overflow: auto;
}

</style>