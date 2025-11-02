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

// called by Swiper when instance is ready
const onSwiper = (swiperInstance) => {
  swiperRef.value = swiperInstance;
};

// external button handlers
function goPrev() {
  if (!swiperRef.value) return;
  swiperRef.value.slidePrev();
}
function goNext() {
  if (!swiperRef.value) return;
  swiperRef.value.slideNext();
}
</script>

<template>
  <section class="container w-full bg-black text-white section-padding">
    <div class="max-w-[1271px] mx-auto relative">

      <SectionTitle text="Blogs" subText="Techbank" />

      <div class="relative">
        <!-- External buttons (outside / above slider) -->
        <div class="flex justify-between items-center external-controls">
          <button @click="goPrev" class="external-btn prev-btn absolute -left-10"
            aria-label="Previous">
            <!-- replace with svg/icon if you prefer -->
            Prev
          </button>

          <button @click="goNext" class="external-btn next-btn absolute -right-10"
            aria-label="Next">
            Next
          </button>
        </div>

        <!-- Swiper -->
        <Swiper :modules="[Pagination]" :slides-per-view="1" :space-between="24"
          pagination :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }" @swiper="onSwiper" class="mt-4">
          <SwiperSlide v-for="(blog, i) in blogs" :key="i">
            <BlogCard :blog="blog" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* external buttons wrapper */
.external-controls {
  pointer-events: auto;
}

/* basic external button look */
.external-btn {

  background: url(../../assets/img/blog/blog-arrow.svg) no-repeat center;
  cursor: pointer;
  transition: transform .15s ease, background .15s;
  font-size: 0;
  width: 40px;
  height: 40px;
}

.external-btn:hover {
  opacity: .5;
}

.prev-btn {
  position: absolute;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  background: url(../../assets/img/blog/blog-arrow-2.svg) no-repeat center center;
}

.next-btn {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
}


/* Hide external buttons on small screens if desired */
@media (max-width: 640px) {
  /* .external-controls {
    display: none;
  } */
}

@media screen and (max-width: 576px) {
  .external-btn {
    width: 17px;
    height: 35px;
  }

  .prev-btn {
    position: absolute;
    left: -17px;
  }

  .next-btn {
    position: absolute;
    right: -17px;
  }
}
</style>
