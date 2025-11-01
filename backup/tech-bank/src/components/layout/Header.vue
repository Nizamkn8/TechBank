<script setup>
import logo from "../../assets/img/logo.png";
import BaseButton from "../../components/common/buttons/BaseButton.vue";
</script>

<template>
  <header class="header">
    <nav class="navbar flex">
      <div>
        <img :src="logo" alt="TechBank logo" />
      </div>

      <ul class="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Teams</li>
        <li>Career</li>
        <li>Blog</li>
      </ul>

      <BaseButton>Contact Us</BaseButton>
    </nav>
  </header>
</template>
