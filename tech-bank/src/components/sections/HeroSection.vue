<script setup>
import HeroBg from "../../assets/img/Hero/hero-bg.png"
import HeroSicker from "../../assets/img/Hero/hero-sticker.png"
import HeroBgLogo from "../../assets/img/Hero/bg-logo.png"
import BaseButton from "../common/buttons/BaseButton.vue";
</script>

<template>
  <div class="hero-container container relative overflow-hidden ">
    <div class="sd-card-shape px-[95px] py-[35px]">
      <div class="absolute white-gradient bottom-0 left-0 h-full w-full">
        <img :src="HeroBg" alt="">
      </div>
      <div class="hero-content relative">
        <div class="flex gap-6  text-white max-w-[490px] ml-auto">
          <div class="hero-sticker shrink-0">
            <img :src="HeroSicker" class="w-[114px] h-[85px] object-contain"
              alt="">
          </div>
          <div class="hero-desc text-[16px] ">
            <p>At TechBank, we’re pioneering the technologies of tomorrow. From
              blockchain to AI, we’re building the digital landscape of the
              future,
              today</p>
          </div>
        </div>
        <div class="center-logo  flex justify-center mt-12">
          <img :src="HeroBgLogo" alt="">
        </div>
        <h1 class="text-[93px] fon">
          Engineering the Future
        </h1>
        <div class="desc-box flex">
          <span class="text-[16px]">
            Empowering Businesses, Enabling Growth
            TechBank’s Products for Success
          </span>
          <BaseButton>VIEW PRODUCTS</BaseButton>
        </div>
      </div>


    </div>
  </div>
</template>

<style>
.sd-card-shape {
  height: 800px;
  overflow: hidden;
  border-radius: 50px;
  position: relative;
  background-size: cover;
}

/*
.sd-card-shape {
  height: 800px;
  border-radius: 50px;
  position: relative;
  background: #330694;
  background-size: cover;
}

.white-gradient {
  background: linear-gradient(221.23deg, #D9D9D9 23.35%, #B4B4B4 46.56%, rgba(143, 143, 143, 0.46) 69.37%, rgba(115, 115, 115, 0) 86.56%);
}

.content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  background-color: black;
  width: 50%;
  border-bottom-right-radius: 35px;
  border-top-left-radius: 35px;
}

.content-wrapper:after {
  content: "";
  position: absolute;
  top: 0;
  right: -60px;
  height: 60px;
  background-color: black;
  width: 60px;
  border-bottom-right-radius: 85px;
  border-bottom-left-radius: 203px;
}

.content-wrapper:before {
  content: "";
  position: absolute;
  top: 0;
  right: -60px;
  height: 60px;
  background-color: rgb(103, 103, 131);
  width: 60px;
  border-bottom-right-radius: 85px;
  border-bottom-left-radius: 203px;
  border-radius: 100%;
  z-index: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.curve-1 {
  position: absolute;
  top: 60px;
  left: 0px;
  height: 33px;
  background-color: rgb(103, 103, 131);
  width: 60px;
  border-bottom-right-radius: 85px;
  border-bottom-left-radius: 203px;
  background: black;
  border-radius: 100%;
  z-index: 1;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.curve-2 {
  position: absolute;
  top: 60px;
  left: 0px;
  height: 60px;
  background-color: rgb(103, 103, 131);
  width: 61px;
  border-bottom-left-radius: 203px;
  border-radius: 100%;
  border-top-right-radius: 0;
  z-index: 1;
} */
</style>
