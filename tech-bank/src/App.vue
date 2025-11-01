<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <div class="bg-black min-h-screen">
    <Header />

    <!-- Page content will load here -->
    <router-view />

    <Footer />
  </div>
</template>

<style scoped></style>
