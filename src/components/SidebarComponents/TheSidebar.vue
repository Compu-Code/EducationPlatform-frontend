<template>
  <div
    id="sidebar"
    class="h-screen duration-300 z-10 fixed"
    :class="[
      {
        'sidebar-shadow-on-hover':
          sidebarStore.isMenuOpen === true &&
          sidebarStore.isSidebarPinned === false,
      },
      OpenMenuWidth,

      navbarStore.darkMode ? 'bg-dark-primary-color' : 'bg-light-primary-color',
    ]"
    @mouseover="sidebarStore.toggleOpen('over')"
    @mouseleave="sidebarStore.toggleOpen('leave')"
  >
    <!-- sidebar header (logo , dashboard, radiobutton,search box) -->
    <SidebarHeader />

    <!-- sidebar Lists (Menus)  -->
    <ul class="scrollbar menus-hight overflow-x-hidden">
      <li
        v-if="filteredMenus.length > 0"
        v-for="Menu in filteredMenus"
        :key="Menu.name"
        class="duration-300"
        :class="Menu.spacing ? 'mt-9' : 'mt-2'"
      >
        <SidebarMenu :Menu="Menu" />
      </li>
      <p
        v-if="filteredMenus.length < 1"
        class="text-center py-1"
        :class="[
          navbarStore.darkMode
            ? 'text-dark-text-color'
            : 'text-light-text-color',
        ]"
      >
        No Results Found.
      </p>
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const SidebarHeader = defineAsyncComponent(() => import("./SidebarHeader.vue"));
const SidebarMenu = defineAsyncComponent(() => import("./SidebarMenu.vue"));

import { useNavbarStore } from "../../stores/NavbarStore";
import { useSidebarStore } from "../../stores/SidebarStore";
// import SidebarHeader from "./SidebarHeader.vue";
// import SidebarMenu from "./SidebarMenu.vue";

export default {
  components: {
    SidebarHeader,
    SidebarMenu,
  },
  data() {
    return {
      search: "",
    };
  },
  setup() {
    const sidebarStore = useSidebarStore();
    const navbarStore = useNavbarStore();
    return { sidebarStore, navbarStore };
  },
  methods: {},
  computed: {
    OpenMenuWidth() {
      if (this.sidebarStore.isMenuOpen) {
        return "w-64";
      } else {
        return "w-16";
      }
    },
    scrollbarVisibility() {
      if (this.sidebarStore.isMenuOpen) {
        return "block";
      } else {
        return "none";
      }
    },
    scrollbarColor() {
      if (this.navbarStore.darkMode) {
        return "#f0f4ff";
      } else {
        return "#01041b";
      }
    },
    filteredMenus() {
      return this.sidebarStore.allMenus.filter((Menu) =>
        Menu.title
          .toLowerCase()
          .includes(this.sidebarStore.searchText.toLowerCase())
      );
    },
    openSidebarOnMobile() {
      if (this.sidebarStore.sidebarOpen) {
        return "256px";
      } else {
        return "0px";
      }
    },
  },
};
</script>

<style scoped>
.menus-hight {
  height: calc(100% - 6.063rem);
}
.scrollbar::-webkit-scrollbar {
  width: 12px;
  display: v-bind(scrollbarVisibility);
}

.scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px transparent;
  border: solid 4px transparent;
  border-radius: 20px;
}

.scrollbar::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px v-bind(scrollbarColor);
  border: solid 4px transparent;
  border-radius: 20px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 10px 10px v-bind(scrollbarColor);
  border-left: solid 3.4px transparent;
}
.sidebar-shadow-on-hover {
  -moz-box-shadow: 2px 0px 5px v-bind(scrollbarColor);
  -webkit-box-shadow: 2px 0px 5px v-bind(scrollbarColor);
  box-shadow: 2px 0px 5px v-bind(scrollbarColor);
}
@media screen and (max-width: 767px) {
  #sidebar {
    width: v-bind(openSidebarOnMobile);
  }
}
</style>
