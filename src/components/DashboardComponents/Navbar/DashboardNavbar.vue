<template>
  <div
    id="navbar"
    class="font-inter py-[15px] text-sm duration-300 sticky"
    :class="[
      { 'window-scrolled': isScrolled },
      navbarStore.darkMode
        ? 'bg-dark-primary-color  '
        : 'bg-light-primary-color ',
    ]"
  >
    <DnavbarContainer />
  </div>
</template>
<script>
import DnavbarContainer from "./DnavbarContainer.vue";
import { useNavbarStore } from "../../../stores/NavbarStore";
import { useSidebarStore } from "../../../stores/SidebarStore";

export default {
  components: { DnavbarContainer },
  data() {
    return {
      isScrolled: false,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();

    return { navbarStore, SidebarStore };
  },
  methods: {
    getSidebarWidth() {
      if (this.SidebarStore.isMenuOpen && this.SidebarStore.isSidebarPinned) {
        return "16rem";
      } else {
        return "4rem";
      }
    },
    changeColor() {
      if (this.navbarStore.darkMode) {
        return "#01041b";
      } else {
        return "#f0f4ff";
      }
    },
  },
  mounted() {
    var self = this;
    window.onscroll = function gg() {
      {
        if (window.scrollY > 0) {
          self.isScrolled = true;
        } else if (window.scrollY === 0) {
          self.isScrolled = false;
        }
      }
    };
  },
};
</script>

<style scoped>
#navbar {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 0.5px;
  inset-block-start: 0;
  width: calc(100% - v-bind(getSidebarWidth));
}
.window-scrolled {
  padding-left: 10px;
  padding-right: 10px;
  backdrop-filter: blur(6px);
  background-color: rgb((v-bind(changeColor)), 0.9);
  border-radius: 0 0 10px 10px;
}
</style>
