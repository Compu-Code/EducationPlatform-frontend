<template>
  <div>
    <ErrorLogs />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const ErrorLogs = defineAsyncComponent(() =>
  import("../../components/AdminsComponents/ErrorLogs.vue")
);

export default {
  components: { ErrorLogs },
};
</script>

<style scoped></style>
