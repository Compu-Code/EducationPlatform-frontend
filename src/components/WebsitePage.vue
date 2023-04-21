<template>
  <!-- overlay -->
  <div
    id="overlay"
    :class="{ hidden: !NavbarStore.isLanguageMenuOpen }"
    @click="NavbarStore.toggleLanguageMenu"
  ></div>
  <TheNavbar />
  <RouterView />
</template>

<script>
import { useNavbarStore } from "../stores/NavbarStore";
import { useUserStore } from "../stores/UserStore";
export default {
  setup() {
    const NavbarStore = useNavbarStore();
    const UserStore = useUserStore();
    return { NavbarStore, UserStore };
  },
};
</script>

<style scoped>
/* overlay */
#overlay {
  position: fixed; /* Sit on top of the page content */
  /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  /* cursor: pointer; Add a pointer on hover */
  /* animation: overlay 0.5s forwards normal; */
}
/* @keyframes overlay {
  from {
    background-color: rgba(0, 0, 0, 0.2);
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
} */
</style>
