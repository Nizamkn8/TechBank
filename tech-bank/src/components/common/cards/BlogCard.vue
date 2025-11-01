<script setup>
defineProps({
  blog: {
    type:Object,
    required:true,
  }
})
</script>

<template>
  <div class="bg-[#2B2B2B] rounded-3xl overflow-hidden" >
    <img :src="blog.logo" class="w-full h-[271px]"  alt="">
    <div class="px-8 pb-[62px] pt-8">
      <div class="text-2xl leading-[2.25]">{{ blog.name }}</div>
      <div class="text-sm">{{ blog.description }}</div>
    </div>
  </div>
</template>
