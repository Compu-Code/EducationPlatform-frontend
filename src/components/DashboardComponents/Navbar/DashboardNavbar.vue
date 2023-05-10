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
import { defineAsyncComponent } from "vue";

const DnavbarContainer = defineAsyncComponent(() =>
  import("./DnavbarContainer.vue")
);
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
        return "rgba(39,41,55,0.9)";
      } else {
        return "rgba(255, 255, 255,0.9)";
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
  background-color: v-bind(changeColor());
  border-radius: 0 0 10px 10px;
  /* TODO: edit the box shadow */
  box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}
@media screen and (max-width: 1280px) {
  .window-scrolled {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
