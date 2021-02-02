const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
      { path: "/services", component: () => import("pages/Services.vue") },
      {
        path: "/getOffer",
        component: () => import("pages/Offer.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
