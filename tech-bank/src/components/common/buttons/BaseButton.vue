<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped>
.btn {
  background: transparent;
  color: white;
  padding: 8.5px 18.5px;
  border-radius: 56px;
  border: 1px solid #ffffff;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s;
  height: fit-content;
}

.btn:hover {
  opacity: 0.85;
}
</style>
