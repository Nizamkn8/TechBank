// router configrations
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
