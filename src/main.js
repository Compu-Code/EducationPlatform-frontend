import { createApp, markRaw } from "vue";
// pinia
import { createPinia } from "pinia";

import App from "./App.vue";
//router
import router from "./router/router";

// axios
import axios from "axios";

// trios
import { TroisJSVuePlugin } from "troisjs";

// bootstrap
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./styles/main.css";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

const app = createApp(App);
app.component("TheSidebar", TheSidebar).component("TheNavbar", TheNavbar);

app.use(router, axios, TroisJSVuePlugin, BootstrapVue, BootstrapVueIcons);
app.use(
  createPinia().use(({ store }) => {
    store.$router = markRaw(router);
  })
);
app.mount("#app");
