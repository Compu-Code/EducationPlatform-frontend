import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
const MainMenu = () => import("../core/config/MainMenuConfig");
import { useUserStore } from "./UserStore";

export const useSidebarStore = defineStore("sidebarStore", {
  state: () => ({
    UserStore: useUserStore(),
    search: "",
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
        //test
        id: "ournews",
        icon: "IconNews",
        isActive: false,
      },
      { title: "Chat", link: "/chat", icon: "IconChat", isActive: false },
      {
        title: "Activity Log",
        link: "/ActivityLog",
        // test
        id: "activitylogs",
        icon: "IconActivity",
        isActive: false,
      },
      {
        title: "Sponsors",
        link: "/Sponsors",
        id: "",
        icon: "IconSponsors",
        isActive: false,
      },
    ],
    /// testing
    allMenus: [
      {
        title: "Dashboard",
        name: "dashboard-home",
        icon: "IconDashboard",
      },
      { title: "Users", name: "admin-users", icon: "IconUsers" },
      {
        title: "Courses",
        name: "admin-courses",
        icon: "IconCourses",
      },
      {
        title: "Transactions",
        icon: "IconTransactions",
        submenu: true,
        isSubmenuActive: false,
        submenuItem: [
          {
            title: "Pending",
            name: "admin-pending-transactions",
            icon: "IconDashboard",
          },
          {
            title: "Completed",
            name: "admin-completed-transactions",
            icon: "IconDashboard",
          },
        ],
      },
      {
        title: "Orders",
        icon: "IconOrders",
        submenu: true,
        isSubmenuActive: false,
        submenuItem: [
          {
            title: "Pending",
            name: "admin-pending-orders",
          },
          {
            title: "Completed",
            name: "admin-completed-orders",
          },
        ],
      },
      {
        title: "Error Logs",
        name: "admin-error-logs",
        icon: "IconErrors",
      },
      {
        title: "Roles",
        name: "admin-roles",
        icon: "IconRoles",
      },
      {
        title: "Forms",
        name: "admin-forms-responses",
        icon: "IconForms",
        submenu: true,
        isSubmenuActive: false,
        submenuItem: [
          {
            title: "Contact us",
            name: "admin-contact-forms",
          },
          {
            title: "Volunteer",
            name: "admin-volunteer-forms",
          },
        ],
      },

      { title: "Rating", name: "admin-rating", icon: "IconRating" },
      {
        title: "News & Events",
        name: "admin-news-events",
        icon: "IconNews",
      },
      { title: "Chat", name: "admin-support", icon: "IconChat" },
      {
        title: "Activity Logs",
        name: "admin-activity-logs",
        icon: "IconActivity",
      },
      {
        title: "Sponsors",
        name: "admin-sponsors",
        icon: "IconSponsors",
      },
      //lecturers
      // {
      //   title: "Students",
      //   name: "lecturer-students",
      //   icon: "IconStudents",
      //   spacing: true,
      // },
      // { title: "Courses", name: "lecturer-courses", icon: "IconCourses" },
      // {
      //   title: "Chat",
      //   name: "lecturer-chat",
      //   icon: "IconChat",
      // },
      // {
      //   title: "Calender",
      //   name: "lecturer-calender",
      //   icon: "IconCalender",
      // },
      // {
      //   title: "Courses History",
      //   name: "lecturer-courses-history",
      //   icon: "IconHistory",
      // },
      // {
      //   title: "Confirm Give Lecture",
      //   name: "lecturer-confirm",
      //   icon: "IconConfirm",
      // },
      // // students
      // {
      //   title: "Courses",
      //   name: "student-courses",
      //   icon: "IconCourses",
      //   spacing: true,
      // },
      // {
      //   title: "Chat",
      //   name: "student-chat",
      //   icon: "IconChat",
      // },
      // {
      //   title: "Calender",
      //   name: "student-calender",
      //   icon: "IconCalender",
      // },
      // {
      //   title: "My Courses",
      //   name: "student-my-courses",
      //   icon: "IconMycourses",
      // },
      // {
      //   title: "Confirm Take Lecture",
      //   name: "student-confirm",
      //   icon: "IconConfirm",
      // },
    ],
    filteredMenus: [],
    // testing
    // for testing
    testMenu: [],
    // end testing
    // mainMenu: ad,
    isMenuOpen: useLocalStorage("isMenuOpen", false),
    isSidebarPinned: useLocalStorage("isSidebarPinned", false),
    // for mobile
    sidebarOpen: false,
    isSubmenuOpen: false,
    isRadioChecked: useLocalStorage("isRadioChecked", false),
    searchText: "",
  }),
  actions: {
    toggleOpen(mouseEvent) {
      if (this.isSidebarPinned) {
        this.isMenuOpen = true;
      } else {
        // TODO: fix sidebarOpen BUG
        if (mouseEvent === "over" && !this.sidebarOpen) {
          this.isMenuOpen = true;
        } else if (mouseEvent === "leave" && !this.sidebarOpen) {
          this.isMenuOpen = false;
        }
      }
    },
    openSidebar() {
      this.sidebarOpen = true;
      this.isMenuOpen = true;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
    // setActive(title) {
    //   const menu = this.allMenu.find((m) => m.title === title);
    //   if (!menu.isActive) {
    //     for (let i = 0; i < this.allMenu.length; i++) {
    //       this.allMenu[i].isActive = false;
    //     }
    //     menu.isActive = true;
    //   }
    // },
    toggleSubmenu(title) {
      const Submenu = this.allMenus.find((m) => m.title === title);
      if (Submenu.isSubmenuActive) {
        Submenu.isSubmenuActive = false;
      } else {
        for (let i = 0; i < this.allMenus.length; i++) {
          this.allMenus[i].isSubmenuActive = false;
        }
        Submenu.isSubmenuActive = true;
      }
      // Submenu.isSubmenuActive = !Submenu.isSubmenuActive;
    },
    closeAllSubmenus() {
      for (let i = 0; i < this.allMenus.length; i++) {
        this.allMenus[i].isSubmenuActive = false;
      }
    },
    togglePinned() {
      this.isSidebarPinned = !this.isSidebarPinned;
      this.isRadioChecked = !this.isRadioChecked;
    },
    async TESTgetUserPages() {
      await this.UserStore.getUserData();

      for (const page in this.UserStore.userRolesPermissions) {
        for (const menu in this.mainMenu) {
          if (this.mainMenu[menu].id === page) {
            this.testMenu.push(this.mainMenu[menu]);
          }
        }
      }
      console.log(this.testMenu);
    },
    // setSearch(searchText) {
    //   this.search = searchText;
    // },
  },
  // getters: {
  //   getMenus() {
  //     if (this.filteredMenus.length > 0) {
  //       return this.filteredMenus;
  //     } else {
  //       return this.allMenus;
  //     }
  //   },
  // },
});
