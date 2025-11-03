<!-- button with gradient using normal arrow -->
<template>
  <button class="grad-btn btn cursor-pointer inline-flex h-fit items-center lg:gap-3.5 gap-[9px]
         lg:text-[20px] text-[14px] text-white font-medium lg:pl-[58px]  pl-[35px] lg:pr-[43px] pr-[25px] lg:py-3.5 py-2
         rounded-full hover:opacity-[.6] transition duration-300"
    style="background: linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%);"
    @click="$emit('click')">
    <slot></slot>
  </button>

</template>

<script setup>

</script>

<style>
.grad-btn::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  background: url(../../../assets/img/button/white-arrow.svg) no-repeat center center;
  background-size: contain;
}

@media screen and (max-width: 1024px) {
  .grad-btn::after {
    width: 12px;
    height: 12px;
  }
}

</style>
