<template>
  <div class="wrapper-kebab-menu" @click="$emit('menuOpen')">
    <div class="kebab-menu">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  // change colors (bg, hover & clicked Dynamically based on mode[light/dark])
  computed: {
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "rgb(189 188 188)";
      } else {
        return "rgb(72, 72, 72)";
      }
    },
    changeClickedColor() {
      if (this.navbarStore.darkMode) {
        return "rgb(133 130 130 / 24%)";
      } else {
        return "rgb(235, 234, 234)";
      }
    },
  },
};
</script>

<style scoped>
.wrapper-kebab-menu {
  width: 31px !important;
  height: 31px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
}
.kebab-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
}
.circle {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: gray;
  margin: 1px;
  transition: all 0.1s ease-in-out;
}
.wrapper-kebab-menu:hover .circle {
  background-color: v-bind(changeHoverColor);
}
.wrapper-kebab-menu:active {
  background-color: v-bind(changeClickedColor);
}
</style>
