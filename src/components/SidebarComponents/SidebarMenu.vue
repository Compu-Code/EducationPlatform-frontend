<template>
  <div
    class="relative pl-4 items-center flex mt-2 p-2 hover:bg-light-secondary-color rounded-r-3xl cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
    :class="{ isActive: Menu.isActive, isSubmenuActive: Menu.isSubmenuActive }"
    @click="
      sidebarStore.setActive(Menu.title);
      sidebarStore.toggleSubmenu(Menu.title);
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
      ><router-link
        :to="'' + Menu.link"
        class="text-light-text-color items-start gap-x-4 ml-2 duration-150"
        >{{ Menu.title }}</router-link
      ></span
    >
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
  <SidebarSubmenu
    v-if="Menu.isSubmenuActive && Menu.submenu && sidebarStore.isMenuOpen"
    :list="Menu"
  />
</template>

<script>
import { useSidebarStore } from "../../stores/SidebarStore";
import SidebarSubmenu from "./SidebarSubmenu.vue";
// ICONS FOR MENUS
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
// END OF ICONS

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
    SidebarSubmenu,
  },
  props: ["Menu"],
  data() {
    return {};
  },
  setup() {
    const sidebarStore = useSidebarStore();
    return { sidebarStore };
  },
};
</script>

<style scoped>
.isActive {
  /* background-color: salmon; */
}
.isSubmenuActive {
  /* background-color: seagreen; */
}
</style>
