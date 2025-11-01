<script setup>
defineProps({
  team: { type: Object, required: true }
});
</script>

<template>
  <div class="border border-gray-600  p-6 text-white rounded-xl shadow-lg hover:shadow-2xl transition group bg-black">

    <img :src="team.bgLogo" class="absolute right-0 top-0 w-40 opacity-10 group-hover:opacity-20 transition -z-10" />

    <h3 class="text-xl font-semibold mb-2">{{ team.name }}</h3>
    <p class=" text-sm mb-4">{{ team.description }}</p>

    <div class="flex gap-4 mb-4">
      <a v-for="(s, j) in team.socials" :key="j" :href="s.url" target="_blank" class="hover:scale-110 transition">
        <img :src="s.icon" class="h-6 w-6" />
      </a>
    </div>

    <img :src="team.logo" class="w-full mx-auto group-hover:scale-105 transition h-[393px] object-cover" />
  </div>
</template>
