<template>
  <div class="sidebarHeader sticky top-0 bg-light-primary-color pt-3">
    <SidebarBeginning />
    <SearchBox />
  </div>
</template>

<script>
import SidebarBeginning from "./SidebarBeginning.vue";
import SearchBox from "./SearchBox.vue";

export default {
  components: { SidebarBeginning, SearchBox },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* .sidebarHeader {
  -moz-box-shadow: 0px 6px 50px #dae6f9;
  -webkit-box-shadow: 0px 6px 50px #dae6f9;
  box-shadow: 0px 6px 50px #dae6f9;
} */
</style>
