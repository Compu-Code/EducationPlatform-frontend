<template>
  <section
    class="flex flex-row items-center"
    :class="{ 'text-dark-text-color': navbarStore.darkMode }"
  >
    <div class="left-side-text">left side</div>
    <div class="side-menu" @click="sidebarStore.openSidebar">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- <div class="font-bold text-2xl">Logo</div>
    <div
      class="divider mx-3 border"
      :class="[
        navbarStore.darkMode
          ? 'border-dark-text-color'
          : 'border-light-text-color',
      ]"
    ></div>
    <ul class="flex flex-nowrap">
      <li
        v-for="Menu in navbarStore.navbarMenus"
        class="inline-flex navMenu pr-8"
      >
        <RouterLink :to="'' + Menu.link">{{ Menu.title }}</RouterLink>
      </li>
    </ul> -->
  </section>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
import { useSidebarStore } from "../../../stores/SidebarStore";

export default {
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    const sidebarStore = useSidebarStore();
    return { navbarStore, sidebarStore };
  },
  computed: {
    changeActiveColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433ab";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246cd";
      }
    },
    changeBurgerMenuColor() {
      if (this.navbarStore.darkMode) {
        return "#f0f4ff";
      } else {
        return "#01041b";
      }
    },
  },
};
</script>

<style scoped>
.divider {
  width: 31px;
  height: 0px;
  transform: rotate(90deg);
}

a.router-link-active {
  color: v-bind("changeActiveColor");
}

a:hover {
  color: v-bind("changeHoverColor");
}
.side-menu {
  cursor: pointer;
}
.side-menu:hover {
}
.side-menu:active {
}
.side-menu div {
  width: 20px;
  border-bottom: 2.5px solid v-bind(changeBurgerMenuColor);
  margin: 3px 0;
  border-radius: 5px;
}
@media screen and (max-width: 1280px) {
  .left-side-text {
    display: none;
  }
}
@media screen and (min-width: 1280px) {
  .side-menu {
    display: none;
  }
}
</style>
