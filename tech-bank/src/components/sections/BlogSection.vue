<script setup>
import { ref } from "vue";
import SectionTitle from "../common/titles/SectionTitle.vue";
import BlogCard from "../common/cards/BlogCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const blogs = ref([]);
const swiperRef = ref(null);
const activeIndex = ref(0);

// fetch data (example)
(async () => {
  try {
    const res = await fetch("/data/blog.json");
    const data = await res.json();
    blogs.value = data.blog || [];
  } catch (e) {
    console.error("fetch blogs error", e);
  }
})();

const onSwiper = (swiper) => {
  swiperRef.value = swiper;

  swiper.on("slideChange", () => {
    activeIndex.value = swiper.realIndex;
  });
};

// external button handlers
const goPrev = () => swiperRef.value?.slidePrev();
const goNext = () => swiperRef.value?.slideNext();
const goToSlide = (i) => swiperRef.value?.slideTo(i);
</script>

<template>
  <section class="container w-full bg-black text-white section-padding blog-section ">
    <div class="max-w-[1271px] mx-auto relative">

      <SectionTitle text="Blogs" subText="Techbank" />

      <div class="relative">

        <!-- external arrows custom -->
        <div class="flex justify-between items-center external-controls">
          <button @click="goPrev" class="external-btn prev-btn absolute -left-10" aria-label="Previous"></button>
          <button @click="goNext" class="external-btn next-btn absolute -right-10" aria-label="Next"></button>
        </div>

        <!-- Swiper -->
        <Swiper
          :modules="[Pagination]"
          :slides-per-view="1"
          :space-between="24"
          pagination
          :breakpoints="{
            767: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          @swiper="onSwiper"
          class="mt-4"
        >
          <SwiperSlide v-for="(blog, i) in blogs" :key="i">
            <BlogCard :blog="blog" />
          </SwiperSlide>
        </Swiper>

        <!-- external pagination dots custom made -->
        <div class="flex gap-2 mt-[50px] justify-center">
          <button
            v-for="(b, i) in blogs.length"
            :key="i"
            @click="goToSlide(i)"
            class="external-dot w-[5px] h-[5px] bg-[#666] transition cursor-pointer"
            :class="{ 'bg-white scale-125': i === activeIndex }"
          ></button>
        </div>

      </div>
    </div>
  </section>
</template>

<style >


.external-btn {
  background: url(../../assets/img/blog/blog-arrow.svg) no-repeat center;
  cursor: pointer;
  transition: .15s;
  font-size: 0;
  width: 40px;
  height: 40px;
}

.external-btn:hover {
  opacity: .6;
}

.prev-btn {
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  background: url(../../assets/img/blog/blog-arrow-2.svg) no-repeat center;
}

.next-btn {
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
}

.external-dot {
  border-radius: 0;
}

@media screen and (max-width: 576px) {
  .external-btn {
    width: 17px;
    height: 35px;
  }
  .prev-btn { left: -17px; }
  .next-btn { right: -17px; }
}

.swiper-pagination-bullets  {
  display: none;
}

</style>
