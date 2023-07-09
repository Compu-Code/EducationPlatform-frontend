<template>
  <div
    class="sidebarHeader sticky top-0 pt-3 z-10 pb-2 duration-300"
    :class="[
      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
  >
    <SidebarBeginning />
    <SearchBox />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const SidebarBeginning = defineAsyncComponent(() =>
  import("./SidebarBeginning.vue")
);
const SearchBox = defineAsyncComponent(() => import("./SearchBox.vue"));

// import SidebarBeginning from "./SidebarBeginning.vue";
// import SearchBox from "./SearchBox.vue";
import { useNavbarStore } from "@/stores/NavbarStore";

export default {
  components: { SidebarBeginning, SearchBox },
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
};
</script>

<style scoped></style>
