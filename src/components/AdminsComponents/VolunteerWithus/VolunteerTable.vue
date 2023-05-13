<template>
  <div class="p-2 flex justify-between">
    <!-- <normal-filled class="export-btn">Export</normal-filled> -->
    <div
      class="search-box flex items-center rounded-md py-1 duration-300"
      :class="[
        navbarStore.darkMode
          ? 'bg-dark-primary-color border-dark-text-color'
          : 'bg-light-primary-color border-light-text-color',
      ]"
    >
      <div class="block float-left cursor-pointer ml-1">
        <IconSearch />
      </div>

      <input
        type="search"
        name=""
        id=""
        placeholder="Search Volunteers"
        class="text-base bg-transparent w-full focus:outline-none ml-1"
      />
    </div>
  </div>
  <hr />
  <div class="table-container overflow-x-auto">
    <table class="min-w-[800px] w-full relative">
      <thead class="border-b sticky top-0 bg-white z-[1]">
        <tr>
          <!-- <th class="px-4 text-sm font-semibold tracking-wide text-left">
            <input type="checkbox" name="" id="" />
          </th> -->
          <th
            class="frozen-column px-4 text-sm font-semibold tracking-wide text-left"
          >
            ID
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            First Name
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Last Name
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Email
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Description
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Created At
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Updated At
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="">
        <tr
          class="border-b"
          v-for="volunteer in volunteerStore.volunteerData.slice().reverse()"
          :key="volunteer.id"
        >
          <!-- <td class="px-4 text-sm"><input type="checkbox" name="" id="" /></td> -->
          <td class="frozen-column px-4 text-sm">{{ volunteer.id }}</td>
          <td class="td-message px-4 text-sm">
            {{ volunteer.first_name }}
          </td>
          <td class="td-description px-4 text-sm">
            {{ volunteer.last_name }}
          </td>
          <td class="td-created-at px-4 text-sm">{{ volunteer.email }}</td>
          <td class="td-updated-at px-4 text-sm">
            {{ volunteer.description }}
          </td>
          <td class="td-updated-at px-4 text-sm">{{ volunteer.created_at }}</td>
          <td class="td-updated-at px-4 text-sm">{{ volunteer.updated_at }}</td>
          <td class="px-4 text-sm w-full relative">
            <div>
              <KebabMenu
                @menuOpen="volunteerStore.openMenu(volunteer.id)"
                class="kebab-menu z-[0] relative"
              />
            </div>
            <PopupMenu
              @viewClicked="
                {
                  volunteerStore.showVolunteerData(volunteer.id);
                  volunteerStore.toggleMenu(volunteer.id);
                }
              "
              @deleteClicked="
                volunteerStore.deleteVolunteer(volunteer.id);
                volunteerStore.toggleMenu(volunteer.id);
              "
              v-if="volunteer.isMenuActive"
              :action1="true"
              :action4="true"
              class="popup-menu absolute top-[83%] right-[35%] z-[1]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useVolunteerStore } from "../../../stores/VolunteerStore";
import { useNavbarStore } from "../../../stores/NavbarStore";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const IconSearch = defineAsyncComponent(() =>
  import("../../icons/IconSearch.vue")
);

const NormalFilled = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);
const KebabMenu = defineAsyncComponent(() =>
  import("../../UI/BasesButton/KebabMenu.vue")
);
const PopupMenu = defineAsyncComponent(() =>
  import("../../UI/BasesPopup/PopupMenu.vue")
);
export default {
  components: {
    NormalFilled,
    KebabMenu,
    PopupMenu,
    NormalDeflated,
    IconSearch,
  },
  data() {
    return {
      // isMenuOpen: false,
      menuId: null,
    };
  },
  setup() {
    const volunteerStore = useVolunteerStore();
    const navbarStore = useNavbarStore();

    const target = ref(null);
    onClickOutside(target, (event) => volunteerStore.closeMenus());

    return { volunteerStore, navbarStore, target };
  },
  methods: {
    // openMenu(ID) {
    //   const activity = this.errors.find((error) => error.id === ID);
    //   this.menuId = error.id;
    //   this.isMenuOpen = !this.isMenuOpen;
    // },
  },
  computed: {
    changeTableColor() {
      if (this.navbarStore.darkMode) {
        return "#272937";
      } else {
        return "#ffffff";
      }
    },
  },
  // isMenuOpened(ID){

  // }
};
</script>

<style scoped>
.frozen-column {
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: v-bind(changeTableColor);
}
table,
thead {
  background-color: v-bind(changeTableColor);
}
.view-btn,
.delete-btn {
  padding: 2.5px 9px;
}
.export-btn {
  padding: 6px 30px;
}

input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
td,
th {
  height: 48px;
}
tr {
  transition: all 0.1s ease-in-out;
}
/* table tr:not(thead tr):hover {
  background-color: rgb(213, 213, 213);
} */
.td-message {
  /* min-width: 200px; */
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.td-description {
  /* min-width: 200px; */
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
thead {
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2); */
}

td:last-child {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.td-created-at,
.td-updated-at {
  /* min-width: 200px; */
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
