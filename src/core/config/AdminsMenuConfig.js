// you can use spacing key to make a space between lists in menu
// spacing: true,

const AdminsMenus = [
  { title: "Dashboard", link: "/Admin/Dashboard", icon: "IconDashboard" },
  { title: "Users", link: "/Users", icon: "IconUsers" },
  {
    title: "Courses",
    link: "/Courses",
    icon: "IconCourses",
  },
  {
    title: "Transactions",
    submenu: true,
    icon: "IconTransactions",
    submenuItem: [
      {
        title: "Pending",
        link: "/Transactions/pending",
        icon: "IconDashboard",
      },
      {
        title: "Completed",
        link: "/Transactions/completed",
        icon: "IconDashboard",
      },
    ],
  },
  {
    title: "Orders",
    submenu: true,
    icon: "IconOrders",
    submenuItem: [
      {
        title: "Pending",
        link: "/Orders/pending",
        icon: "IconDashboard",
      },
      {
        title: "Completed",
        link: "/Orders/completed",
        icon: "IconDashboard",
      },
    ],
  },
  { title: "Errors Log", link: "/ErrorsLog", icon: "IconErrors" },
  {
    title: "Roles",
    link: "/Roles",

    icon: "IconRoles",
  },
  {
    title: "Forms",
    link: "/FormsResponses",
    icon: "IconForms",
  },

  { title: "Rating", link: "/Rating", icon: "IconRating" },
  { title: "News & Events", link: "/News&Events", icon: "IconNews" },
  { title: "Chat", link: "/chat", icon: "IconChat" },
  { title: "Activity Log", link: "/ActivityLog", icon: "IconActivity" },
  { title: "Sponsors", link: "/Sponsors", icon: "IconSponsors" },
];

export default AdminsMenus;
