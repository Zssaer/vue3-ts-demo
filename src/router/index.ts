import { createRouter, createWebHistory } from "vue-router";

const staticRoutes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      isKeepAlive: true,
    },
  },
  {
    path: "/ref",
    name: "Ref",
    component: () => import("@/pages/ref/index.vue"),
    meta: {
      isKeepAlive: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
});

export default router;