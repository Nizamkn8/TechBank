<script setup>
import SectionTitle from "../common/titles/SectionTitle.vue";
import BlogCard from "../common/cards/BlogCard.vue";
import { onMounted, ref } from "vue";

const blogs = ref([])

onMounted( async() => {
  try {
    const res = await fetch("/data/blog.json");
    const data = await res.json();
    blogs.value = data.blog;
  }
  catch (err) {
    console.log("Error fetching teams:", err)
  }
});

</script>

<template>
  <section class="container w-full bg-black text-white section-padding">
    <div class="mx-w-[1271px]">
      <SectionTitle text="Blogs" subText="Techbank" />

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <BlogCard
          v-for="(blog,i) in blogs"
          :key="i"
          :blog="blog"
        />
      </div>
    </div>
  </section>
</template>

