import { createRouter, createWebHistory } from "vue-router";

// import all files from AdminAccess folder + LAZY LOADING
const Users = () => import("../views/AdminsAccess/UsersPage.vue");
const Courses = () => import("../views/AdminsAccess/CoursesPage.vue");
const PendingTransactions = () =>
  import("../views/AdminsAccess/Transactions/PendingTransactions.vue");
const CompletedTransactions = () =>
  import("../views/AdminsAccess/Transactions/CompletedTransactions.vue");

const PendingOrders = () =>
  import("../views/AdminsAccess/Orders/PendingOrders.vue");
const CompletedOrders = () =>
  import("../views/AdminsAccess/Orders/CompletedOrders.vue");
const ErrorsLog = () => import("../views/AdminsAccess/ErrorsLog.vue");
const FormsResponses = () => import("../views/AdminsAccess/FormsResponses.vue");
const RolesPage = () => import("../views/AdminsAccess/RolesPage.vue");
const NewsPage = () => import("../views/AdminsAccess/NewsPage.vue");
const RatingPage = () => import("../views/AdminsAccess/RatingPage.vue");
const SupportPage = () => import("../views/AdminsAccess/SupportPage.vue");
const ActivityLog = () => import("../views/AdminsAccess/ActivityLog.vue");
const SponsorsPage = () => import("../views/AdminsAccess/SponsorsPage.vue");

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
    },
    {
      // signup
      name: "signup",
      path: "/signup",
      redirect: "/signup/step1",
      children: [
        { name: "signup-step1", path: "step1", component: Signup1 },
        { name: "signup-step2", path: "step2", component: Signup2 },
        { name: "signup-step3", path: "step3", component: Signup3 },
      ],
    },
    {
      name: "reset-password",
      path: "/reset-password",
      component: ResetPassword,
    },
    {
      // Admin Dashboard Pages
      // name: "admin-dashboard",
      // path: "/dashboard/admin",
      // component: Dashboard,
      // children: [
      //   { name: "admin-users", path: "/users", component: Users },
      //   { name: "admin-courses", path: "/courses", component: Courses },
      //   {
      //     name: "admin-pending-transactions",
      //     path: "/transactions/pending",
      //     component: PendingTransactions,
      //   },
      //   {
      //     name: "admin-completed-transactions",
      //     path: "/transactions/completed",
      //     component: CompletedTransactions,
      //   },
      //   {
      //     name: "admin-pending-orders",
      //     path: "/orders/pending",
      //     component: PendingOrders,
      //   },
      //   {
      //     name: "admin-completed-orders",
      //     path: "/orders/completed",
      //     component: CompletedOrders,
      //   },
      //   { name: "admin-errors-log", path: "/errorlog", component: ErrorsLog },
      //   {
      //     name: "admin-forms-responses",
      //     path: "/formsresponses",
      //     component: FormsResponses,
      //   },
      //   { name: "admin-roles", path: "/roles", component: RolesPage },
      //   {
      //     name: "admin-news-events",
      //     path: "/news&events",
      //     component: NewsPage,
      //   },
      //   { name: "admin-rating", path: "/rating", component: RatingPage },
      //   { name: "admin-support", path: "/support", component: SupportPage },
      //   {
      //     name: "admin-activity-log",
      //     path: "/activitylog",
      //     component: ActivityLog,
      //   },
      //   { name: "admin-sponsors", path: "/sponsors", component: SponsorsPage },
      // ],
    },

    // for test
    {
      name: "dashboard",
      path: "/dashboard",
      component: Dashboard,
      redirect: "/dashboard/home",
      children: [
        { name: "dashboard-home", path: "home", component: dashboardHome },
        { name: "admin-users", path: "users", component: Users },
        { name: "admin-courses", path: "courses", component: Courses },
        {
          name: "admin-pending-transactions",
          path: "transactions/pending",
          component: PendingTransactions,
        },
        {
          name: "admin-completed-transactions",
          path: "transactions/completed",
          component: CompletedTransactions,
        },
        {
          name: "admin-pending-orders",
          path: "orders/pending",
          component: PendingOrders,
        },
        {
          name: "admin-completed-orders",
          path: "orders/completed",
          component: CompletedOrders,
        },
        { name: "admin-errors-log", path: "errorlog", component: ErrorsLog },
        {
          name: "admin-forms-responses",
          path: "formsresponses",
          component: FormsResponses,
        },
        { name: "admin-roles", path: "roles", component: RolesPage },
        {
          name: "admin-news-events",
          path: "news&events",
          component: NewsPage,
        },
        { name: "admin-rating", path: "rating", component: RatingPage },
        { name: "admin-support", path: "support", component: SupportPage },
        {
          name: "admin-activity-log",
          path: "activitylog",
          component: ActivityLog,
        },
        { name: "admin-sponsors", path: "sponsors", component: SponsorsPage },
        // lecturers
        {
          name: "lecturer-students",
          path: "mystudents",
          component: LecturerStudents,
        },
        {
          name: "lecturer-courses",
          path: "lecturercourses",
          component: LecturerCourses,
        },
        {
          name: "lecturer-courses-history",
          path: "courseshistory",
          component: LecturerChistory,
        },
        { name: "lecturer-chat", path: "chat", component: LecturerChat },
        {
          name: "lecturer-calender",
          path: "calender",
          component: LecturerCalender,
        },
        {
          name: "lecturer-confirm",
          path: "confirm",
          component: LecturerConfirm,
        },
        //students
        {
          name: "student-courses",
          path: "studentcourses",
          component: StudentCourses,
        },
        {
          name: "student-my-courses",
          path: "mycourses",
          component: StudentMcourses,
        },
        { name: "student-chat", path: "chat", component: StudentChat },
        {
          name: "student-calender",
          path: "calender",
          component: StudentCalender,
        },
        {
          name: "student-confirm",
          path: "confirm",
          component: StudentConfirm,
        },
      ],
    },

    // end test sec
    // {
    //   // Lecturer Dashboard Pages
    //   name: "lecturer-dashboard",
    //   path: "/dashboard/lecturer",
    //   component: LecturerDashboard,
    //   children: [
    //     {
    //       name: "lecturer-courses",
    //       path: "/courses",
    //       component: LecturerCourses,
    //     },
    //     {
    //       name: "lecturer-courses-history",
    //       path: "/courseshistory",
    //       component: LecturerChistory,
    //     },
    //     { name: "lecturer-chat", path: "/chat", component: LecturerChat },
    //     {
    //       name: "lecturer-calender",
    //       path: "/calender",
    //       component: LecturerCalender,
    //     },
    //     {
    //       name: "lecturer-confirm",
    //       path: "/confirm",
    //       component: LecturerConfirm,
    //     },
    //   ],
    // },
    // {
    //   // Student Dashboard Pages
    //   name: "student-dashboard",
    //   path: "/dashboard/student",
    //   component: StudentDashboard,
    //   children: [
    //     {
    //       name: "student-courses",
    //       path: "/courses",
    //       component: StudentCourses,
    //     },
    //     {
    //       name: "student-my-courses",
    //       path: "/mycourses",
    //       component: StudentMcourses,
    //     },
    //     { name: "student-chat", path: "/chat", component: StudentChat },
    //     {
    //       name: "student-calender",
    //       path: "/calender",
    //       component: StudentCalender,
    //     },
    //     {
    //       name: "student-confirm",
    //       path: "/confirm",
    //       component: StudentConfirm,
    //     },
    //   ],
    // },
    {
      // page not found (must be the latest one of routes)
      name: "PageNotFound",
      path: "/:catchAll(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;
