<template>
  <div class="our-news-layout">
    <OurNews />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const OurNews = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/NewsEvents/OurNews.vue")
);

export default {
  components: { OurNews },
};
</script>

<style scoped>
.our-news-layout {
  height: calc(100% - 70px);
}
</style>
