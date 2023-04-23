<template>
  <section class="pl-4 relative flex">
    <div class="inline-flex">
      <IconLogo class="cursor-pointer text-4xl float-left block mr-2" />
      <h1
        class="origin-left font-medium duration-300 text-lg pt-1"
        :class="[
          { 'scale-0': !sidebarStore.isMenuOpen },
          navbarStore.darkMode
            ? 'text-dark-text-color'
            : 'text-light-text-color',
        ]"
      >
        Dashboard
      </h1>
    </div>
    <span
      class="absolute right-3 top-1"
      :class="{ hidden: !sidebarStore.isMenuOpen }"
    >
      <input
        type="radio"
        name="test2"
        class="custom-radio"
        :class="{ checked: sidebarStore.isRadioChecked }"
        v-model="sidebarStore.isRadioChecked"
        @click="sidebarStore.togglePinned()"
      />
    </span>
  </section>
</template>

<script>
import { useSidebarStore } from "../../stores/SidebarStore";
import { useNavbarStore } from "../../stores/NavbarStore";

import IconLogo from "../icons/IconLogo.vue";
export default {
  components: {
    IconLogo,
  },

  setup() {
    const sidebarStore = useSidebarStore();
    const navbarStore = useNavbarStore();
    return { sidebarStore, navbarStore };
  },
  computed: {
    changeRadioOutlineAndBgColor() {
      if (this.navbarStore.darkMode) {
        return "#f0f4ff";
      } else {
        return "#01041b";
      }
    },
    changeRadioBorderColor() {
      if (this.navbarStore.darkMode) {
        return "#01041b";
      } else {
        return "#f0f4ff";
      }
    },
  },
};
</script>

<style scoped>
.custom-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2.5px solid v-bind(changeRadioBorderColor);
  outline: 2px solid v-bind(changeRadioOutlineAndBgColor);
  margin-right: 8px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}
.checked {
  background-color: v-bind(changeRadioOutlineAndBgColor);
}
</style>
