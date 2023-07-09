import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes/index";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

// router.beforeEach((to, from) => {
//   // instead of having to check every route record with
//   // to.matched.some(record => record.meta.requiresAuth)
//   if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     return {
//       path: "/login",
//       // save the location we were at to come back later
//       query: { redirect: to.fullPath },
//     };
//   }
//   if (to.meta.withoutToken && useAuthStore().isAuthenticated) {
//     return {
//       path: "/home",
//     };
//   }
// });
