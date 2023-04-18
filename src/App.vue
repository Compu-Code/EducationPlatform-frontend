<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

export default {
  components: {
    TheSidebar,
    TheNavbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import "./styles/variables.css";
</style>
