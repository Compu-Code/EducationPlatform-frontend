<!-- not the final design // its JUST for back button in sign up  -->
<!-- base button (normal deflated with / without border/ light + dark (mode)) -->
<template>
  <button class="flex items-center justify-center icon-deflated">
    <IconBtnarrow class="arrow mr-[0.625rem]" />
    <slot></slot>
  </button>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
import IconBtnarrow from "../../icons/IconBtnarrow.vue";

export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  components: { IconBtnarrow },
  props: ["direction", "bordered"],
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
    changeArrowDirection() {
      if (this.direction === "up") {
        return "90deg";
      } else if (this.direction === "left") {
        return "0";
      } else if (this.direction === "down") {
        return "-90deg";
      } else if (this.direction === "right") {
        return "180deg";
      }
    },
    changerBorder() {
      if (this.bordered === "true") {
        return "solid";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  color: v-bind(changeColor);
  border-width: 2px;
  border-style: v-bind(changerBorder);
  border-color: v-bind(changeColor);
  fill: v-bind(changeColor);
  border-radius: 8px;
  transition: all 0.1s;
  text-transform: capitalize;
}
button:hover {
  color: v-bind(changeHoverColor);
  border-color: v-bind(changeHoverColor);
  background-color: #2246cd1a;
  fill: v-bind(changeHoverColor);
}
button:active {
  color: v-bind(changeClickedColor);
  border-color: v-bind(changeClickedColor);
  background-color: #1433ab26;
}
.arrow {
  transform: rotate(v-bind(changeArrowDirection));
}
</style>
