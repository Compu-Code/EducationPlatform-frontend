import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import MainMenu from "../core/config/MainMenuConfig";

export const useSidebarStore = defineStore("sidebarStore", {
  state: () => ({
    studentMenu: [
      { title: "Dashboard", link: "/Student/Dashboard", icon: "IconDashboard" },
      { title: "Courses", link: "/Student/Courses", icon: "IconCourses" },
      {
        title: "Chat",
        link: "/Student/Chat",
        icon: "IconChat",
      },
      {
        title: "Calender",
        link: "/Student/Calender",
        icon: "IconCalender",
      },
      {
        title: "My Courses",
        link: "/Student/MyCourses",
        icon: "IconMycourses",
      },
      {
        title: "Confirm Take Lecture",
        link: "/Student/ConfirmTake",
        icon: "IconConfirm",
      },
    ],
    lecturerMenu: [
      {
        title: "Dashboard",
        link: "/Lecturer/Dashboard",
        icon: "IconDashboard",
      },
      { title: "Students", link: "/Lecturer/Students", icon: "IconStudents" },
      { title: "Courses", link: "/Lecturer/Courses", icon: "IconCourses" },
      {
        title: "Chat",
        link: "/Lecturer/Chat",
        icon: "IconChat",
      },
      {
        title: "Calender",
        link: "/Lecturer/Calender",
        icon: "IconCalender",
      },
      {
        title: "Courses History",
        link: "/Lecturer/CoursesHistory",
        icon: "IconHistory",
      },
      {
        title: "Confirm Give Lecture",
        link: "/Lecturer/ConfirmGive",
        icon: "IconConfirm",
      },
    ],
    mainMenu: [
      {
        title: "Dashboard",
        link: "/Admin/Dashboard",
        icon: "IconDashboard",
        isActive: true,
      },
      { title: "Users", link: "/Users", icon: "IconUsers", isActive: false },
      {
        title: "Courses",
        link: "/Courses",
        icon: "IconCourses",
        isActive: false,
      },
      {
        title: "Transactions",
        submenu: true,
        icon: "IconTransactions",
        isSubmenuActive: false,
        submenuItem: [
          {
            title: "Pending",
            link: "/Transactions/pending",
            icon: "IconDashboard",
            isActive: false,
          },
          {
            title: "Completed",
            link: "/Transactions/completed",
            icon: "IconDashboard",
            isActive: false,
          },
        ],
      },
      {
        title: "Orders",
        submenu: true,
        icon: "IconOrders",
        isSubmenuActive: false,
        submenuItem: [
          {
            title: "Pending",
            link: "/Orders/pending",
            icon: "IconDashboard",
            isActive: false,
          },
          {
            title: "Completed",
            link: "/Orders/completed",
            icon: "IconDashboard",
            isActive: false,
          },
        ],
      },
      {
        title: "Errors Log",
        link: "/ErrorsLog",
        icon: "IconErrors",
        isActive: false,
      },
      {
        title: "Roles",
        link: "/Roles",
        icon: "IconRoles",
        isActive: false,
      },
      {
        title: "Forms",
        link: "/FormsResponses",
        icon: "IconForms",
        isActive: false,
      },

      { title: "Rating", link: "/Rating", icon: "IconRating", isActive: false },
      {
        title: "News & Events",
        link: "/News&Events",
        icon: "IconNews",
        isActive: false,
      },
      { title: "Chat", link: "/chat", icon: "IconChat", isActive: false },
      {
        title: "Activity Log",
        link: "/ActivityLog",
        icon: "IconActivity",
        isActive: false,
      },
      {
        title: "Sponsors",
        link: "/Sponsors",
        icon: "IconSponsors",
        isActive: false,
      },
    ],
    // mainMenu: ad,
    isMenuOpen: useLocalStorage("isMenuOpen", false),
    isSidebarPinned: useLocalStorage("isSidebarPinned", false),
    isSubmenuOpen: false,
    isRadioChecked: useLocalStorage("isRadioChecked", false),
  }),
  actions: {
    toggleOpen(mouseEvent) {
      if (this.isSidebarPinned) {
        this.isMenuOpen = true;
      } else {
        if (mouseEvent === "over") {
          this.isMenuOpen = true;
        } else if (mouseEvent === "leave") {
          this.isMenuOpen = false;
        }
      }
    },
    setActive(title) {
      const menu = this.mainMenu.find((m) => m.title === title);
      if (!menu.isActive) {
        for (let i = 0; i < this.mainMenu.length; i++) {
          this.mainMenu[i].isActive = false;
        }
        menu.isActive = true;
      }
    },
    toggleSubmenu(title) {
      const Submenu = this.mainMenu.find((m) => m.title === title);
      Submenu.isSubmenuActive = !Submenu.isSubmenuActive;
    },
    togglePinned() {
      this.isSidebarPinned = !this.isSidebarPinned;
      this.isRadioChecked = !this.isRadioChecked;
    },
  },
});
