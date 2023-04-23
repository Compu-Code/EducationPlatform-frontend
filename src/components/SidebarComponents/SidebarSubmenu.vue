<template>
  <router-link :to="{ name: submenu.name }">
    <div
      class="overflow-hidden text-ellipsis whitespace-nowrap pl-[3.2rem] gap-x-4 duration-150 items-center flex mt-2 p-2 rounded-r-3xl cursor-pointer"
      :class="
        navbarStore.darkMode
          ? 'text-dark-text-color hover:bg-dark-menu-hover'
          : 'text-light-text-color hover:bg-light-menu-hover'
      "
    >
      {{ submenu.title }}
    </div>
  </router-link>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useSidebarStore } from "../../stores/SidebarStore";
import { useNavbarStore } from "../../stores/NavbarStore";
export default {
  props: ["submenu"],
  setup() {
    const sidebarStore = useSidebarStore();
    const navbarStore = useNavbarStore();
    return { sidebarStore, navbarStore };
  },
  computed: {
    changeActiveColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433ab";
      }
    },
  },
};
</script>

<style scoped>
a.router-link-exact-active div {
  background-color: v-bind("changeActiveColor");
}
</style>
