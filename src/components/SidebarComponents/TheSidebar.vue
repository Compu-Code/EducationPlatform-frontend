<template>
  <div
    id="sidebar"
    class="h-screen duration-300 overflow-x-hidden scrollbar z-10"
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
    <ul>
      <li
        v-for="Menu in sidebarStore.allMenus"
        :key="Menu.title"
        class="duration-300"
        :class="Menu.spacing ? 'mt-9' : 'mt-2'"
      >
        <SidebarMenu :Menu="Menu" />
      </li>
    </ul>
  </div>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";
import { useSidebarStore } from "../../stores/SidebarStore";
import SidebarHeader from "./SidebarHeader.vue";
import SidebarMenu from "./SidebarMenu.vue";

export default {
  components: {
    SidebarHeader,
    SidebarMenu,
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
  },
  // created() {
  //   this.sidebarStore.TESTgetUserPages();
  // },
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 12px;
}

.scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px #dae6f9;
  border: solid 4px transparent;
  border-radius: 20px;
}

.scrollbar::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.2);
  border: solid 4px transparent;
  border-radius: 20px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.286);
  border-left: solid 3.4px transparent;
}
.sidebar-shadow-on-hover {
  -moz-box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
}
</style>
