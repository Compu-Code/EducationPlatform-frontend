import { createApp, markRaw } from "vue";
import App from "./App.vue";

//vue cookies
import VueCookies from "vue-cookies";

// pinia
import { createPinia } from "pinia";

//router
import router from "./router/router";

// axios
import axios from "axios";

// trios
import { TroisJSVuePlugin } from "troisjs";

// navbar navbar sidebar
import "./styles/main.css";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

const app = createApp(App);
app.component("TheSidebar", TheSidebar).component("TheNavbar", TheNavbar);

app.use(router, axios, TroisJSVuePlugin, VueCookies);
app.use(
  createPinia().use(({ store }) => {
    store.$router = markRaw(router);
  })
);
app.mount("#app");
