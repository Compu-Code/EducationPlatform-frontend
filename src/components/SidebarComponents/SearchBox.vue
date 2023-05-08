<template>
  <section class="pl-5 pr-5">
    <div
      class="search-box flex items-center rounded-md mt-2 py-1 duration-300"
      :class="[
        { border: sidebarStore.isMenuOpen, SearchPaddingInClose },
        navbarStore.darkMode
          ? 'bg-dark-primary-color border-dark-text-color'
          : 'bg-light-primary-color border-light-text-color',
      ]"
    >
      <div
        class="block float-left cursor-pointer ml-1"
        :class="SearchIconMarginInClose"
      >
        <IconSearch />
      </div>

      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        class="text-base bg-transparent w-full focus:outline-none ml-1"
        :class="[
          { hidden: !sidebarStore.isMenuOpen },
          navbarStore.darkMode
            ? 'text-dark-text-color'
            : 'text-light-text-color',
        ]"
        v-model="sidebarStore.searchText"
      />
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from "vue";

const IconSearch = defineAsyncComponent(() =>
  import("../icons/IconSearch.vue")
);

import { useNavbarStore } from "../../stores/NavbarStore";
import { useSidebarStore } from "../../stores/SidebarStore";
// import IconSearch from "../icons/IconSearch.vue";

export default {
  components: {
    IconSearch,
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const navbarStore = useNavbarStore();
    return { sidebarStore, navbarStore };
  },
  computed: {
    SearchPaddingInClose() {
      if (this.sidebarStore.isMenuOpen) {
        return "px-2.5";
      } else {
        return "px-4";
      }
    },
    SearchIconMarginInClose() {
      if (this.sidebarStore.isMenuOpen) {
        return "mr-2";
      }
    },
    openSidebarOnMobile() {
      if (this.sidebarStore.sidebarOpen) {
        return "flex";
      } else {
        return "none";
      }
    },
  },
};
</script>

<style scoped>
input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
@media screen and (max-width: 767px) {
  .search-box {
    display: v-bind(openSidebarOnMobile);
  }
}
</style>
