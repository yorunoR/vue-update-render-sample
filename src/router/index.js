import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FunctionalComponentBtns from "../views/FunctionalComponentBtns.vue";
import NormalBtns from "../views/NormalBtns.vue";
import ReactiveSameComponent from "../views/ReactiveSameComponent.vue";
import ReactiveDiffComponent from "../views/ReactiveDiffComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/functional-component-btns",
    name: "FunctionalComponentBtns",
    component: FunctionalComponentBtns
  },
  {
    path: "/normal-btns",
    name: "NormalBtns",
    component: NormalBtns
  },
  {
    path: "/reactive-same-component",
    name: "ReactiveSameComponent",
    component: ReactiveSameComponent
  },
  {
    path: "/reactive-diff-component",
    name: "ReactiveDiffComponent",
    component: ReactiveDiffComponent
  },
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
