<!-- scroll topbutton in all of the pages -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ScrollTopImg from "../../../assets/img/button/scroll-top.png"

const showButton = ref(false);
const rotation = ref(0);

// button scroll handler
const handleScroll = () => {
  const scrollY = window.scrollY;
  showButton.value = scrollY > 200;
  rotation.value = scrollY / 4;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <button
    v-show="showButton"
    @click="scrollTop"
    :style="{ transform: `rotate(${rotation}deg)` }"
    class="fixed lg:bottom-6 lg:right-6 right-3 bottom-4 rounded-full z-10"
  >
    <img :src="ScrollTopImg" alt="" class="lg:w-[149px] lg:h-[142px] w-[125px] h-[125px] object-contain">
  </button>
</template>
