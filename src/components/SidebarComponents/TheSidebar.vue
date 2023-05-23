<template>
  <div
    id="sidebar"
    class="h-screen z-10 fixed"
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
  /*TODO: detect window screen width to fix sidebar bug when make website for mobile then return to laptop */
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
    changeSidebarShadowColor() {
      if (this.navbarStore.darkMode) {
        return "rgb(65 64 64 / 0.38)";
      } else {
        return "rgba(0, 0, 0, 0.2)";
      }
    },
  },
};
</script>

<style scoped>
#sidebar {
  transition: width 0.5s, background-color 300ms, color 300ms;
}
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
  box-shadow: 3px 0 10px v-bind(changeSidebarShadowColor);
  -moz-box-shadow: 3px 0 10px v-bind(changeSidebarShadowColor);
  -webkit-box-shadow: 3px 0 10px v-bind(changeSidebarShadowColor);
  /*box-shadow: 2px 0px 5px v-bind(scrollbarColor); */
}
@media screen and (max-width: 1280px) {
  #sidebar {
    width: v-bind(openSidebarOnMobile);
  }
}
</style>
