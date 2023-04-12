import { createRouter, createWebHistory } from "vue-router";

// import dashboard from SharedAccess folder
// import Dashboard from "./../views/SharedAccess/DashboardPage.vue";

// import all files from AdminAccess folder
import AdminDashboard from "./../views/AdminsAccess/AdminDashboard.vue";
import Users from "./../views/AdminsAccess/UsersPage.vue";
import Courses from "./../views/AdminsAccess/CoursesPage.vue";
import PendingTransactions from "./../views/AdminsAccess/Transactions/PendingTransactions.vue";
import CompletedTransactions from "./../views/AdminsAccess/Transactions/CompletedTransactions.vue";
import PendingOrders from "./../views/AdminsAccess/Orders/PendingOrders.vue";
import CompletedOrders from "./../views/AdminsAccess/Orders/CompletedOrders.vue";
import ErrorsLog from "./../views/AdminsAccess/ErrorsLog.vue";
import FormsResponses from "./../views/AdminsAccess/FormsResponses.vue";
import RolesPage from "./../views/AdminsAccess/RolesPage.vue";
import NewsPage from "./../views/AdminsAccess/NewsPage.vue";
import RatingPage from "./../views/AdminsAccess/RatingPage.vue";
import SupportPage from "./../views/AdminsAccess/SupportPage.vue";
import ActivityLog from "./../views/AdminsAccess/ActivityLog.vue";
import SponsorsPage from "./../views/AdminsAccess/SponsorsPage.vue";

// import all files from LecturerAccess folder
import LecturerDashboard from "./../views/LecturersAccess/LecturerDashboard.vue";
import LecturerCourses from "./../views/LecturersAccess/LecturerCourses.vue";
import LecturerChistory from "./../views/LecturersAccess/LecturerChistory.vue";
import LecturerChat from "./../views/LecturersAccess/LecturerChat.vue";
import LecturerCalender from "./../views/LecturersAccess/LecturerCalender.vue";
import LecturerConfirm from "./../views/LecturersAccess/LecturerConfirm.vue";

// import all files from StudentAccess folder
import StudentDashboard from "./../views/StudentsAccess/StudentDashboard.vue";
import StudentCourses from "./../views/StudentsAccess/StudentCourses.vue";
import StudentMcourses from "./../views/StudentsAccess/StudentMcourses.vue";
import StudentChat from "./../views/StudentsAccess/StudentChat.vue";
import StudentCalender from "./../views/StudentsAccess/StudentCalender.vue";
import StudentConfirm from "./../views/StudentsAccess/StudentConfirm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Admin Routes
    {
      path: "/AdminDashboard",
      component: AdminDashboard,
    },
    {
      path: "/Users",
      component: Users,
    },
    {
      path: "/Courses",
      component: Courses,
    },
    {
      path: "/Transactions/Pending",
      component: PendingTransactions,
    },
    {
      path: "/Transactions/Completed",
      component: CompletedTransactions,
    },
    {
      path: "/Orders/Pending",
      component: PendingOrders,
    },
    {
      path: "/Orders/Completed",
      component: CompletedOrders,
    },
    {
      path: "/ErrorsLog",
      component: ErrorsLog,
    },
    {
      path: "/FormsResponses",
      component: FormsResponses,
    },
    {
      path: "/Roles",
      component: RolesPage,
    },
    {
      path: "/News&Events",
      component: NewsPage,
    },
    {
      path: "/Rating",
      component: RatingPage,
    },
    {
      path: "/Support",
      component: SupportPage,
    },
    {
      path: "/ActivityLog",
      component: ActivityLog,
    },
    {
      path: "/Sponsors",
      component: SponsorsPage,
    },
    // Lecturer Routes
    {
      path: "/Lecturer/Dashboard",
      component: LecturerDashboard,
    },
    {
      path: "/Lecturer/Courses",
      component: LecturerCourses,
    },
    {
      path: "/Lecturer/CoursesHistory",
      component: LecturerChistory,
    },
    {
      path: "/Lecturer/Chat",
      component: LecturerChat,
    },
    {
      path: "/Lecturer/Calender",
      component: LecturerCalender,
    },
    {
      path: "/Lecturer/Confirm",
      component: LecturerConfirm,
    },
    // Student Routes
    {
      path: "/Student/Dashboard",
      component: StudentDashboard,
    },
    {
      path: "/Student/Courses",
      component: StudentCourses,
    },
    {
      path: "/Student/MyCourses",
      component: StudentMcourses,
    },
    {
      path: "/Student/Chat",
      component: StudentChat,
    },
    {
      path: "/Student/Calender",
      component: StudentCalender,
    },
    {
      path: "/Student/Confirm",
      component: StudentConfirm,
    },
  ],
});

export default router;
