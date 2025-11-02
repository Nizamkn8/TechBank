<script setup>
import ContactForm from "../forms/ContactForm.vue";
import ContactImg from "../../assets/img/contact/contact-img.png"

</script>

<template>
  <section class="bg-black text-white py-20 px-4 lg:px-20">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 ">

      <!-- Left UI block -->
      <div class="relative">
        <img :src="ContactImg" alt="Phone showcase"
          class="rounded-xl w-full object-cover" />
        <div class="p-8 absolute top-0 text-center">
          <h2 class="text-[28px] text-black font-bold leading-tight mb-4 font-nyxerin">
            LET’S CONNECT AND CREATE THE NEXT BIG THING IN TECH
          </h2>
        </div>
      </div>

      <!-- Contact Form -->
      <ContactForm />
    </div>
  </section>
</template>
