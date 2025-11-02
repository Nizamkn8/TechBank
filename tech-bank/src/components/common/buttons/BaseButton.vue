<template>
  <button class="btn cursor-pointer
  rounded-[56px] py-[8.5px] px-[18.5px] bg-transparent
  font-normal text-white border
  border-white hover:opacity-[.85]
  hover:bg-white hover:text-black transition duration-300
  " @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>

</script>
