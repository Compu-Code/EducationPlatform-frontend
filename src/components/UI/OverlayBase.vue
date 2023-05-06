<template>
  <!-- <transition name="overlay-trans"> -->
  <div id="overlay" class="z-10"></div>
  <!-- </transition> -->
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";
export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeOverlayColor() {
      if (this.navbarStore.darkMode) {
        return "#01041B";
      } else {
        return "#F0F4FF";
      }
    },
  },
};
</script>

<style scoped>
#overlay {
  position: fixed;
  background-color: v-bind(changeOverlayColor);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
/* .overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 4s ease-in-out;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
} */
</style>
