import { createRouter, createWebHistory } from "vue-router";

// import all files from AdminAccess folder
import AdminDashboard from "../views/AdminsAccess/AdminDashboard.vue";
import Users from "../views/AdminsAccess/UsersPage.vue";
import Courses from "../views/AdminsAccess/CoursesPage.vue";
import PendingTransactions from "../views/AdminsAccess/Transactions/PendingTransactions.vue";
import CompletedTransactions from "../views/AdminsAccess/Transactions/CompletedTransactions.vue";
import PendingOrders from "../views/AdminsAccess/Orders/PendingOrders.vue";
import CompletedOrders from "../views/AdminsAccess/Orders/CompletedOrders.vue";
import ErrorsLog from "../views/AdminsAccess/ErrorsLog.vue";
import FormsResponses from "../views/AdminsAccess/FormsResponses.vue";
import RolesPage from "../views/AdminsAccess/RolesPage.vue";
import NewsPage from "../views/AdminsAccess/NewsPage.vue";
import RatingPage from "../views/AdminsAccess/RatingPage.vue";
import SupportPage from "../views/AdminsAccess/SupportPage.vue";
import ActivityLog from "../views/AdminsAccess/ActivityLog.vue";
import SponsorsPage from "../views/AdminsAccess/SponsorsPage.vue";

// import all files from LecturerAccess folder
import LecturerDashboard from "../views/LecturersAccess/LecturerDashboard.vue";
import LecturerCourses from "../views/LecturersAccess/LecturerCourses.vue";
import LecturerChistory from "../views/LecturersAccess/LecturerChistory.vue";
import LecturerChat from "../views/LecturersAccess/LecturerChat.vue";
import LecturerCalender from "../views/LecturersAccess/LecturerCalender.vue";
import LecturerConfirm from "../views/LecturersAccess/LecturerConfirm.vue";

// import all files from StudentAccess folder
import StudentDashboard from "../views/StudentsAccess/StudentDashboard.vue";
import StudentCourses from "../views/StudentsAccess/StudentCourses.vue";
import StudentMcourses from "../views/StudentsAccess/StudentMcourses.vue";
import StudentChat from "../views/StudentsAccess/StudentChat.vue";
import StudentCalender from "../views/StudentsAccess/StudentCalender.vue";
import StudentConfirm from "../views/StudentsAccess/StudentConfirm.vue";

// import all files from UserAccess folder
import HomePage from "../views/UserAccess/HomePage.vue";
import AboutPage from "../views/UserAccess/AboutPage.vue";
import LecturersPage from "../views/UserAccess/LecturersPage.vue";
import ContactPage from "../views/UserAccess/ContactPage.vue";
import FAQsPage from "../views/UserAccess/FAQsPage.vue";
import LoginPage from "../views/UserAccess/LoginPage.vue";
import SignupPage from "../views/UserAccess/SignupPage.vue";

////
import WebsitePage from "../views/Website.vue";
import Dashboard from "../views/Dashboard.vue";
////

// import files from PageNotFound folder
import PageNotFound from "../views/PageNotfound.vue";

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
    },
    {
      // signup
      name: "signup",
      path: "/signup",
      component: SignupPage,
    },
    {
      // Admin Dashboard Pages
      name: "admin-dashboard",
      path: "/dashboard/admin",
      component: Dashboard,
      children: [
        { name: "admin-users", path: "/users", component: Users },
        { name: "admin-courses", path: "/courses", component: Courses },
        {
          name: "admin-pending-transactions",
          path: "/transactions/pending",
          component: PendingTransactions,
        },
        {
          name: "admin-completed-transactions",
          path: "/transactions/completed",
          component: CompletedTransactions,
        },
        {
          name: "admin-pending-orders",
          path: "/orders/pending",
          component: PendingOrders,
        },
        {
          name: "admin-completed-orders",
          path: "/orders/completed",
          component: CompletedOrders,
        },
        { name: "admin-errors-log", path: "/errorlog", component: ErrorsLog },
        {
          name: "admin-forms-responses",
          path: "/formsresponses",
          component: FormsResponses,
        },
        { name: "admin-roles", path: "/roles", component: RolesPage },
        {
          name: "admin-news-events",
          path: "/news&events",
          component: NewsPage,
        },
        { name: "admin-rating", path: "/rating", component: RatingPage },
        { name: "admin-support", path: "/support", component: SupportPage },
        {
          name: "admin-activity-log",
          path: "/activitylog",
          component: ActivityLog,
        },
        { name: "admin-sponsors", path: "/sponsors", component: SponsorsPage },
      ],
    },
    {
      // Lecturer Dashboard Pages
      name: "lecturer-dashboard",
      path: "/dashboard/lecturer",
      component: LecturerDashboard,
      children: [
        {
          name: "lecturer-courses",
          path: "/courses",
          component: LecturerCourses,
        },
        {
          name: "lecturer-courses-history",
          path: "/courseshistory",
          component: LecturerChistory,
        },
        { name: "lecturer-chat", path: "/chat", component: LecturerChat },
        {
          name: "lecturer-calender",
          path: "/calender",
          component: LecturerCalender,
        },
        {
          name: "lecturer-confirm",
          path: "/confirm",
          component: LecturerConfirm,
        },
      ],
    },
    {
      // Student Dashboard Pages
      name: "student-dashboard",
      path: "/dashboard/student",
      component: StudentDashboard,
      children: [
        {
          name: "student-courses",
          path: "/courses",
          component: StudentCourses,
        },
        {
          name: "student-my-courses",
          path: "/mycourses",
          component: StudentMcourses,
        },
        { name: "student-chat", path: "/chat", component: StudentChat },
        {
          name: "student-calender",
          path: "/calender",
          component: StudentCalender,
        },
        {
          name: "student-confirm",
          path: "/confirm",
          component: StudentConfirm,
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

export default router;
