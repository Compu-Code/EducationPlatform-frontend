<template>
  <div class="flex relative">
    <div class="z-10 absolute">
      <TheSidebar />
    </div>
    <div
      class="layout-page flex flex-col absolute z-0 right-0 duration-300 px-8"
      :class="[
        NavbarStore.darkMode
          ? 'bg-dark-primary-color'
          : 'bg-light-primary-color',
      ]"
    >
      <DashboardNavbar />
      <!-- <NavbarRightside class="bg-dark-primary-color" /> -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import DashboardNavbar from "./DashboardComponents/Navbar/DashboardNavbar.vue";
import TheSidebar from "./SidebarComponents/TheSidebar.vue";
import { useSidebarStore } from "../stores/SidebarStore";
import { useNavbarStore } from "../stores/NavbarStore";

export default {
  components: { TheSidebar, DashboardNavbar },
  setup() {
    const SidebarStore = useSidebarStore();
    const NavbarStore = useNavbarStore();
    return { SidebarStore, NavbarStore };
  },
  methods: {
    getSidebarWidth() {
      if (this.SidebarStore.isMenuOpen && this.SidebarStore.isSidebarPinned) {
        return "16rem";
      } else {
        return "4rem";
      }
    },
  },
};
</script>

<style scoped>
.layout-page {
  width: calc(100% - v-bind(getSidebarWidth()));
}
</style>
