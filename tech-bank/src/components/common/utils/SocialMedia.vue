<script setup>
defineProps({
  socials: {
    type : Array,
    required : true,
  }
})
</script>

<template>
  <div class="flex gap-9">
    <a href=""
      v-for="(social,i) in socials"
      :key="i"
    >
      <img :src="social.icon" :alt="social.name">
    </a>
  </div>
</template>
