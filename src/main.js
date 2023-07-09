import { createApp, markRaw } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import { createPinia } from "pinia";
import router from "./router";
import axios from "axios";

// TODO: install moment js

// navbar navbar sidebar
import "@/assets/styles/main.css";
// import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
// import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

const app = createApp(App);
// app.component("TheSidebar", TheSidebar).component("TheNavbar", TheNavbar);

app.use(router, axios, VueCookies);
app.use(
  createPinia().use(({ store }) => {
    store.$router = markRaw(router);
  })
);
// router.isReady().then(function () {
// });
app.mount("#app");
