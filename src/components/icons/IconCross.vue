<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Outline"
    viewBox="0 0 24 24"
    width="14"
    height="14"
  >
    <path
      d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"
      :fill="toggleIconColor"
    />
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

<style scoped></style>
