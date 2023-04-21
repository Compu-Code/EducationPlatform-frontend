<template>
  <div class="flex relative">
    <div class="z-10 absolute">
      <TheSidebar />
    </div>
    <div class="layout-page flex flex-col absolute z-0 right-0 duration-300">
      <NavbarRightside class="bg-dark-primary-color" />
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavbarRightside from "./NavbarComponents/NavbarRightside.vue";
import { useSidebarStore } from "../stores/SidebarStore";

export default {
  components: { NavbarRightside },
  setup() {
    const SidebarStore = useSidebarStore();
    return { SidebarStore };
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
