<template>
  <div class="website-rates-layout">
    <main
      class="rates mt-6 w-full duration-300 mb-10"
      :class="[
        navbarStore.darkMode
          ? ' text-dark-text-color'
          : 'text-light-text-color',
      ]"
    >
      <!-- <div
    class="filter w-full h-20 mb-5"
      :class="[navbarStore.darkMode ? ' bg-[#272937]' : 'bg-white']"
      >
      <div>Filter</div>
    </div> -->
      <div
        class="table-sh"
        :class="[navbarStore.darkMode ? ' bg-[#272937]' : 'bg-white']"
      >
        <RatesTable />
      </div>
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "../../../stores/NavbarStore.js";
import { useSidebarStore } from "../../../stores/SidebarStore";
import { useRatesStore } from "../../../stores/RatesStore";
const RatesTable = defineAsyncComponent(() => import("./RatesTable.vue"));

export default {
  components: { RatesTable },
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    const ratesStore = useRatesStore();
    return { navbarStore, SidebarStore, ratesStore };
  },
  data() {
    return {};
  },
  mounted() {
    this.ratesStore.getRatesData();
  },
};
</script>

<style scoped>
.website-rates-layout {
  height: calc(100% - 70px);
}
.rates {
  height: calc(100% - 24px);
}
.filter,
.table-sh {
  box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 5px;
}
.table-sh {
  /* height: calc(100% - 103px); */
}
</style>
