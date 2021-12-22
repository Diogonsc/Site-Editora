const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },

  { path: "/home", component: () => import("pages/Home.vue") },
  { path: "/sobre", component: () => import("pages/Sobre.vue") },
  { path: "/blog", component: () => import("pages/Blog.vue") },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
