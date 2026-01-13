import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/ui-test",
      name: "UiTesting",
      component: () => import("@/views/UiTesting.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
