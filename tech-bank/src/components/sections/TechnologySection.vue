<script setup>
import SectionTitle from "../common/titles/SectionTitle.vue";
import TechCarousel from "../common/carousels/TechCarousel.vue";
</script>

<template>
  <section
    class="container w-full bg-black text-white py-20 section-padding overflow-hidden"
  >
    <div class="text-center max-w-[1598px] mx-auto">
      <!-- Title -->
      <SectionTitle text="TECHNOLOGIES" />
      <!-- Forward carousel -->
      <TechCarousel />

      <!-- Reverse carousel -->
      <TechCarousel reverse />
    </div>
  </section>
</template>
