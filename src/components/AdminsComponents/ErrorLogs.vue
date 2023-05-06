<template>
  <main class="error-logs h-screen mt-6">
    <div class="filter w-full border-2 border-black h-20">
      <div>Filter</div>
      <div></div>
    </div>

    <v-select
      label="Select"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      variant="outlined"
    ></v-select>
  </main>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore.js";
import { useSidebarStore } from "../../stores/SidebarStore";
export default {
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    return { navbarStore, SidebarStore };
  },
};
</script>

<style scoped></style>
