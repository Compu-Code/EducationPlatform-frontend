<template>
  <div class="roles-layout">
    <RolesPage />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const RolesPage = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/RolesComponents/RolesPage.vue")
);

export default {
  components: { RolesPage },
};
</script>

<style scoped>
.roles-layout {
  height: calc(100% - 70px);
}
</style>
