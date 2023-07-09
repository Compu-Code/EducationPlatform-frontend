<template>
  <div class="flex relative">
    <div class="z-10 absolute">
      <TheSidebar />
    </div>
    <div
      class="layout-page flex flex-col absolute z-0 right-0 duration-300"
      :class="[
        NavbarStore.darkMode
          ? 'bg-dark-primary-color'
          : 'bg-light-primary-color',
      ]"
    >
      <DashboardNavbar class="z-10" />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const DashboardNavbar = defineAsyncComponent(() =>
  import("@/components/layout/dashboard/navbar/DashboardNavbar.vue")
);
const TheSidebar = defineAsyncComponent(() =>
  import("@/components/layout/dashboard/sidebar/TheSidebar.vue")
);

// import DashboardNavbar from "./DashboardComponents/Navbar/DashboardNavbar.vue";
// import TheSidebar from "./SidebarComponents/TheSidebar.vue";
import { useSidebarStore } from "@/stores/SidebarStore";
import { useNavbarStore } from "@/stores/NavbarStore";
// import { useAuthStore } from "../stores/AuthStore";

export default {
  components: { TheSidebar, DashboardNavbar },
  setup() {
    const SidebarStore = useSidebarStore();
    const NavbarStore = useNavbarStore();
    // const authStore = useAuthStore();
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
  // mounted() {
  //   document.title = "Taalemna Dashboard";
  // },
  // unmounted() {
  //   document.title = "Taalemna";
  // },
};
</script>

<style scoped>
.layout-page {
  width: calc(100% - v-bind(getSidebarWidth()));
  padding-left: 32px;
  padding-right: 32px;
}
@media screen and (max-width: 1280px) {
  .layout-page {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }
}
</style>
