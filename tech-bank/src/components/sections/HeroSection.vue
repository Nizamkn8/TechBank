<!-- hero section with jelly fish gif -->
<script setup>
import HeroBg from "../../assets/img/Hero/hero-bg.png"
import HeroSicker from "../../assets/img/Hero/hero-sticker.png"
import HeroBgLogo from "../../assets/img/Hero/bg-logo.png"
import GradButtonRound from "../common/buttons/GradButtonRound.vue";
import HeroGif from "../../assets/img/Hero/jelly.gif"
</script>

<template>
  <div class="hero-container container relative overflow-hidden">
    <div
      class="sd-card-shape lg:px-[95px] px-5 py-[35px] lg:mt-[50px] mt-5 lg:rounded-[50px] rounded-[20px]">
      <div
        class="absolute white-gradient bottom-0 left-0 lg:top-auto top-0 w-full lg:h-[800px] h-[632px]">
        <img :src="HeroBg" alt="" class="w-full lg:h-[800px] h-[632px] ">
      </div>
      <div class="hero-content h-full relative">
        <div
          class="gap-2 items-center text-white max-w-[510px] ml-auto hidden lg:flex">
          <div class="hero-sticker shrink-0">
            <img :src="HeroSicker" class="w-[114px] h-[85px] object-contain"
              alt="">
          </div>
          <div class="hero-desc text-[16px] text-[#bababa]">
            <p>At TechBank, we’re pioneering the technologies of tomorrow. From
              blockchain to AI, we’re building the digital landscape of the
              future,
              today</p>
          </div>
        </div>

        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-[-90px] rotate-25">
          <img :src="HeroGif" alt=""
            class="lg:w-[280px] w-[180px] object-contain drop-shadow-2xl " />
        </div>

        <div class="center-logo  flex justify-center mt-12">
          <img :src="HeroBgLogo" alt=""
            class="lg:w-[188px] lg:h-[207px] w-[125px] h-[138px]">
        </div>
        <div class="flex flex-col absolute lg:bottom-0 bottom-[45px]">
          <h1
            class="xl:text-[93px] lg:text-[70px] md:text-[60px] sm:text-[40px] text-[30px] font-nyxerin leading-[1.0967] text-center">
            Engineering the Future
          </h1>
          <div
            class="desc-box flex justify-center flex-col lg:flex-row gap-2.5 max-w-[580px] mx-auto items-center">
            <span class="text-[16px] text-black ">
              Empowering Businesses, Enabling Growth
              TechBank’s Products for Success
            </span>
            <GradButtonRound>View Products</GradButtonRound>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-title text-center text-white mt-3 text-[16px]">
      SCROLL TO EXPOLORE
    </div>
  </div>
</template>

<style>
.sd-card-shape {
  height: 800px;
  overflow: hidden;
  /* border-radius: 50px; */
  position: relative;
  background-size: cover;
}

.scroll-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-title::after {
  content: "+";
  margin-left: 40px;
}

.scroll-title::before {
  content: "+";
  margin-right: 40px;
}

@media screen and (max-width: 1022px) {
  .sd-card-shape {
    height: 632px;
  }
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
