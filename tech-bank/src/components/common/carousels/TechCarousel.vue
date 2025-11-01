<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// props: pass logos + reverse direction
const props = defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
});

const techLogos = ref([]);

onMounted(async () => {
  const res = await fetch("/data/techLogos.json");
  const data = await res.json();
  techLogos.value = data.logos;
});
</script>

<template>
  <Swiper
    :modules="[Autoplay]"
    :slides-per-view="5"
    :loop="true"
    :free-mode="true"
    :autoplay="{
      delay: 0,
      disableOnInteraction: true,
      reverseDirection: reverse
    }"
    :speed="2000"
    :breakpoints="{
      320: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 5, spaceBetween: 87 }
    }"
    class="my-10 mb-16 logo-swiper"
  >
    <SwiperSlide
      v-for="(logo, i) in techLogos"
      :key="i"
      class="flex justify-center items-center"
    >
      <img
        :src="logo"
        class="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.logo-swiper.swiper {
  overflow: visible;
}
</style>
