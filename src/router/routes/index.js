import publicRoutes from "./public";
import adminsRoutes from "@/router/routes/admins";
// import lecturersRoutes from "@/router/routes/lecturers";
// import studentsRoutes from "@/router/routes/students";

export default [
  ...publicRoutes,
  ...adminsRoutes,
  // ...lecturersRoutes,
  // ...studentsRoutes,

  // Page Not Found 404 (must be the latest one of routes)
  {
    path: "/:catchAll(.*)*",
    name: "page-not-found",
    component: () => import("@/views/public/PageNotFound.vue"),
  },
];
