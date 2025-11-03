<!-- common reusable title and sub title -->
<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  size: {
    type: String,
    default: "text-xl",
  },
  subText: {
    type: String,
  },
  subTextSize: {
    type: String,
    default: "text-sm",
  },
});
</script>

<template>
  <div>
    <span v-if="subText" :class="`${subTextSize} font-bold text-[#BB83FF] lg:text-[18px] text-[14px] text-center block`"> {{ subText }}</span>
    <h2 v-if="text" :class="`${size} lg:text-[32px] text-[24px] leading-[1.2] lg:mb-10 mb-[25px]  text-white text-center font-nyxerin `">
      {{ text }}
    </h2>
  </div>
</template>
