<template>
  <ul v-show="list.isSubmenuActive">
    <li
      v-for="submenu in list.submenuItem"
      :key="submenu.title"
      class="hover:bg-light-secondary-color px-5 rounded-r-3xl cursor-pointer"
    >
      <!-- :class="{ hidden: !sidebarStore.isMenuOpen }"  inside span behind the class= test bas .... -->
      <div class="text-base font-medium duration-300">
        <router-link
          :to="'' + submenu.link"
          class="text-light-text-color items-start gap-x-4 ml-2 duration-150"
          >{{ submenu.title }}</router-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { useSidebarStore } from "../../stores/SidebarStore";
export default {
  props: ["list"],
  setup() {
    const sidebarStore = useSidebarStore();
    return { sidebarStore };
  },
};
</script>

<style scoped></style>
