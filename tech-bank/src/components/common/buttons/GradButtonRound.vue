<template>
  <button class="grad-btn-2 btn cursor-pointer inline-flex h-fit items-center gap-3.5
         text-lg-[20px] text-[16px] text-white font-medium pl-[19px] pr-[5px] py-1 shrink-0
         rounded-full hover:opacity-[.8] transition duration-300"
    style="background: linear-gradient(103.84deg, #330694 17.98%, #8500A6 69.45%);"
    @click="$emit('click')">
    <slot></slot>
  </button>

</template>

<script setup>

</script>

<style>
.grad-btn-2::after {
  content: "";
  width: 52px;
  height: 52px;
  display: block;
  background: url(../../../assets/img/button/white-blue-arrow.svg) no-repeat center center;
  background-size: contain;
}

@media screen and (max-width: 1022px) {
  .grad-btn-2::after {
    width: 35px;
    height: 35px;
  }
}
</style>
