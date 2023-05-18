<template>
  <div class="relative top-10">
    <div
      class="rate-header flex flex-col p-3 justify-between mt-10 flex-wrap"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Rate ID :</span>
        {{ rateID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Rate created at :</span>
        <!-- TODO: rateDetails instead of ratesStore -->
        {{ ratesStore.rateDetails.created_at }}
      </div>
      <div class="">
        <span class="font-bold">Rate updated at :</span>
        <!-- TODO: rateDetails instead of ratesStore -->
        {{ ratesStore.rateDetails.updated_at }}
      </div>
    </div>
    <div
      class="rate-body mt-8 p-4"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">User Name :</span>

        <!-- TODO: rateDetails instead of ratesStore -->
        {{ ratesStore.rateDetails.user_name }}
      </div>
      <div class="mb-5">
        <span class="font-bold"> Rate :</span>
        <!-- TODO: rateDetails instead of ratesStore -->
        {{ ratesStore.rateDetails.rate }}
      </div>
      <div class="">
        <span class="font-bold"> Message :</span>
        <!-- TODO: rateDetails instead of ratesStore -->
        {{ ratesStore.rateDetails.message }}
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-rating' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <normal-deflated
        @click="ratesStore.deleteRate(Number(rateID))"
        class="delete-btn"
        >Delete</normal-deflated
      >
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useRatesStore } from "../../../stores/RatesStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);

export default {
  props: ["rateID"],
  components: {
    NormalDeflated,
    IconDeflated,
  },
  data() {
    return {};
  },
  setup() {
    const ratesStore = useRatesStore();
    const navbarStore = useNavbarStore();
    return { ratesStore, navbarStore };
  },
  beforeMount() {
    this.ratesStore.showRateData(Number(this.rateID));
  },
};
</script>

<style scoped>
.rate-header,
.rate-body {
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.delete-btn {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
.delete-btn:hover {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
.delete-btn:active {
  color: rgb(235, 35, 35);
  border-color: rgb(235, 35, 35);
}
</style>
