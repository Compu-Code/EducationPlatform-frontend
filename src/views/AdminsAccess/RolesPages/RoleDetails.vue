<template>
  <RoleDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const RoleDetails = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/RolesComponents/RoleDetails.vue")
);

export default {
  components: { RoleDetails },
};
</script>
