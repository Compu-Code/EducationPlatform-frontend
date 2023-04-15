<template>
  <div
    class="bg-light-primary-color h-screen duration-300 overflow-x-hidden scrollbar"
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
    <!-- TODO: change props values to pinia stores -->
    <!-- <SidebarBeginning :isMenuOpen="isMenuOpen" @isSidebarPinned="sidebarPin" />
    <SearchBox :isMenuOpen="isMenuOpen" /> -->

    <!-- sidebar header (logo , dashboard, radiobutton,search box) -->
    <SidebarHeader />

    <!-- sidebar Lists (Menus)  -->
    <ul class="pt-2">
      <!-- TODO: Make every list a router link not only the text of list -->
      <!-- TODO: put a new component inside li and its props will be Menu -->
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
import { useSidebarStore } from "../../stores/SidebarStore";
import MainMenu from "../../core/config/MainMenuConfig";
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
import SidebarHeader from "./SidebarHeader.vue";

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
  provide() {
    return {
      isMenuOpen: this.isMenuOpen,
      sidebarPin: this.sidebarPin(),
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
  width: 12px;
}

.scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px #dae6f9;
  border: solid 4px transparent;
  border-radius: 20px;
}

.scrollbar::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.2);
  border: solid 4px transparent;
  border-radius: 20px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.286);
  border-left: solid 3.4px transparent;
}
.sidebar-shadow-on-hover {
  -moz-box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
}
</style>
