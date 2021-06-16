import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recipe from "../views/Recipe.vue";
import About from "../views/About.vue";
import Pantry from "../views/Pantry.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/pantry",
    name: "Pantry",
    component: Pantry,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
