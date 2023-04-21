<template>
  <div
    id="sidebar"
    class="bg-light-primary-color h-screen duration-300 overflow-x-hidden scrollbar z-10"
    :class="[
      {
        'sidebar-shadow-on-hover':
          sidebarStore.isMenuOpen === true &&
          sidebarStore.isSidebarPinned === false,
      },
      OpenMenuWidth,
    ]"
    @mouseover="sidebarStore.toggleOpen('over')"
    @mouseleave="sidebarStore.toggleOpen('leave')"
  >
    <!-- sidebar header (logo , dashboard, radiobutton,search box) -->
    <SidebarHeader />

    <!-- sidebar Lists (Menus)  -->
    <ul>
      <!-- TODO: Make every list a router link not only the text of list -->
      <li
        v-for="Menu in sidebarStore.mainMenu"
        :key="Menu.title"
        class="duration-300"
        :class="Menu.spacing ? 'mt-9' : 'mt-2'"
        @click="testRoute(Menu.link)"
      >
        <!-- testRoute(Menu.link);
      sidebarStore.toggleSubmenu(Menu.title); -->
        <SidebarMenu :Menu="Menu" />
      </li>
    </ul>
  </div>
</template>

<script>
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
    return { sidebarStore };
  },
  methods: {
    testRoute(link) {
      this.$router.push(link);
    },
  },
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
