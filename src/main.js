import { createApp, markRaw } from "vue";

//vue cookies
import VueCookies from "vue-cookies";

// pinia
import { createPinia } from "pinia";

import App from "./App.vue";
//router
import router from "./router/router";

// axios
import axios from "axios";

// trios
import { TroisJSVuePlugin } from "troisjs";

// Start PrimeVue
// import PrimeVue from "primevue/config";
//theme
// import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
// import "primevue/resources/primevue.min.css";

// PrimeVue import components
// import Password from "primevue/password";
// import Button from "primevue/button";
// import DataTable from "primevue/datatable";
// import Column from "primevue/column";
// import ColumnGroup from "primevue/columngroup"; // optional
// import Row from "primevue/row"; // optional
// End PrimeVue

import "./styles/main.css";
import TheSidebar from "./components/SidebarComponents/TheSidebar.vue";
import TheNavbar from "./components/NavbarComponents/TheNavbar.vue";

const app = createApp(App);
app.component("TheSidebar", TheSidebar).component("TheNavbar", TheNavbar);

// for PrimeVue
// app.component("Password", Password);
// app.component("Button", Button);
// app.component("DataTable", DataTable);
// app.component("Column", Column);
// app.component("ColumnGroup", ColumnGroup);
// app.component("Row", Row);

app.use(router, axios, TroisJSVuePlugin, VueCookies);
app.use(
  createPinia().use(({ store }) => {
    store.$router = markRaw(router);
  })
);
app.mount("#app");
