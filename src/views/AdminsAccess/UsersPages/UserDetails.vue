<template>
  <UserDetails />
</template>

<script>
import { defineAsyncComponent } from "vue";

const UserDetails = defineAsyncComponent(() =>
  import("../../../components/AdminsComponents/UsersComponents/UserDetails.vue")
);

export default {
  components: { UserDetails },
};
</script>
