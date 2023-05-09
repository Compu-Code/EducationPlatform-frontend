<template>
  <ErrorDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const ErrorDetails = defineAsyncComponent(() =>
  import("../../components/AdminsComponents/ErrorLogs/ErrorDetails.vue")
);

export default {
  components: { ErrorDetails },
};
</script>

<style scoped></style>
