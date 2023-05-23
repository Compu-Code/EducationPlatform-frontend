<template>
  <div class="sponsors-layout">
    <SponsorsPage />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const SponsorsPage = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/SponsorsComponents/SponsorsPage.vue"
  )
);

export default {
  components: { SponsorsPage },
};
</script>

<style scoped>
.sponsors-layout {
  height: calc(100% - 70px);
}
</style>
