<script setup>
import { ref, onMounted } from "vue";
import SectionTitle from "../common/titles/SectionTitle.vue";
import BrandsCard from "../common/cards/BrandsCard.vue";

// Swiper for mobile
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const teams = ref([]);

onMounted(async () => {
  const res = await fetch("/data/teams.json");
  const data = await res.json();
  teams.value = data.teams;
});
</script>

<template>
  <section class="container mx-auto py-16 bg-black section-padding">
    <div class="max-w-[1214px] mx-auto">
      <!-- Title -->
      <SectionTitle
        text="OUR CONNECTED BRANDS"
        subText="From One Root, Many Branches"
      />

      <!-- ✅ Only mobile < 767px -->
      <div class="lg:mt-12 mt-0 md:hidden">
        <Swiper
          :slides-per-view="1.1"
          :space-between="16"
          :loop="true"
          class="pb-10"
        >
          <SwiperSlide v-for="(team, idx) in teams" :key="idx">
            <BrandsCard :team="team" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- ✅ Desktop ≥ 768px -->
      <div class="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[42px] mt-12">
        <BrandsCard v-for="(team, idx) in teams" :key="idx" :team="team" />
      </div>
    </div>
  </section>
</template>
