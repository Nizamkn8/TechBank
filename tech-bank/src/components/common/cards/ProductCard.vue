<script setup>
const props = defineProps({
  image: String,
  logo: String,
  title: String,
  desc: String,
  buttonText: {
    type: String,
    default: "View",
  },
  link: String,
});
</script>

<template>
  <div
    class="border border-gray-600 rounded-3xl p-4 w-full  bg-black/40 backdrop-blur-lg hover:border-white transition duration-300"
  >
    <div class="relative rounded-2xl overflow-hidden ">
      <img
        :src="image"
        class="rounded-2xl w-full object-cover max-w-full md:max-w-[566px] max-h-[315px] h-[315px]"
      />

      <!-- Icon Badge -->
      <div
        class="absolute top-3 left-3 bg-white/20 backdrop-blur-md rounded-xl p-2"
      >
        <img :src="logo" class="w-8 h-8" />
      </div>
    </div>

    <!-- Title & Text -->
    <div class="mt-4 text-white">
      <h3 class="text-2xl font-bold mb-1 tracking-widest">{{ title }}</h3>
      <p class="text-sm opacity-80 mb-4">
        {{ desc }}
      </p>

      <a
        :href="link"
        target="_blank"
        class="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-2 rounded-full"
      >
        {{ buttonText }}
        <span>↗</span>
      </a>
    </div>
  </div>
</template>
