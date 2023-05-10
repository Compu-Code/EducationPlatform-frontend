<template>
  <!-- <WebsitePage /> -->
  <div class="mb-10">Home Page</div>

  <!-- <threeTest class="w-fit" /> -->
</template>

<script>
// import { ProductService } from "@/service/ProductService";

import WebsitePage from "../../components/WebsitePage.vue";

// import threeTest from "../../components/three test/threeTest.vue";

export default {
  components: { WebsitePage },
  data() {
    return {
      products: null,
    };
  },
  // mounted() {
  //   ProductService.getProductsMini().then((data) => (this.products = data));
  // },
};
</script>

<style scoped></style>
