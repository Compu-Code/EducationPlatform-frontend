<template>
  <Header />
  <RouterView
    :class="
      NavbarStore.darkMode ? 'text-dark-text-color' : 'text-light-text-color'
    "
  />
</template>

<script>
import { useNavbarStore } from "@/stores/NavbarStore";
import { useUserStore } from "@/stores/UserStore";
import Header from "@/components/layout/public/Header.vue";
export default {
  setup() {
    const NavbarStore = useNavbarStore();
    const UserStore = useUserStore();
    return { NavbarStore, UserStore };
  },
  components: { Header },
};
</script>
