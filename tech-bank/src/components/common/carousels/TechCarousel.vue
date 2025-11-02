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
      320: { slidesPerView: 3, spaceBetween: 15 },
      576: { slidesPerView: 4, spaceBetween: 15 },
      767: { slidesPerView: 5, spaceBetween: 25 },
      1024: { slidesPerView: 5, spaceBetween: 87 }
    }"
    class="my-10 mb-0 logo-swiper lg-mt-16 mt-5"
  >
    <SwiperSlide
      v-for="(logo, i) in techLogos"
      :key="i"
      class="flex justify-center items-center"
    >
      <img
        :src="logo"
        class="h-12 object-contain opacity-80 lg:w-[210px] w-[110px] hover:opacity-100 transition"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.logo-swiper.swiper {
  overflow: visible;
}
</style>
