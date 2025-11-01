<script setup>
import ProductCard from "../common/cards/ProductCard.vue";
import walletImg from "../../assets/img/product-images/product-img-1.png";
import walletLogo from "../../assets/img/product-images/product-img-1-icon.png";
import bankImg from "../../assets/img/product-images/product-img-2.png";
import bankLogo from "../../assets/img/product-images/product-img-2-icon.png";
import SectionTitle from "../common/titles/SectionTitle.vue";
</script>

<template>
  <section class="container mx-auto py-16 bg-black section-padding">

    <SectionTitle text="PRODUCT" subText="Innovative" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-[1212px] mx-auto">

      <ProductCard
        :image="walletImg"
        :logo="walletLogo"
        title="DWALLET"
        desc="A secure, intuitive crypto wallet for managing your digital assets"
        link="https://your-wallet-site.com"
      />

      <ProductCard
        :image="bankImg"
        :logo="bankLogo"
        title="DBANK"
        desc="A secure staking platform for earning rewards on your digital assets"
        link="https://your-bank-site.com"
      />

    </div>
  </section>
</template>
