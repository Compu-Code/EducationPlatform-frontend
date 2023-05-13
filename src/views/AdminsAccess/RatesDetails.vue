<template>
  <RatesDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const RatesDetails = defineAsyncComponent(() =>
  import("../../components/AdminsComponents/WebsiteRates/RatesDetails.vue")
);

export default {
  components: { RatesDetails },
};
</script>
