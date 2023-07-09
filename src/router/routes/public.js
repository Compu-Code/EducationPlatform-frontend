export default [
  {
    // Main Layout
    path: "/",
    name: "main-layout",
    component: () => import("@/views/public/MainLayout.vue"),
    redirect: "/home",
    children: [
      // Home Page
      {
        path: "/home",
        name: "home-page",
        component: () => import("@/views/public/HomePage.vue"),
      },
      // About Us
      {
        path: "/about-us",
        name: "about-us",
        component: () => import("@/views/public/AboutUs.vue"),
      },
      // Lecturers
      {
        path: "/lecturers",
        name: "lecturers",
        component: () => import("@/views/public/Lecturers.vue"),
      },
      // Contact Us
      {
        path: "/contact-us",
        name: "contact-us",
        component: () => import("@/views/public/ContactUs.vue"),
      },
      // FAQs
      {
        path: "/FAQs",
        name: "FAQs",
        component: () => import("@/views/public/FAQs.vue"),
      },
    ],
  },
  {
    // Login
    path: "/login",
    name: "login",
    component: () => import("@/views/public/Login.vue"),
    meta: { withoutToken: true },
  },
  {
    // Signup
    path: "/signup",
    name: "signup",
    // TODO: probably you should remove redirect
    redirect: "/signup/step1",
    // component: () => import("@/views/public/Signup.vue"),
    // TODO: probably you should remove children
    children: [
      {
        name: "signup-step1",
        path: "step1",
        component: () => import("@/views/public/signup-steps/signup1.vue"),
        meta: { withoutToken: true },
      },
      {
        name: "signup-step2",
        path: "step2",
        component: () => import("@/views/public/signup-steps/signup2.vue"),
        meta: { withoutToken: true },
      },
      {
        name: "signup-step3",
        path: "step3",
        component: () => import("@/views/public/signup-steps/signup3.vue"),
        meta: {
          withoutToken: true,
        },
      },
    ],
  },
  // Forgot Password
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/views/public/ForgotPassword.vue"),
  },
  // Reset Password
  // TODO: update route (this when user click on email or when enters code)
  {
    path: "/password-reset",
    name: "reset-password",
    component: () => import("@/views/public/ResetPassword.vue"),
  },
];
