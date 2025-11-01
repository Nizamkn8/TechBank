<script setup>
import logo from "../../assets/img/logo.png";
import BaseButton from "../../components/common/buttons/BaseButton.vue";

const menu = ["Home", "Products", "Teams", "Career", "Blog"];

</script>

<template>
  <header class="container bg-black ">
    <nav class="navbar flex justify-between items-center w-[full] h-[100px] ">
      <div>
        <img :src="logo" alt="TechBank logo" class="w-[110px] h-auto md:w-[129px]"/>
      </div>

      <ul class="flex text-white">
        <li v-for="(item,i) in menu" :key="i" class="flex items-center">
          {{item}}
          <span v-if="i < menu.length - 1" class="mx-3 opacity-50">|</span>
        </li>
      </ul>

      <BaseButton>Contact Us</BaseButton>
    </nav>
  </header>
</template>
