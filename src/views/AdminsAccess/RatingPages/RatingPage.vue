<template>
  <div class="website-rates-layout">
    <WebsiteRates />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const WebsiteRates = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/WebsiteRates/WebsiteRates.vue")
);

export default {
  components: { WebsiteRates },
};
</script>

<style scoped>
.website-rates-layout {
  height: calc(100% - 70px);
}
</style>
