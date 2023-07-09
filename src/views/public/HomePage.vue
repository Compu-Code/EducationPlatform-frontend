<template>
  <!-- <WebsitePage /> -->
  <div class="overflow-hidden">
    <img
      src="@/assets/images/HeroSection.png"
      alt="hero img"
      v-if="navbarStore.darkMode"
    />
    <img
      src="@/assets/images/HeroSectionLight.png"
      alt="hero img"
      v-if="!navbarStore.darkMode"
    />
  </div>

  <!-- <threeTest class="w-fit" /> -->
</template>

<script>
import { useNavbarStore } from "@/stores/NavbarStore";
// import { ProductService } from "@/service/ProductService";
import { defineAsyncComponent } from "vue";

// import WebsitePage from "@/components/WebsitePage.vue";

// import threeTest from "../../components/three test/threeTest.vue";

export default {
  // components: { WebsitePage },
  data() {
    return {
      products: null,
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  mounted() {
    document.body.style.overflowX = "hidden";
  },
  unmounted() {
    document.body.style.overflowX = null;
  },
};
</script>

<style scoped>
img {
  width: 100vw;
  height: fit-content;
  user-select: none;
  -webkit-user-drag: none;
}
</style>
