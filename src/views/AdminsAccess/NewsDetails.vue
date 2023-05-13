<template>
  <NewsDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const NewsDetails = defineAsyncComponent(() =>
  import("../../components/AdminsComponents/NewsEvents/NewsDetails.vue")
);

export default {
  components: { NewsDetails },
};
</script>
