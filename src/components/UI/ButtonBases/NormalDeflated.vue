<!-- base button (normal deflated with border/ light + dark (mode)) -->
<template>
  <button>
    <slot></slot>
  </button>
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
    changeColor() {
      if (this.navbarStore.darkMode) {
        return "#6188ff";
      } else {
        return "#355CEF";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246CD";
      }
    },
    changeClickedColor() {
      if (this.navbarStore.darkMode) {
        return "#3858bb";
      } else {
        return "#1433AB";
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  color: v-bind(changeColor);
  border: 2px solid v-bind(changeColor);
  border-radius: 8px;
  transition: all 0.1s;
  text-transform: capitalize;
}
button:hover {
  border-color: v-bind(changeHoverColor);
  color: v-bind(changeHoverColor);
  background-color: #2246cd1a;
}
button:active {
  border-color: v-bind(changeClickedColor);
  color: v-bind(changeClickedColor);
  background-color: #1433ab26;
}
</style>
