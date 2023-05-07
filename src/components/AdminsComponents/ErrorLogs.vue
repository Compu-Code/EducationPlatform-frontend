<template>
  <main class="error-logs h-screen mt-6">
    <div class="filter w-full border-2 border-black h-20">
      <div>Filter</div>
      <div>
        <v-btn>gg</v-btn>
      </div>
    </div>
    <div></div>
  </main>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore.js";
import { useSidebarStore } from "../../stores/SidebarStore";
export default {
  components: {},
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    return { navbarStore, SidebarStore };
  },
};
</script>

<style scoped></style>
