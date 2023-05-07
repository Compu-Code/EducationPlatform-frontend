<!-- base button (normal filled / light + dark (mode)) -->
<template>
  <button class="normal-filled" :disabled="isDisabled">
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
  props: ["isDisabled"],
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
  background: v-bind(changeColor);
  border-radius: 8px;
  color: white;
  transition: all 0.1s;
  text-transform: capitalize;
}
button:hover {
  background: v-bind(changeHoverColor);
}
button:active {
  background: v-bind(changeClickedColor);
}
button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}
</style>
