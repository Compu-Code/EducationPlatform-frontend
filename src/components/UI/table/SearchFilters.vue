<template>
  <section class="rounded-t-md" :class="changeSectionBg">
    <div class="px-4 pt-8">
      <span class="text-xl" :class="changeTextColor">Search Filters</span>
      <div class="flex-container pb-5">
        <div
          v-for="(option, key, index) in Object.keys(dropdownMenus)"
          :key="key"
          class="dropdown mt-7 w-[100%]">
          <DropDown
            :placeholder="placeholders[key]"
            :options="Object.values(dropdownMenus)[key]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DropDown from "../menus/DropDown.vue";
import { useNavbarStore } from "@/stores/NavbarStore";

export default {
  components: {
    DropDown,
  },
  props: {
    // Array || (ARRAY LENGTH MUST EQUAL NUMBER OF OPTIONS IN DROP-DOWN-MENUS) [required]
    placeholders: {
      type: Array,
      required: true,
    },
    // Object || syntax => options : {option1 : [{title: "title", value: val} , {....} ] , option2: [{...}]}   [required]
    dropdownMenus: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeSectionBg() {
      return this.navbarStore.darkMode ? "bg-[#2E3239]" : "bg-[#FFFFFF]";
    },
    changeTextColor() {
      return this.navbarStore.darkMode ? "text-[#c7c9e5]" : "text-[#686767]";
    },
  },
};
</script>

<style scoped>
section {
  box-shadow: #7a7a7a 0px 0px 10px -3px;
}
.flex-container {
  display: flex;
  flex-direction: column;
}
.dropdown:not(:last-child) {
  margin-right: 1.5rem;
}
@media screen and (min-width: 620px) {
  .flex-container {
    flex-direction: row;
  }
}
</style>
