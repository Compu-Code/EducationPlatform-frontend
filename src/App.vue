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
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop().split(";").shift();
      }
    },
  },
  // to import token from cookies and put in AuthStore when app created
  created() {
    console.log(this.getCookie("JWT"));
    this.AuthStore.userToken = this.getCookie("JWT");
    // const reg = new RegExp("\\b" + null + "\\b");
    // if (document.cookie.split("#")[1] && !reg.test(document.cookie)) {
    //   let token = document.cookie.split("#")[1];
    //   if (token.length > 1) {
    //     this.AuthStore.userToken = token;
    //   } else {
    //     this.AuthStore.userToken = null;
    //   }
    // }
  },
  mounted() {},
  // to get user data after reload
};
</script>

<style>
@import "./styles/main.css";
@import "./styles/variables.css/";

* {
  font-family: "Inter";
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  /* background-color: red; */
  /* width: 100%;
  height: 100%; */
  /* min-width: 100%; */
  /* min-height: 100%; */
  /* margin: 0; */
  /* padding: 0; */
}
</style>
