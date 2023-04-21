<template>
  <RouterView />
</template>

<script>
import { useAuthStore } from "../src/stores/AuthStore";
import { useUserStore } from "./stores/UserStore";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

export default {
  components: {
    TheSidebar,
    TheNavbar,
  },
  setup() {
    const AuthStore = useAuthStore();
    const UserStore = useUserStore();
    return { AuthStore, UserStore };
  },
  // to import token from cookies and put in AuthStore when app created
  created() {
    const reg = new RegExp("\\b" + null + "\\b");
    if (document.cookie.split("#")[1] && !reg.test(document.cookie)) {
      let token = document.cookie.split("#")[1];
      if (token.length > 1) {
        this.AuthStore.userToken = token;
      } else {
        this.AuthStore.userToken = null;
      }
    }
  },
  mounted() {},
  // to get user data after reload
};
</script>

<style>
@import "./styles/main.css";
@import "./styles/variables.css/";
</style>
