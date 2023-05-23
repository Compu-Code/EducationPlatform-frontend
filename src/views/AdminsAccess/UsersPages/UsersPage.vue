<template>
  <UsersPage />
</template>

<script>
import { defineAsyncComponent } from "vue";

const UsersPage = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/UsersComponents/UsersPage.vue")
);

export default {
  components: { UsersPage },
};
</script>

<style scoped></style>
