export default [
  // Admin Dashboard
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import("@/views/admins/Dashboard.vue"),
    redirect: "/admin/dashboard/home",
    meta: { requiresAuth: true },
    children: [
      // Admin Dashboard (home)
      {
        path: "home",
        name: "admin-dashboard-home",
        component: () => import("@/views/admins/home/DashboardHome.vue"),
        meta: { requiresAuth: true },
      },
      // Users List
      {
        path: "users",
        name: "admin-users-list",
        component: () => import("@/views/admins/users/List.vue"),
        meta: { requiresAuth: true },
      },
      // User Details
      {
        path: "users/:userID/details",
        name: "admin-user-details",
        component: () => import("@/views/admins/users/Details.vue"),
        meta: { requiresAuth: true },
        props: true,
      },
      // Courses List
      {
        path: "courses",
        name: "admin-courses-list",
        component: () => import("@/views/admins/courses/List.vue"),
        meta: { requiresAuth: true },
      },
      // Transactions (pending + completed)
      {
        path: "transactions",
        name: "admin-transactions",
        meta: { requiresAuth: true },
        children: [
          // Pending
          {
            path: "pending",
            name: "admin-pending-transactions",
            component: () =>
              import("@/views/admins/transactions/pending/List.vue"),
            meta: { requiresAuth: true },
          },
          // Completed
          {
            path: "completed",
            name: "admin-completed-transactions",
            component: () =>
              import("@/views/admins/transactions/completed/List.vue"),
            meta: { requiresAuth: true },
          },
        ],
      },
      // Orders (pending + completed)
      {
        path: "orders",
        name: "admin-orders",
        meta: { requiresAuth: true },
        children: [
          // Pending
          {
            path: "pending",
            name: "admin-pending-orders",
            component: () => import("@/views/admins/orders/pending/List.vue"),
            meta: { requiresAuth: true },
          },
          // Completed
          {
            path: "completed",
            name: "admin-completed-orders",
            component: () => import("@/views/admins/orders/completed/List.vue"),
            meta: { requiresAuth: true },
          },
        ],
      },
      // Error Logs
      {
        path: "error-logs",
        name: "admin-error-logs-list",
        component: () => import("@/views/admins/error-logs/List.vue"),
        meta: { requiresAuth: true },
      },
      // Error Details
      {
        path: "error-logs/:errorID/details",
        name: "admin-error-details",
        component: () => import("@/views/admins/error-logs/Details.vue"),
        meta: { requiresAuth: true },
        props: true,
      },
      // Forms (contact us + volunteer with us)
      {
        path: "forms",
        name: "admin-forms",
        meta: { requiresAuth: true },
        children: [
          // Contact Us List
          {
            path: "contact-us",
            name: "admin-contact-us-list",
            component: () => import("@/views/admins/contact-us/List.vue"),
            meta: { requiresAuth: true },
          },
          // Contact Us Details
          {
            path: "contact-us/:contactUsID/details",
            name: "admin-contact-us-details",
            component: () => import("@/views/admins/contact-us/Details.vue"),
            meta: { requiresAuth: true },
            props: true,
          },
          // Volunteer With Us List
          {
            path: "volunteer-with-us",
            name: "admin-volunteer-with-us-list",
            component: () =>
              import("@/views/admins/volunteer-with-us/List.vue"),
            meta: { requiresAuth: true },
          },
          // Volunteer With Us Details
          {
            path: "volunteer-with-us/:volunteerID/details",
            name: "admin-volunteer-with-us-details",
            component: () =>
              import("@/views/admins/volunteer-with-us/Details.vue"),
            meta: { requiresAuth: true },
            props: true,
          },
        ],
      },
      // Access Management (roles + permissions)
      {
        path: "access-management",
        name: "admin-access-management",
        meta: { requiresAuth: true },
        children: [
          // Roles List
          {
            path: "roles",
            name: "admin-roles-list",
            component: () =>
              import("@/views/admins/access-management/roles/List.vue"),
            meta: { requiresAuth: true },
          },
          // Role Details
          {
            path: "roles/:roleID/details",
            name: "admin-role-details",
            component: () =>
              import("@/views/admins/access-management/roles/Details.vue"),
            meta: { requiresAuth: true },
            props: true,
          },
          // Permissions List
          {
            path: "permissions",
            name: "admin-permissions-list",
            component: () =>
              import("@/views/admins/access-management/permissions/List.vue"),
            meta: { requiresAuth: true },
          },
          // Permissions Details
          {
            path: "permissions/:permissionID/details",
            name: "admin-permission-details",
            component: () =>
              import("@/views/admins/access-management/permissions/Details.vue"),
            meta: { requiresAuth: true },
            props: true,
          },
        ],
      },
      // News List
      {
        path: "news-events",
        name: "admin-news-list",
        component: () => import("@/views/admins/news/List.vue"),
        meta: { requiresAuth: true },
      },
      // News Details
      {
        path: "news-events/:newsID/details",
        name: "admin-news-details",
        component: () => import("@/views/admins/news/Details.vue"),
        meta: { requiresAuth: true },
        props: true,
      },
      // Ratings List
      {
        path: "ratings",
        name: "admin-ratings-list",
        component: () => import("@/views/admins/ratings/List.vue"),
        meta: { requiresAuth: true },
      },
      // Rating Details
      {
        path: "ratings/:rateID/details",
        name: "admin-rating-details",
        component: () => import("@/views/admins/ratings/Details.vue"),
        meta: { requiresAuth: true },
        props: true,
      },
      // Chat (support)
      {
        path: "support",
        name: "admin-support",
        component: () => import("@/views/admins/chat/chat.vue"),
        meta: { requiresAuth: true },
      },
      // Activity logs
      {
        path: "activity-logs",
        name: "admin-activity-logs-list",
        component: () => import("@/views/admins/activity-logs/List.vue"),
        meta: { requiresAuth: true },
      },
      // Activity Details
      {
        path: "activity-logs/:activityID/details",
        name: "admin-activity-details",
        component: () => import("@/views/admins/activity-logs/Details.vue"),
        meta: { requiresAuth: true },
        props: true,
      },
      // Sponsors List
      {
        path: "sponsors",
        name: "admin-sponsors-list",
        component: () => import("@/views/admins/sponsors/List.vue"),
        meta: { requiresAuth: true },
      },
      // Sponsor Details
      {
        path: "sponsors/:sponsorID/details",
        name: "admin-sponsor-details",
        component: () => import("@/views/admins/sponsors/Details.vue"),
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
];
