<script setup>
defineProps({
  socials: {
    type : Array,
    required : true,
  }
})
</script>

<template>
  <div class="flex gap-[30px]">
    <a href=""
      v-for="(social,i) in socials"
      :key="i"
    >
      <img :src="social.icon" :alt="social.name" class="hover:opacity-[0.7]">
    </a>
  </div>
</template>
