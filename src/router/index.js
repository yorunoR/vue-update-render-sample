import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FunctionalComponentBtns from "../views/FunctionalComponentBtns.vue";
import NormalBtns from "../views/NormalBtns.vue";
import StringPropBtns from "../views/StringPropBtns.vue";
import ObjectPropBtns from "../views/ObjectPropBtns.vue";

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
    path: "/string-prop-btns",
    name: "string-prop-btns",
    component: StringPropBtns
  },
  {
    path: "/object-prop-btns",
    name: "object-prop-btns",
    component: ObjectPropBtns
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
