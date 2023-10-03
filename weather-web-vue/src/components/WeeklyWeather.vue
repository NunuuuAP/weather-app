<template>
    <div class="gallery">
        <h1>aqui van los divs semanales</h1>
    </div>
</template>

<style scoped>
.gallery {
    display: none;
} 

@media (min-width: 1024px) {
    .gallery {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        margin: 10px 20px;
    }
}
</style>