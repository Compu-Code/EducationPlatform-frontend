<template>
  <ContactusDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const ContactusDetails = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/ContactUs/ContactusDetails.vue")
);

export default {
  components: { ContactusDetails },
};
</script>
