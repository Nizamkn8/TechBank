<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import logo from "../../assets/img/logo.png";
import BaseButton from "../../components/common/buttons/BaseButton.vue";

const menu = ["Home", "Products", "Teams", "Career", "Blog"];
const router = useRouter();

const isScrolled = ref(false);
const mobileOpen = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 10;
}

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-black/70 backdrop-blur-xl' : 'bg-transparent'
    ]"
  >
    <nav class="container flex justify-between items-center w-full h-[90px]">
      <div>
        <img :src="logo" alt="TechBank logo" class="w-[110px] md:w-[129px]" />
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex text-white">
        <li
          v-for="(item, i) in menu"
          :key="i"
          class="flex items-center relative font-ninetea text-sm py-[9px]
          px-[26px] after:content-[''] after:absolute after:top-0.5
          after:right-0 after:w-px after:h-8 after:bg-[#261945]
          last:after:content-none"
        >
          <RouterLink to="/" class="hover:text-purple-400 transition">
            {{ item }}
          </RouterLink>
        </li>
      </ul>

      <!-- Desktop Button -->
      <router-link to="/contact" class="hidden lg:block">
        <BaseButton>Contact Us</BaseButton>
      </router-link>

      <!-- Hamburger Icon -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden text-white text-3xl focus:outline-none"
      >
        <span v-if="!mobileOpen">
          <img src="../../assets/img/header/hamburger.svg" alt="">
        </span>
        <span v-else class="z-">✕</span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="mobileOpen"
        class="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-xl text-white
        flex flex-col py-24 px-6 space-y-6 z-40"
      >
        <RouterLink
          v-for="(item, i) in menu"
          :key="i"
          to="/"
          @click="toggleMobileMenu"
          class="text-lg font-medium hover:text-purple-400 transition"
        >
          {{ item }}
        </RouterLink>

        <router-link to="/contact" @click="toggleMobileMenu">
          <BaseButton class="mt-4 w-full">Contact Us</BaseButton>
        </router-link>
      </div>
    </transition>
  </header>
</template>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>
