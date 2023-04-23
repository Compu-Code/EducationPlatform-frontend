<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    tag="i"
    class="v-icon notranslate v-theme--light v-icon--size-default nav-group-arrow iconify iconify--mdi"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    style=""
  >
    <path
      :fill="toggleIconColor"
      d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
    ></path>
  </svg>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";

export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    toggleIconColor() {
      if (this.navbarStore.darkMode) {
        return "#DAE6F9";
      } else {
        return "#01041B";
      }
    },
  },
};
</script>
