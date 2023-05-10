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
        placeholder="Search Error"
        class="text-base bg-transparent w-full focus:outline-none ml-1"
      />
    </div>
  </div>
  <hr />
  <div class="table-container overflow-x-auto overflow-y-hidden">
    <table class="min-w-[800px] w-full relative">
      <thead class="border-b sticky top-0 bg-white z-[1]">
        <tr>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            <input type="checkbox" name="" id="" />
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">ID</th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Message
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Description
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Created at
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-left">
            Updated at
          </th>
          <th class="px-4 text-sm font-semibold tracking-wide text-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="">
        <tr
          class="border-b"
          v-for="error in errors.slice().reverse()"
          :key="error.id"
        >
          <td class="px-4 text-sm"><input type="checkbox" name="" id="" /></td>
          <td class="px-4 text-sm">{{ error.id }}</td>
          <td class="td-message px-4 text-sm">
            {{ error.error_message }}
          </td>
          <td class="td-description px-4 text-sm">
            {{ error.error_description }}
          </td>
          <td class="td-created-at px-4 text-sm">{{ error.created_at }}</td>
          <td class="td-updated-at px-4 text-sm">{{ error.updated_at }}</td>
          <td class="px-4 text-sm w-full relative">
            <div class="flex justify-center z-[0]">
              <!-- <normal-deflated
                class="view-btn mr-2"
                @click="errorlogsStore.showErrorData(error.id)"
                >View</normal-deflated
              >
              <normal-deflated
                class="delete-btn"
                @click="errorlogsStore.deleteError(error.id)"
              >
                Delete</normal-deflated
              > -->
              <KebabMenu @click="openMenu" />
            </div>
            <!-- <Teleport to="table" v-if="isMenuOpen"> -->
            <!-- <ActionsMenu v-if="isMenuOpen" class="absolute right-0 top-0" /> -->
            <!-- </Teleport> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useErrorlogsStore } from "../../../stores/ErrorlogsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";

const IconSearch = defineAsyncComponent(() =>
  import("../../icons/IconSearch.vue")
);

const NormalFilled = defineAsyncComponent(() =>
  import("../BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("../BasesButton/NormalDeflated.vue")
);
const KebabMenu = defineAsyncComponent(() =>
  import("../BasesButton/KebabMenu.vue")
);
const ActionsMenu = defineAsyncComponent(() =>
  import("../../AdminsComponents/ErrorLogs/ActionsMenu.vue")
);
export default {
  components: {
    NormalFilled,
    KebabMenu,
    ActionsMenu,
    NormalDeflated,
    IconSearch,
  },
  props: ["errors"],
  data() {
    return {
      isMenuOpen: false,
    };
  },
  setup() {
    const errorlogsStore = useErrorlogsStore();
    const navbarStore = useNavbarStore();
    return { errorlogsStore, navbarStore };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.table-container {
  /* height: calc(100% - 56px); */
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
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
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
