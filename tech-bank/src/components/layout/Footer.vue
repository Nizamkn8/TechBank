<script setup>
import logo from "../../assets/img/logo.png";
import BaseButton from '../common/buttons/BaseButton.vue';
import SocialMedia from "../common/utils/SocialMedia.vue";
import FooterBg from "../../assets/img/footer/footer-bg.png"
import Texture from "../../assets/img/footer/Texture.png"

const socialLinks = [
  { name: "instagram", url: "https://instagram.com", icon: "/social-media-icons/instagram.png" },
  { name: "linkedin", url: "https://linkedin.com", icon: "/social-media-icons/linkedin.png" },
  { name: "facebook", url: "https://facebook.com", icon: "/social-media-icons/twitter.png" },
  { name: "youtube", url: "https://youtube.com", icon: "/social-media-icons/youtube.png" },
];

</script>

<template>
  <footer class="relative site-footer text-white pb-[210px] pt-[60px]">
    <div class="absolute bottom-0 left-0 w-full">
      <img :src="FooterBg" alt="" class="w-full">
    </div>
    <div class="absolute bottom-0 left-0 w-full">
      <img :src="Texture" alt="" class="w-full">
    </div>

    <div class="site-footer-container container relative z-1">
      <div class="footer-header flex justify-between mb-7">
        <img :src="logo" alt="footer-logo" class="w-[200px] h-[51px]">
        <span>hi@techbank.com</span>
      </div>
      <div
        class="footer-contents flex justify-between mb-10 md:flex-row flex-col gap-[30px]">
        <div class="footer-content-left">
          <div
            class="footer-title lg:text-[32px] text-[24px] leading-[1.083333] mb-6">
            <div class="font-nyxerin">Engineering</div>
            <div class="font-nyxerin">the Future</div>
          </div>
          <BaseButton> Contact Us </BaseButton>
        </div>
        <div
          class="footer-content-right flex md:gap-[87px] gap-[30px] md:justify-items-normal justify-between">
          <ul class="flex flex-col lg:gap-7 gap-[15px]">
            <li>Home</li>
            <li>Products</li>
            <li>Teams</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
          <div class="org-details">
            <div class="mb-5">Offices</div>
            <div>info Park</div>
            <div>Kochi . Kerala</div>
          </div>
        </div>
      </div>
      <div class="footer-bottom justify-between lg:flex hidden">
        <div class="footer-social-media">
          <SocialMedia :socials="socialLinks" />
        </div>
        <div>
          © 2025 Techbank
        </div>
        <div class="privacy-terms">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
      </div>
      <div class="footer-bottom flex justify-between lg:hidden flex-wrap">
        <div class="text-[14px] footer-social-media flex flex-col justify-center w-full items-center text-center">
          <div class=" border-b border-[#fbfdff] flex justify-center mb-3 pb-3  w-full">
            <SocialMedia :socials="socialLinks" />
          </div>
          <div class=" border-b border-[#fbfdff] privacy-terms mb-3 pb-3  w-full">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
          <div class=" mb-3 pb-3  w-full">
            © 2025 Techbank
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
footer.site-footer {
  padding-top: 60px;
  padding-bottom: 210px;
}

@media screen and (max-width: 1199px) {
  footer.site-footer {
    padding-top: 40px;
    padding-bottom: 100px;
  }
}
</style>
