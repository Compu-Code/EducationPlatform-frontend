<template>
  <button
    class="capitalize font-inter inline-flex justify-center items-center gap-[10px] border rounded-[.25rem] px-[.9375rem] py-[.3125rem]">
    <ExportIcon />
    {{ label }}
  </button>
</template>

<script>
import ExportIcon from "@/components/icons/ExportIcon.vue";
import { useNavbarStore } from "../../../stores/NavbarStore";

export default {
  components: { ExportIcon },
  // label / String [required]
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeBorderColor() {
      if (this.navbarStore.darkMode) {
        return "#91929C";
      } else {
        return "#B1B1B9";
      }
    },
    changeBorderColorOnHover() {
      if (this.navbarStore.darkMode) {
        return "#C6C7CD";
      } else {
        return "#878792";
      }
    },
    changeBgColorOnClicked() {
      if (this.navbarStore.darkMode) {
        return "#393E47";
      } else {
        return "#E0E0E0";
      }
    },
  },
};
</script>

<style scoped>
button {
  transition: all 0.2s ease-in-out;
  color: #91929c;
  border-color: v-bind(changeBorderColor);
}
button:hover {
  border-color: v-bind(changeBorderColorOnHover);
}
button:active {
  background-color: v-bind(changeBgColorOnClicked);
}
</style>
