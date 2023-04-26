<template>
  <section class="pl-5 pr-5">
    <div
      class="flex items-center rounded-md mt-2 py-1 duration-300"
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
      <!-- v-model="searchText"
      @keyup="filterMenus(searchText)" -->
    </div>
  </section>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";
import { useSidebarStore } from "../../stores/SidebarStore";
import IconSearch from "../icons/IconSearch.vue";

export default {
  components: {
    IconSearch,
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const navbarStore = useNavbarStore();
    return { sidebarStore, navbarStore };
  },
  data() {
    return {
      // filteredItems: [],
    };
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
  // watch: {
  //   searchText() {
  //     this.sidebarStore.filterMenus();
  //   },
  // },
  // methods: {
  //   filterMenus() {
  //     this.sidebarStore.filteredMenus = this.sidebarStore.allMenus.filter(
  //       (Menu) =>
  //         Menu.title.toLowerCase().includes(this.searchText.toLowerCase())
  //     );
  //     console.log(this.sidebarStore.filteredMenus);
  //   },
  // },
};
</script>

<style scoped>
input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
</style>
