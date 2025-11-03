<!-- product card in PRODUCTS section -->
<script setup>
import GradButton from '../buttons/GradButton.vue';

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
    class="border border-[#D9D9D9] rounded-3xl p-[5px] lg:p-3 lg:pb-10 pb-[21px] w-full  bg-black/40 backdrop-blur-lg hover:border-white transition duration-300">
    <div class="relative overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
      <img :src="image"
        class=" w-full object-cover max-w-full md:max-w-[566px] max-h-[315px] lg:h-[315px] h-[198px]" />

      <!-- Icon Badge -->
      <div class="absolute bottom-[11px] left-[15px]">
        <img :src="logo" class="lg:w-[53px] lg:h-[58px] h-[37px] w-[37px] object-contain"  />
      </div>
    </div>

    <!-- Title & Text -->
    <div class="mt-1 lg:px-[27px] lg:p-0 px-[17px] text-white flex gap-3.5 items-center justify-between">
      <div class="">
        <h3 class="lg:text-[29px] text-[18px] leading-[2.8095] font-nyxerin font-normal">{{ title}}</h3>
        <p class="lg:text-[14px] text-[10px]">
          {{ desc }}
        </p>

      </div>
      <!-- <a :href="link" target="_blank"
          class="inline-flex h-fit items-center gap-3.5 bg-linear-to-r from-purple-500 to-pink-500 text-[20px] text-white font-medium pl-[58px] pr-[43px] py-3.5 rounded-full">
          {{ buttonText }}
          <span class="w-5">↗</span>
      </a> -->
      <GradButton> View </GradButton>
    </div>
  </div>
</template>
