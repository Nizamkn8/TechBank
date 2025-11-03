<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ScrollToTop from "./components/common/utils/ScrollToTop.vue";
</script>

<template>
  <div class="bg-black min-h-screen">
    <Header />

    <!-- page content will load here -->
    <router-view />

    <Footer />

    <!-- scroll top component -->
     <ScrollToTop />
  </div>
</template>

<style scoped></style>
