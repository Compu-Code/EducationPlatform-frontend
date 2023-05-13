<template>
  <div
    class="menu-container"
    :class="[
      navbarStore.darkMode
        ? 'bg-[#272937] text-dark-text-color'
        : 'bg-white text-light-text-color',
    ]"
  >
    <!-- popup menu contain view / edit / delete & icons || you can choose what you want to show in menu -->
    <ul class="menu">
      <!-- first list contain view option -->
      <li
        @click="$emit('viewClicked')"
        class="menu-view"
        :class="[
          navbarStore.darkMode
            ? 'hover:bg-dark-menu-hover'
            : 'hover:bg-light-menu-hover',
        ]"
        v-if="actions === 'all' || action1 === true"
      >
        <span class="mr-3"> <IconEye /> </span>
        <span> View </span>
      </li>
      <!-- second list contain edit option -->
      <li
        @click="$emit('editClicked')"
        class="menu-edit"
        :class="[
          navbarStore.darkMode
            ? 'hover:bg-dark-menu-hover'
            : 'hover:bg-light-menu-hover',
        ]"
        v-if="actions === 'all' || action2 === true"
      >
        <span class="mr-3"> <IconPencil /> </span>
        <span> Edit </span>
      </li>
      <!-- third list contain assign role option -->
      <li
        @click="$emit('assignClicked')"
        class="menu-assign"
        :class="[
          navbarStore.darkMode
            ? 'hover:bg-dark-menu-hover'
            : 'hover:bg-light-menu-hover',
        ]"
        v-if="actions === 'all' || action3 === true"
      >
        <span class="mr-3"> IC </span>
        <span> Assign Role </span>
      </li>
      <!-- fourth list contain delete option -->
      <li
        @click="$emit('deleteClicked')"
        class="menu-delete"
        :class="[
          navbarStore.darkMode
            ? 'hover:bg-dark-menu-hover'
            : 'hover:bg-light-menu-hover',
        ]"
        v-if="actions === 'all' || action4 === true"
      >
        <span class="mr-3"> <IconTrash /> </span>
        <span> Delete </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useNavbarStore } from "../../../stores/NavbarStore";

const IconEye = defineAsyncComponent(() => import("../../icons/IconEye.vue"));
const IconPencil = defineAsyncComponent(() =>
  import("../../icons/IconPencil.vue")
);
const IconTrash = defineAsyncComponent(() =>
  import("../../icons/IconTrash.vue")
);

export default {
  components: {
    IconEye,
    IconPencil,
    IconTrash,
  },
  // [HOW TO USE] if you want to get all actions use [ACTIONS] otherwise use [ACTION] with number of action you want to get
  props: ["actions", "action1", "action2", "action3", "action4"],
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#4b6fdd";
      } else {
        return "#2246cd";
      }
    },
  },
};
</script>

<style scoped>
.menu-container {
  width: 7.063rem;
  box-shadow: -3px 0px 2px rgba(0, 0, 0, 0.2), -1px 3px 2px rgba(0, 0, 0, 0.2),
    1px -1px 2px rgba(0, 0, 0, 0.2), 3px 3px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.menu {
  padding: 8px 0;
  font-family: inherit;
  font-weight: bold;
}
.menu li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 16px;
  height: 3rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
/* .menu li:hover {
  background-color: v-bind(changeHoverColor);
} */
/* .menu li:active {
  background-color: aqua;
} */
</style>
