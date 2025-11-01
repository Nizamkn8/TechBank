<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped>
.btn {
  background: #2563eb;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s;
}

.btn:hover {
  opacity: 0.85;
}
</style>
