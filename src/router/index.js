import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PorównywarkaView from "../views/PorównywarkaView.vue";
import KursyView from "../views/KursyView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/porównywarka",
    name: "porównywarka",
    component: PorównywarkaView,
  },
  {
    path: "/kursy",
    name: "kursy",
    component: KursyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
