<template>
  <section class="pl-5 pr-5">
    <div
      class="flex items-center rounded-md bg-light-primary-color mt-2 py-1 border-light-text-color duration-100"
      :class="{ border: sidebarStore.isMenuOpen, SearchPaddingInClose }"
    >
      <IconSearch
        class="block float-left cursor-pointer ml-1"
        :class="SearchIconMarginInClose"
      />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        class="text-base bg-transparent w-full text-light-text-color focus:outline-none"
        :class="{ hidden: !sidebarStore.isMenuOpen }"
      />
    </div>
  </section>
</template>

<script>
import { useSidebarStore } from "../../stores/SidebarStore";
import IconSearch from "../icons/IconSearch.vue";

export default {
  components: {
    IconSearch,
  },
  setup() {
    const sidebarStore = useSidebarStore();
    return { sidebarStore };
  },
  data() {
    return {};
  },
  computed: {
    SearchPaddingInClose() {
      if (this.isMenuOpen) {
        return "px-2.5";
      } else {
        return "px-4";
      }
    },
    SearchIconMarginInClose() {
      if (this.isMenuOpen) {
        return "mr-2";
      }
    },
  },
};
</script>
