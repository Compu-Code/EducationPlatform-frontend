<template>
  <RouterView />
</template>

<script>

// import { useAuthStore } from "@/stores/AuthStore";
// import { useUserStore } from "@/stores/UserStore";
// import { useNavbarStore } from "@/stores/NavbarStore";
import { storeToRefs } from "pinia";
// import VueCookies from "vue-cookies";
// import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
// import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

export default {
  // setup() {
  //   const navbarStore = useNavbarStore();
  //   const AuthStore = useAuthStore();
  //   const UserStore = useUserStore();
  //   const { darkMode } = storeToRefs(navbarStore);
  //   return { AuthStore, UserStore, navbarStore, darkMode };
  // },
  methods: {
    // getCookie(name) {
    //   const value = `; ${document.cookie}`;
    //   const parts = value.split(`; ${name}=`);
    //   if (parts.length === 2) {
    //     return parts.pop().split(";").shift();
    //   }
    // },
  },
  // to import token from cookies and put in AuthStore when app created
  created() {
    // this.$cookies.set("token", "GH1.1.1689020474.1484362313", "30MIN");
    // console.log("from cooikes pack :" + this.$cookies);
    // console.log(getCookie("userJWT"));
    // document.cookie.length;
    // document.cookie.replace(getCookie("JWT"), null);
    // console.log(getCookie("JWT"));
    // document.cookie.length;
    // this.AuthStore.userToken = getCookie("userJWT");
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
  // mounted() {},
  // to get user data after reload
  watch: {
    darkMode(newValue, oldValue) {
      document.body.classList.add("h-screen", "duration-300");
      if (newValue) {
        document.body.classList.remove("bg-light-primary-color");
        document.body.classList.add("bg-dark-primary-color");
      } else if (newValue === false) {
        document.body.classList.remove("bg-dark-primary-color");
        document.body.classList.add("bg-light-primary-color");
      }
    },
  },
  mounted() {
    if (this.darkMode) {
      document.body.classList.remove("bg-light-primary-color");
      document.body.classList.add("bg-dark-primary-color");
    } else {
      document.body.classList.remove("bg-dark-primary-color");
      document.body.classList.add("bg-light-primary-color");
    }
  },
};
</script>

<style>
@import "@/assets/styles/main.css";
@import "@/assets/styles/variables.css/";

* {
  font-family: "Inter";
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
