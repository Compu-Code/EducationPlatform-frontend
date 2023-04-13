<template>
  <div
    class="bg-light-primary-color h-screen pt-6 duration-300 overflow-x-hidden scrollbar"
    :class="[
      {
        'sidebar-shadow-on-hover':
          isMenuOpen === true && isSidebarPinned === false,
      },
      OpenMenuWidth,
    ]"
    @mouseover="toggleOpen('over')"
    @mouseleave="toggleOpen('leave')"
  >
    <!-- sidebar header (logo , dashboard, radiobutton) -->
    <SidebarHeader :isMenuOpen="isMenuOpen" @isSidebarPinned="sidebarPin" />

    <!-- sidebar search box  -->
    <SearchBox :isMenuOpen="isMenuOpen" />

    <!-- sidebar Lists (Menus)  -->
    <ul class="pt-2">
      <!-- TODO: Make every list a router link not only the text of list -->
      <li
        v-for="Menu in Menus"
        class="duration-300"
        :class="Menu.spacing ? 'mt-9' : 'mt-2'"
        @click="
          testRoute(Menu.link);
          toggleSubmenu();
        "
      >
        <div
          class="pl-4 items-center flex mt-2 p-2 hover:bg-light-secondary-color rounded-r-3xl cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
        >
          <span class="text-2xl block float-left ml-2 duration-300">
            <component :is="Menu.icon"></component
          ></span>
          <span
            class="text-base font-medium duration-300"
            :class="{ hidden: !isMenuOpen }"
            ><router-link
              tag="list"
              :to="'' + Menu.link"
              class="text-light-text-color items-start gap-x-4 ml-2 duration-150"
              >{{ Menu.title }}</router-link
            ></span
          >
          <span v-if="Menu.submenu && isMenuOpen" class="duration-150">
            <IconArrow
              :class="{ 'rotate-90': isSubmenuOpen && isMenuOpen }"
              class="duration-150 self-end"
            />
          </span>
        </div>
        <ul v-if="isSubmenuOpen && Menu.submenu && isMenuOpen">
          <template v-for="Menu in Menus">
            <li
              v-for="submenu in Menu.submenuItem"
              class="hover:bg-light-secondary-color px-5 rounded-r-3xl cursor-pointer"
            >
              {{ submenu.title }}
            </li>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MainMenu from "../../core/config/MainMenuConfig";
import SearchBox from "./SearchBox.vue";
import SidebarHeader from "./SidebarHeader.vue";
import IconArrow from "../icons/IconArrow.vue";
import IconDoubleArrow from "../icons/IconDarrow.vue";
import IconDashboard from "../icons/IconDashboard.vue";
import IconUsers from "../icons/IconUsers.vue";
import IconCourses from "../icons/IconCourses.vue";
import IconTransactions from "../icons/IconTransactions.vue";
import IconOrders from "../icons/IconOrders.vue";
import IconErrors from "../icons/IconErrors.vue";
import IconForms from "../icons/IconForms.vue";
import IconRoles from "../icons/IconRoles.vue";
import IconRating from "../icons/IconRating.vue";
import IconNews from "../icons/IconNews.vue";
import IconChat from "../icons/IconChat.vue";
import IconActivity from "../icons/IconActivity.vue";
import IconSponsors from "../icons/IconSponsors.vue";
import IconMycourses from "../icons/IconMycourses.vue";
import IconCalender from "../icons/IconCalender.vue";
import IconConfirm from "../icons/IconConfirm.vue";
import IconHistory from "../icons/Iconhistory.vue";
import IconStudents from "../icons/IconStudents.vue";

export default {
  components: {
    IconDoubleArrow,
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
    MainMenu,
    SearchBox,
    SidebarHeader,
  },
  data() {
    return {
      isMenuOpen: false,
      isSubmenuOpen: false,
      isSidebarPinned: null,
      Menus: MainMenu,
    };
  },
  computed: {
    OpenMenuWidth() {
      if (this.isMenuOpen) {
        return "w-64";
      } else {
        return "w-16";
      }
    },
  },
  methods: {
    sidebarPin(pinned) {
      this.isSidebarPinned = pinned;
      this.isMenuOpen = pinned;
    },

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
    testRoute(link) {
      this.$router.push(link);
    },
    toggleSubmenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen;
    },
  },
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 5px;
  /* height: 6px; */
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #dae6f9;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #c1bfbf;
  border-radius: 100vh;
  /* border: 3px solid #f6f7ed; */
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  width: 12px;

  background: #d7d5d5;
}

.sidebar-shadow-on-hover {
  -moz-box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
}
</style>
