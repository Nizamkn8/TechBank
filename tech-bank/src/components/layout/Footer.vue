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
      <div class="footer-contents flex justify-between mb-10">
        <div class="footer-content-left">
          <div class="footer-title text-[32px] mb-6">
            <div>Engineering</div>
            <div>the Future</div>
          </div>
          <BaseButton> Contact Us </BaseButton>
        </div>
        <div class="footer-content-right flex gap-[87px]">
          <ul class="flex flex-col gap-7">
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
      <div class="footer-bottom flex justify-between">
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
    </div>
  </footer>
</template>

<style>
footer.site-footer {
  padding-top: 60px;
  padding-bottom: 210px;
}
</style>
