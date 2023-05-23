import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/AuthStore";
import { defineAsyncComponent } from "vue";

// import all files from AdminAccess folder + LAZY LOADING
const Users = () => import("../views/AdminsAccess/UsersPages/UsersPage.vue");
const UserDetails = () =>
  import("../views/AdminsAccess/UsersPages/UserDetails.vue");
const Courses = () =>
  import("../views/AdminsAccess/CoursesPages/CoursesPage.vue");
const PendingTransactions = () =>
  import("../views/AdminsAccess/TransactionsPages/PendingTransactions.vue");
const CompletedTransactions = () =>
  import("../views/AdminsAccess/TransactionsPages/CompletedTransactions.vue");

const PendingOrders = () =>
  import("../views/AdminsAccess/OrdersPages/PendingOrders.vue");
const CompletedOrders = () =>
  import("../views/AdminsAccess/OrdersPages/CompletedOrders.vue");
const ErrorLogs = () =>
  import("../views/AdminsAccess/ErrorsPages/ErrorLogs.vue");
const ErrorDetails = () =>
  import("../views/AdminsAccess/ErrorsPages/ErrorDetails.vue");
const ContactusPage = () =>
  import("../views/AdminsAccess/FormsPages/ContactusPage.vue");
const ContactUsDetails = () =>
  import("../views/AdminsAccess/FormsPages/ContactusDetails.vue");
const VolunteerPage = () =>
  import("../views/AdminsAccess/FormsPages/VolunteerPage.vue");
const VolunteerDetails = () =>
  import("../views/AdminsAccess/FormsPages/VolunteerDetails.vue");

const RolesPage = () =>
  import("../views/AdminsAccess/RolesPages/RolesPage.vue");
const RoleDetails = () =>
  import("../views/AdminsAccess/RolesPages/RoleDetails.vue");
const PermissionsPage = () =>
  import("../views/AdminsAccess/PermissionsPages/PermissionsPage.vue");
const PermissionDetails = () =>
  import("../views/AdminsAccess/PermissionsPages/PermissionDetails.vue");

const NewsPage = () => import("../views/AdminsAccess/NewsPages/NewsPage.vue");
const NewsDetails = () =>
  import("../views/AdminsAccess/NewsPages/NewsDetails.vue");
const RatingPage = () =>
  import("../views/AdminsAccess/RatingPages/RatingPage.vue");
const RatesDetails = () =>
  import("../views/AdminsAccess/RatingPages/RatesDetails.vue");
const SupportPage = () =>
  import("../views/AdminsAccess/SupportPages/SupportPage.vue");
const ActivityLogs = () =>
  import("../views/AdminsAccess/ActivityLogs/ActivityLogs.vue");
const ActivityDetails = () =>
  import("../views/AdminsAccess/ActivityLogs/ActivityDetails.vue");
const SponsorsPage = () =>
  import("../views/AdminsAccess/SponsorsPages/SponsorsPage.vue");
const SponsorDetails = () =>
  import("../views/AdminsAccess/SponsorsPages/SponsorDetails.vue");

// import all files from LecturerAccess folder
const LecturerCourses = () =>
  import("../views/LecturersAccess/LecturerCourses.vue");
const LecturerStudents = () =>
  import("../views/LecturersAccess/LecturerStudents.vue");
const LecturerChistory = () =>
  import("../views/LecturersAccess/LecturerChistory.vue");
const LecturerChat = () => import("../views/LecturersAccess/LecturerChat.vue");
const LecturerCalender = () =>
  import("../views/LecturersAccess/LecturerCalender.vue");
const LecturerConfirm = () =>
  import("../views/LecturersAccess/LecturerConfirm.vue");

// import all files from StudentAccess folder
const StudentCourses = () =>
  import("../views/StudentsAccess/StudentCourses.vue");
const StudentMcourses = () =>
  import("../views/StudentsAccess/StudentMcourses.vue");
const StudentChat = () => import("../views/StudentsAccess/StudentChat.vue");
const StudentCalender = () =>
  import("../views/StudentsAccess/StudentCalender.vue");
const StudentConfirm = () =>
  import("../views/StudentsAccess/StudentConfirm.vue");

// import all files from UserAccess folder
const HomePage = () => import("../views/UserAccess/HomePage.vue");
const AboutPage = () => import("../views/UserAccess/AboutPage.vue");
const LecturersPage = () => import("../views/UserAccess/LecturersPage.vue");
const ContactPage = () => import("../views/UserAccess/ContactPage.vue");
const FAQsPage = () => import("../views/UserAccess/FAQsPage.vue");
const LoginPage = () => import("../views/UserAccess/LoginPage.vue");

// import signup steps from UserAccess
const Signup1 = () => import("../views/UserAccess/SiginupSteps/Signup1.vue");
const Signup2 = () => import("../views/UserAccess/SiginupSteps/Signup2.vue");
const Signup3 = () => import("../views/UserAccess/SiginupSteps/Signup3.vue");

// import rest pass page
const ResetPassword = () => import("../views/UserAccess/ResetPassword.vue");

////
const WebsitePage = () => import("../views/Website.vue");
const Dashboard = () => import("../views/Dashboard.vue");
const dashboardHome = () =>
  import("../components/DashboardComponents/DashboardHome/DashboardHome.vue");
////

// import files from PageNotFound folder
const PageNotFound = () => import("../views/PageNotfound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // Website Pages
      name: "website",
      path: "/",
      component: WebsitePage,
      redirect: "/home",
      children: [
        { name: "home", path: "/home", component: HomePage },
        { name: "about-us", path: "/about", component: AboutPage },
        { name: "lecturers", path: "/lecturers", component: LecturersPage },
        { name: "contact", path: "/contact", component: ContactPage },
        { name: "FAQs", path: "/FAQs", component: FAQsPage },
      ],
    },
    {
      // login
      name: "login",
      path: "/login",
      component: LoginPage,
      meta: { withoutToken: true },
    },
    {
      // signup
      name: "signup",
      path: "/signup",
      redirect: "/signup/step1",
      children: [
        {
          name: "signup-step1",
          path: "step1",
          component: Signup1,
          meta: { withoutToken: true },
        },
        {
          name: "signup-step2",
          path: "step2",
          component: Signup2,
          meta: { withoutToken: true },
        },
        {
          name: "signup-step3",
          path: "step3",
          component: Signup3,
          meta: { withoutToken: true },
        },
      ],
    },
    {
      name: "reset-password",
      path: "/reset-password",
      component: ResetPassword,
    },
    {
      name: "dashboard",
      path: "/dashboard",
      component: Dashboard,
      redirect: "/dashboard/home",
      children: [
        {
          name: "dashboard-home",
          path: "home",
          component: dashboardHome,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-users",
          path: "users",
          component: Users,
          meta: { requiresAuth: true },
        },
        {
          name: "userDetails",
          path: "users/:userID/details",
          component: UserDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-courses",
          path: "courses",
          component: Courses,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-pending-transactions",
          path: "transactions/pending",
          component: PendingTransactions,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-completed-transactions",
          path: "transactions/completed",
          component: CompletedTransactions,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-pending-orders",
          path: "orders/pending",
          component: PendingOrders,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-completed-orders",
          path: "orders/completed",
          component: CompletedOrders,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-error-logs",
          path: "errorlogs",
          component: ErrorLogs,
          meta: { requiresAuth: true },
        },
        {
          name: "errorDetails",
          path: "errorlogs/:errorID/details",
          component: ErrorDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-contact-forms",
          path: "forms/contact-us",
          component: ContactusPage,
          meta: { requiresAuth: true },
        },
        {
          name: "contactUsDetails",
          path: "forms/contact-us/:contactUsID/details",
          component: ContactUsDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-volunteer-forms",
          path: "forms/volunteer-with-us",
          component: VolunteerPage,
          meta: { requiresAuth: true },
        },
        {
          name: "volunteerDetails",
          path: "forms/volunteer-with-us/:volunteerID/details",
          component: VolunteerDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-roles",
          path: "access-management/roles",
          component: RolesPage,
          meta: { requiresAuth: true },
        },
        {
          name: "roleDetails",
          path: "access-management/roles/:roleID/details",
          component: RoleDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-permissions",
          path: "access-management/permissions",
          component: PermissionsPage,
          meta: { requiresAuth: true },
        },
        {
          name: "permissionDetails",
          path: "access-management/permissions/:permissionID/details",
          component: PermissionDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-news-events",
          path: "news-events",
          component: NewsPage,
          meta: { requiresAuth: true },
        },
        {
          name: "newsDetails",
          path: "news-events/:newsID/details",
          component: NewsDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-rating",
          path: "rating",
          component: RatingPage,
          meta: { requiresAuth: true },
        },
        {
          name: "ratesDetails",
          path: "rating/:rateID/details",
          component: RatesDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-support",
          path: "support",
          component: SupportPage,
          meta: { requiresAuth: true },
        },
        {
          name: "admin-activity-logs",
          path: "activitylogs",
          component: ActivityLogs,
          meta: { requiresAuth: true },
        },
        {
          name: "activityDetails",
          path: "activitylogs/:activityID/details",
          component: ActivityDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        {
          name: "admin-sponsors",
          path: "sponsors",
          component: SponsorsPage,
          meta: { requiresAuth: true },
        },
        {
          name: "sponsorDetails",
          path: "sponsors/:sponsorID/details",
          component: SponsorDetails,
          meta: { requiresAuth: true },
          props: true,
        },
        // lecturers
        {
          name: "lecturer-students",
          path: "mystudents",
          component: LecturerStudents,
          meta: { requiresAuth: true },
        },
        {
          name: "lecturer-courses",
          path: "lecturercourses",
          component: LecturerCourses,
          meta: { requiresAuth: true },
        },
        {
          name: "lecturer-courses-history",
          path: "courseshistory",
          component: LecturerChistory,
          meta: { requiresAuth: true },
        },
        {
          name: "lecturer-chat",
          path: "chat",
          component: LecturerChat,
          meta: { requiresAuth: true },
        },
        {
          name: "lecturer-calender",
          path: "calender",
          component: LecturerCalender,
          meta: { requiresAuth: true },
        },
        {
          name: "lecturer-confirm",
          path: "confirm",
          component: LecturerConfirm,
          meta: { requiresAuth: true },
        },
        //students
        {
          name: "student-courses",
          path: "studentcourses",
          component: StudentCourses,
          meta: { requiresAuth: true },
        },
        {
          name: "student-my-courses",
          path: "mycourses",
          component: StudentMcourses,
          meta: { requiresAuth: true },
        },
        {
          name: "student-chat",
          path: "chat",
          component: StudentChat,
          meta: { requiresAuth: true },
        },
        {
          name: "student-calender",
          path: "calender",
          component: StudentCalender,
          meta: { requiresAuth: true },
        },
        {
          name: "student-confirm",
          path: "confirm",
          component: StudentConfirm,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      // page not found (must be the latest one of routes)
      name: "PageNotFound",
      path: "/:catchAll(.*)*",
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
  if (to.meta.withoutToken && useAuthStore().isAuthenticated) {
    return {
      path: "/home",
    };
  }
});

export default router;
