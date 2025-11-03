<!-- contact us section in contact us page -->
<script setup>
import ContactForm from "../forms/ContactForm.vue";
import ContactImg from "../../assets/img/contact/contact-img.png"

</script>

<template>
  <section class="bg-black text-white lg:py-20 py-10 px-4 lg:px-20">
    <div class="lg:hidden text-center">
      <span class="text-[#BB83FF] tracking-wide block text-sm md:text-base">
        BUILD THE FUTURE WITH US
      </span>

      <h3
        class="lg:text-[36px] md:text-[58px] leading-[1.2] text-[24px] font-bold mb-4 md:mb-8 tracking-wide text-white font-nyxerin">
        CONTACT US
      </h3>
    </div>
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 ">

      <!-- Left UI block -->
      <div class="relative lg:block flex justify-center">
        <img :src="ContactImg" alt="Phone showcase"
          class="rounded-xl w-full object-cover lg:h-[726px] sm:h-[400px] h-[238px] lg:object-center object-top" />
        <div class="lg:p-8 p-2 absolute top-0 text-center lg:max-w-full sm:max-w-[350px] max-w-[206px]">
          <h2 class="lg:text-[28px] sm:text-[18px] text-[12px] text-black font-bold leading-tight mb-4 font-nyxerin ">
            LET’S CONNECT AND CREATE THE NEXT BIG THING IN TECH
          </h2>
        </div>
      </div>

      <!-- contact form -->
      <div class="lg:hidden">
        <ContactForm />
      </div>
    </div>
  </section>
</template>
