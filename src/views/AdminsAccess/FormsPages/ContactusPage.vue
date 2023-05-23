<template>
  <div class="contact-us-layout">
    <ContactusPage />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ContactusPage = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/ContactUs/ContactusPage.vue")
);

export default {
  components: { ContactusPage },
};
</script>

<style scoped>
.contact-us-layout {
  height: calc(100% - 70px);
}
</style>
