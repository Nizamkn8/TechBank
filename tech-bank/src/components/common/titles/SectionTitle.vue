<script setup>
const props = defineProps({
  text: {
    type: String,
    // required: true,
  },
  size: {
    type: String,
    default: "text-xl",
  },
  subText: {
    type: String,
    // required: ,
  },
  subTextSize: {
    type: String,
    default: "text-sm",
  },
});
</script>

<template>
  <div>
    <span v-if="subText" :class="`${subTextSize} font-bold tracking-widest mb-2 text-white text-center block`"> {{ subText }}</span>
    <h2 v-if="text" :class="`${size} font-bold tracking-widest mb-6 text-white text-center`">
      {{ text }}
    </h2>
  </div>
</template>
