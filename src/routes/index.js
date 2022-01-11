import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupView.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainView.vue"),
    },
    {
      path: "/add",
      component: () => import("../views/PostAddView.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});
