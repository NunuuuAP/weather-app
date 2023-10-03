<template>
	<div class="container">
		<div>Horas</div>
		<div>Semanal</div>
		<div>Tema</div>
	</div>
</template>

<style scoped>
.container {	
	display: flex;
}

.container input {
	display: none;
}
  
@media (min-width: 1024px) {
	.container input {
		justify-self: flex-end;
 	}
}
  </style>