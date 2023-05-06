<template>
  <main class=""></main>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";
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
