import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/router";
import axios from "axios";
import { TroisJSVuePlugin } from "troisjs";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify();

// const vuetify = createVuetify({
//   components,
//   directives,
// });

import "./styles/main.css";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

const app = createApp(App);
app.component("TheSidebar", TheSidebar).component("TheNavbar", TheNavbar);

app.use(router, axios, TroisJSVuePlugin);
app.use(
  createPinia().use(({ store }) => {
    store.$router = markRaw(router);
  })
);
app.mount("#app");
