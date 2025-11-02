<script setup>
import SectionTitle from "../common/titles/SectionTitle.vue";
import StatsCounter from "./StatsCounter.vue";
</script>

<template>
  <section class="container w-full bg-black text-white section-padding">
    <div class="max-w-[759px] mx-auto text-center px-4">
      <!-- Title -->
      <SectionTitle text="ABOUT" />

      <!-- Description -->
      <p class="text-[#C0C0C0] lg:text-[18px] text-[14px] leading-[1.3] mx-auto lg:mb-[29px] mb-[20px]">
        TechBank is a blockchain product company creating decentralized tools like TechBank,
        Dbank, and Dwallet to simplify digital finance. We empower users with secure,
        transparent, and user-friendly solutions for managing assets in the Web3 world.
      </p>

      <!-- Stats component -->
      <StatsCounter />
    </div>
  </section>
</template>
