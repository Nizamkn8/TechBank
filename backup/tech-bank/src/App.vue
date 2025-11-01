<script setup>
import Home from "./pages/Home.vue";
import Header from "./components/layout/Header.vue";
components: {
  Home;
}
</script>

<template>
  <div>
    <Header />
    <Home />
    <div class="text-3xl font-bold text-blue-600">Tailwind is working 🎉</div>
  </div>
</template>

<style scoped>
</style>
