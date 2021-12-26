const routes = [
 
  {
    path: "/",
    name: "Home",
    component: () => import("pages/Home.vue"),
  },

  {
    path: "/sobre",
    name: "Sobre",
    component: () => import("pages/Sobre.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("pages/Blog.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
