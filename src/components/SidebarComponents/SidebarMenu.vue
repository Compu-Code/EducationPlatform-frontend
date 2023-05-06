<template>
  <RouterLink v-if="!Menu.submenu" :to="{ name: Menu.name }">
    <div
      class="relative pl-4 items-center flex mt-2 p-2 rounded-r-3xl cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
      :class="[
        {
          isSubmenuActive: Menu.isSubmenuActive,
        },
        navbarStore.darkMode
          ? 'hover:bg-dark-menu-hover'
          : 'hover:bg-light-menu-hover',
      ]"
      @click="
        sidebarStore.closeAllSubmenus();
        sidebarStore.closeSidebar();
      "
    >
      <!-- Menu Icon -->
      <span class="text-2xl block float-left ml-2 duration-300">
        <component :is="Menu.icon"></component>
      </span>

      <!-- Menu Title -->
      <span
        class="text-base font-medium duration-300"
        :class="{ hidden: !sidebarStore.isMenuOpen }"
      >
        <button
          class="items-start gap-x-4 ml-2 duration-150"
          :class="[
            navbarStore.darkMode
              ? 'text-dark-text-color'
              : 'text-light-text-color',
          ]"
        >
          {{ Menu.title }}
        </button>
      </span>
      <!-- Menu Submenu // if have -->
      <span
        v-if="Menu.submenu && sidebarStore.isMenuOpen"
        class="duration-150 absolute right-4"
      >
        <IconArrow
          :class="{
            'rotate-90': Menu.isSubmenuActive && sidebarStore.isMenuOpen,
          }"
          class="duration-150 self-end"
        />
      </span>
    </div>
  </RouterLink>

  <div
    v-else-if="Menu.submenu"
    class="relative pl-4 items-center flex mt-2 p-2 rounded-r-3xl cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
    :class="[
      {
        isSubmenuActive: Menu.isSubmenuActive,
      },
      navbarStore.darkMode
        ? 'hover:bg-dark-menu-hover'
        : 'hover:bg-light-menu-hover',
    ]"
    @click="sidebarStore.toggleSubmenu(Menu.title)"
  >
    <!-- Menu Icon -->
    <span class="text-2xl block float-left ml-2 duration-300">
      <component :is="Menu.icon"></component>
    </span>

    <!-- Menu Title -->
    <span
      class="text-base font-medium duration-300"
      :class="{ hidden: !sidebarStore.isMenuOpen }"
    >
      <button
        class="items-start gap-x-4 ml-2 duration-150"
        :class="[
          navbarStore.darkMode
            ? 'text-dark-text-color'
            : 'text-light-text-color',
        ]"
      >
        {{ Menu.title }}
      </button>
    </span>
    <!-- Menu Submenu // if have -->
    <span
      v-if="Menu.submenu && sidebarStore.isMenuOpen"
      class="duration-150 absolute right-4"
    >
      <IconArrow
        :class="{
          'rotate-90': Menu.isSubmenuActive && sidebarStore.isMenuOpen,
        }"
        class="duration-150 self-end"
      />
    </span>
  </div>

  <!-- Submenu -->
  <transition
    name="submenu"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <ul
      v-show="Menu.isSubmenuActive && Menu.submenu && sidebarStore.isMenuOpen"
    >
      <li v-for="submenu in Menu.submenuItem" :key="submenu.name">
        <SidebarSubmenu :submenu="submenu" @click="sidebarStore.closeSidebar" />
      </li>
    </ul>
  </transition>
</template>

<script>
import { defineAsyncComponent } from "vue";

const SidebarSubmenu = defineAsyncComponent(() =>
  import("./SidebarSubmenu.vue")
);
const IconDashboard = defineAsyncComponent(() =>
  import("../icons/IconDashboard.vue")
);
const IconArrow = defineAsyncComponent(() => import("../icons/IconArrow.vue"));
const IconUsers = defineAsyncComponent(() => import("../icons/IconUsers.vue"));
const IconCourses = defineAsyncComponent(() =>
  import("../icons/IconCourses.vue")
);
const IconTransactions = defineAsyncComponent(() =>
  import("../icons/IconTransactions.vue")
);
const IconOrders = defineAsyncComponent(() =>
  import("../icons/IconOrders.vue")
);
const IconErrors = defineAsyncComponent(() =>
  import("../icons/IconErrors.vue")
);
const IconForms = defineAsyncComponent(() => import("../icons/IconForms.vue"));
const IconRoles = defineAsyncComponent(() => import("../icons/IconRoles.vue"));
const IconRating = defineAsyncComponent(() =>
  import("../icons/IconRating.vue")
);
const IconNews = defineAsyncComponent(() => import("../icons/IconNews.vue"));
const IconChat = defineAsyncComponent(() => import("../icons/IconChat.vue"));
const IconActivity = defineAsyncComponent(() =>
  import("../icons/IconActivity.vue")
);
const IconSponsors = defineAsyncComponent(() =>
  import("../icons/IconSponsors.vue")
);
const IconMycourses = defineAsyncComponent(() =>
  import("../icons/IconMycourses.vue")
);
const IconCalender = defineAsyncComponent(() =>
  import("../icons/IconCalender.vue")
);
const IconConfirm = defineAsyncComponent(() =>
  import("../icons/IconConfirm.vue")
);
const IconHistory = defineAsyncComponent(() =>
  import("../icons/IconHistory.vue")
);
const IconStudents = defineAsyncComponent(() =>
  import("../icons/IconStudents.vue")
);

import { useSidebarStore } from "../../stores/SidebarStore";
import { useNavbarStore } from "../../stores/NavbarStore";
// import SidebarSubmenu from "./SidebarSubmenu.vue";
// ICONS FOR MENUS
// import IconArrow from "../icons/IconArrow.vue";
// import IconDashboard from "../icons/IconDashboard.vue";
// import IconUsers from "../icons/IconUsers.vue";
// import IconCourses from "../icons/IconCourses.vue";
// import IconTransactions from "../icons/IconTransactions.vue";
// import IconOrders from "../icons/IconOrders.vue";
// import IconErrors from "../icons/IconErrors.vue";
// import IconForms from "../icons/IconForms.vue";
// import IconRoles from "../icons/IconRoles.vue";
// import IconRating from "../icons/IconRating.vue";
// import IconNews from "../icons/IconNews.vue";
// import IconChat from "../icons/IconChat.vue";
// import IconActivity from "../icons/IconActivity.vue";
// import IconSponsors from "../icons/IconSponsors.vue";
// import IconMycourses from "../icons/IconMycourses.vue";
// import IconCalender from "../icons/IconCalender.vue";
// import IconConfirm from "../icons/IconConfirm.vue";
// import IconHistory from "../icons/IconHistory.vue";
// import IconStudents from "../icons/IconStudents.vue";
// END OF ICONS

export default {
  components: {
    IconDashboard,
    IconArrow,
    IconUsers,
    IconCourses,
    IconTransactions,
    IconOrders,
    IconErrors,
    IconForms,
    IconRating,
    IconNews,
    IconRoles,
    IconChat,
    IconActivity,
    IconSponsors,
    IconMycourses,
    IconCalender,
    IconConfirm,
    IconHistory,
    IconStudents,
    SidebarSubmenu,
  },
  props: ["Menu"],
  data() {
    return {};
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const navbarStore = useNavbarStore();
    return { sidebarStore, navbarStore };
  },
  computed: {
    changeNormalColor() {
      if (this.navbarStore.darkMode) {
        return "#6188ff";
      } else {
        return "#355cef";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246cd";
      }
    },
    changeClickedColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433ab";
      }
    },
  },
  methods: {
    // for submenu animation
    enter(el) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },
    // for submenu animation
  },
};
</script>

<style scoped>
a.router-link-exact-active div {
  background-color: v-bind(changeNormalColor);
  transition: 0.1s all ease;
}
a.router-link-exact-active div:hover {
  background-color: v-bind(changeHoverColor);
}
a.router-link-exact-active div:active {
  background-color: v-bind(changeClickedColor);
}
/* for submenu animation */
.submenu-enter-active,
.submenu-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
</style>
