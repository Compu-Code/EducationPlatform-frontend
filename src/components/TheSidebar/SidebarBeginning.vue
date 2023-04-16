<template>
  <section class="pl-4 relative flex">
    <div class="inline-flex">
      <IconLogo class="cursor-pointer text-4xl float-left block mr-2" />
      <h1
        class="text-light-text-color origin-left font-medium duration-300 text-lg pt-1"
        :class="{ 'scale-0': !sidebarStore.isMenuOpen }"
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

import IconLogo from "../icons/IconLogo.vue";
export default {
  components: {
    IconLogo,
  },

  setup() {
    const sidebarStore = useSidebarStore();
    return { sidebarStore };
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
  border: 2.5px solid #dae6f9;
  outline: 2px solid #01041b;
  margin-right: 8px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;
}
.checked {
  background-color: #01041b;
}
</style>
