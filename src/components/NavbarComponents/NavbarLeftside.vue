<template>
  <section
    class="flex flex-row items-center"
    :class="{ 'text-dark-text-color': navbarStore.darkMode }"
  >
    <div class="font-bold text-2xl">Logo</div>
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
    </ul>
  </section>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";

export default {
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
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
</style>
