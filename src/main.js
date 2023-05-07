import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";

import App from "./App.vue";
import router from "./router/router";
import axios from "axios";
import { TroisJSVuePlugin } from "troisjs";

import "./styles/main.css";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

const app = createApp(App);
app.component("TheSidebar", TheSidebar).component("TheNavbar", TheNavbar);

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({ components, directives });

app.use(router, axios, TroisJSVuePlugin, vuetify);
app.use(
  createPinia().use(({ store }) => {
    store.$router = markRaw(router);
  })
);
app.mount("#app");
