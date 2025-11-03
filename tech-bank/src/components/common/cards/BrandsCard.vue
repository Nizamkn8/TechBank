<!-- brands card in Our Connected Brands section -->
<script setup>
import SocialMedia from "../utils/SocialMedia.vue"

defineProps({
  team: { type: Object, required: true }
});
</script>

<template>
  <div class="border border-gray-600  pt-[33px] px-[21px] text-white rounded-xl shadow-lg bg-black transform transition duration-300 md:hover:scale-105">
    <h3 class="lg:text-[24px] text-[20px] font-normal leading-[1.70833]">{{ team.name }}</h3>
    <p class=" lg:text-sm text-[12px] leading-1.2 text-[#a9a9a9] mb-4">{{ team.description }}</p>
    <div class="flex gap-4 mb-6">
      <!-- <a v-for="(s, j) in team.socials" :key="j" :href="s.url" target="_blank" class="hover:scale-110 transition">
        <img :src="s.icon" class="h-6 w-6" />
      </a> -->
      <div class="md:block hidden">
        <SocialMedia :socials="team.socials"  />
      </div>
    </div>

    <img :src="team.logo" class="w-full mx-auto group-hover:scale-105 transition lg:h-[393px] h-[317px]  object-contain" />
  </div>
</template>
