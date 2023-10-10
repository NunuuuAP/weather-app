<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  width: 100%;
  height: inherit;
  border-radius: 25px;
  padding: 30px;
  overflow: scroll;
}
</style>
