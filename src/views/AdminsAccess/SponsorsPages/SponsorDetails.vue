<template>
  <SponsorDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const SponsorDetails = defineAsyncComponent(() =>
  import(
    "../../../components/AdminsComponents/SponsorsComponents/SponsorDetails.vue"
  )
);

export default {
  components: { SponsorDetails },
};
</script>
