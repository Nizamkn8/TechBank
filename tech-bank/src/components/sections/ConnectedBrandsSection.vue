<script setup>
import { ref, onMounted } from "vue";
import SectionTitle from "../common/titles/SectionTitle.vue";
import BrandsCard from "../common/cards/BrandsCard.vue";

// swiper for mobile
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const teams = ref([]);

const swiperRef = ref(null);
const activeIndex = ref(0);

// fetching data through api fro json data from public folder
onMounted(async () => {
  const res = await fetch("/data/teams.json");
  const data = await res.json();
  teams.value = data.teams;
});

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
  swiper.on("slideChange", () => {
    activeIndex.value = swiper.realIndex;
  });
};

const goPrev = () => swiperRef.value?.slidePrev();
const goNext = () => swiperRef.value?.slideNext();
const goToSlide = (i) => swiperRef.value?.slideTo(i);
</script>

<template>
  <section class="container mx-auto py-16 bg-black section-padding our-brands overflow-hidden">
    <div class="max-w-[1214px] mx-auto">

      <!-- Title -->
      <SectionTitle
        text="OUR CONNECTED BRANDS"
        subText="From One Root, Many Branches"
      />

      <!-- swiper for mobile responsive devices -->
      <div class="lg:mt-12 mt-0 md:hidden relative">

        <!-- External Prev / Next -->
        <button
          @click="goPrev"
          class="absolute top-1/2 -left-4 -translate-y-1/2 z-10 mobile-nav-btn external-btn prev-btn bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-black"
        >‹</button>

        <button
          @click="goNext"
          class="absolute top-1/2 -right-4 -translate-y-1/2 z-10 mobile-nav-btn external-btn bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-black"
        >›</button>

        <Swiper
          :slides-per-view="1.1"
          :space-between="16"
          :loop="true"
          @swiper="onSwiper"
          class="pb-10"
        >
          <SwiperSlide v-for="(team, idx) in teams" :key="idx">
            <BrandsCard :team="team" />
          </SwiperSlide>
        </Swiper>

        <!-- external pagination dots custom -->
        <div class="flex gap-2 mt-[50px] justify-center">
          <button
            v-for="(t, i) in teams.length"
            :key="i"
            @click="goToSlide(i)"
            class="w-[5px] h-[5px] bg-white transition"
            :class="{ 'bg-white scale-125': i === activeIndex }"
          ></button>
        </div>
      </div>

      <!-- desktop grid view  -->
      <div class="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[42px] mt-12">
        <BrandsCard v-for="(team, idx) in teams" :key="idx" :team="team" />
      </div>

    </div>
  </section>
</template>

<style >
.mobile-nav-btn {
  font-size: 18px;
  font-weight: bold;
  opacity: 0.9;
  transition: 0.2s;
}
.mobile-nav-btn:hover {
  opacity: 0.6;
}
.our-brands .swiper {
  overflow: visible !important;
}
.our-brands .external-btn {
  background: url(../../assets/img/blog/blog-arrow.svg) no-repeat center;
  cursor: pointer;
  transition: .15s;
  font-size: 0;
  width: 40px;
  height: 40px;
  transform: translate(0, -50%);
}

.our-brands .external-btn:hover {
  opacity: .6;
}

.our-brands .prev-btn {
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  background: url(../../assets/img/blog/blog-arrow-2.svg) no-repeat center;
}

.next-btn {
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
