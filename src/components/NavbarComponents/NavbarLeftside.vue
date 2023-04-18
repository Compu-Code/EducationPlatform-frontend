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
        <!-- :class="{
            'active-light': Menu.isActive && !navbarStore.darkMode,
            'active-dark': Menu.isActive && navbarStore.darkMode,
          }" -->
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
};
</script>

<style scoped>
/* .active-light {
  
} */
/* .active-dark {
  background: linear-gradient(104.06deg, var(--gradient-dark-mode));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
} */
.divider {
  width: 31px;
  height: 0px;
  transform: rotate(90deg);
}

a.router-link-active {
  color: #355cef;
}
a:hover {
  color: #2246cd;
}
</style>
