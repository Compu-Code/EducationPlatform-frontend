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
        placeholder="Search Permissions"
        class="text-base bg-transparent w-full focus:outline-none ml-1"
      />
    </div>
    <normal-filled
      class="create-permission-btn"
      @click="createPermissionClicked = true"
      >Create Permission</normal-filled
    >
    <Teleport to="body">
      <transition name="overlay">
        <div
          v-if="createPermissionClicked"
          id="overlay"
          :class="{ hidden: !createPermissionClicked }"
          @click="
            {
              (createPermissionClicked = false),
                (permissionsStore.createLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="permissions-popup">
        <PermissionsPopup
          :primary-btn="'create'"
          v-if="createPermissionClicked"
          @close="
            {
              (createPermissionClicked = false),
                (permissionsStore.createLoading = false);
            }
          "
          class="z-20"
        />
      </Transition>
    </Teleport>
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
            Permission Name
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
          v-for="permission in permissionsStore.permissionsData"
          :key="permission.id"
        >
          <!-- <td class="px-4 text-sm"><input type="checkbox" name="" id="" /></td> -->
          <td class="frozen-column px-4 text-sm">{{ permission.id }}</td>
          <td class="td-message px-4 text-sm">
            {{ permission.name }}
          </td>
          <td class="td-description px-4 text-sm">
            {{ permission.created_at }}
          </td>
          <td class="td-updated-at px-4 text-sm">
            {{ permission.updated_at }}
          </td>
          <td class="px-4 text-sm w-full relative">
            <div>
              <KebabMenu
                @menuOpen="permissionsStore.openMenu(permission.id)"
                class="kebab-menu z-[0] relative"
              />
            </div>
            <PopupMenu
              @viewClicked="
                permissionsStore.showPermissionData(permission.id);
                permissionsStore.toggleMenu(permission.id);
              "
              @deleteClicked="
                permissionsStore.deletePermission(permission.id);
                permissionsStore.toggleMenu(permission.id);
              "
              @editClicked="
                openEditPopup(permission);
                permissionsStore.toggleMenu(permission.id);
              "
              v-if="permission.isMenuActive"
              :action1="true"
              :action2="true"
              :action4="true"
              class="popup-menu absolute top-[83%] right-[35%] z-[1]"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <Teleport to="body">
      <transition name="overlay">
        <div
          v-if="isEditPopupOpened"
          id="overlay"
          :class="{ hidden: !isEditPopupOpened }"
          @click="
            {
              (isEditPopupOpened = false),
                (permissionsStore.editLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="permissions-popup">
        <PermissionsPopup
          v-if="isEditPopupOpened"
          @close="
            {
              (isEditPopupOpened = false),
                (permissionsStore.editLoading = false);
            }
          "
          :edit-permission-name="permissionNameForEditPopup"
          :edit-permission-roles="permissionRolesForEditPopup"
          :primary-btn="'edit'"
          :permissionId="permissionIdForEdit"
          class="z-20"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { usePermissionsStore } from "../../../stores/PermissionsStore";
import { useNavbarStore } from "../../../stores/NavbarStore";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const IconSearch = defineAsyncComponent(() =>
  import("../../icons/IconSearch.vue")
);
const IconAvatar = defineAsyncComponent(() =>
  import("../../icons/IconAvatar.vue")
);
const IconPencil = defineAsyncComponent(() =>
  import("../../icons/IconPencil.vue")
);
const IconEye = defineAsyncComponent(() => import("../../icons/IconEye.vue"));
const IconTrash = defineAsyncComponent(() =>
  import("../../icons/IconTrash.vue")
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
const PermissionsPopup = defineAsyncComponent(() =>
  import("./PermissionsPopup.vue")
);
export default {
  components: {
    NormalFilled,
    KebabMenu,
    PopupMenu,
    NormalDeflated,
    IconSearch,
    IconAvatar,
    IconPencil,
    IconEye,
    IconTrash,
    PermissionsPopup,
  },
  data() {
    return {
      menuId: null,
      createPermissionClicked: false,
      isEditPopupOpened: false,
      permissionNameForEditPopup: null,
      permissionRolesForEditPopup: [],
      permissionIdForEdit: null,
    };
  },
  setup() {
    const permissionsStore = usePermissionsStore();
    const navbarStore = useNavbarStore();

    const target = ref(null);
    onClickOutside(target, (event) => permissionsStore.closeMenus());

    return { permissionsStore, navbarStore, target };
  },
  methods: {
    openEditPopup(permission) {
      this.permissionRolesForEditPopup = [];
      this.permissionNameForEditPopup = permission.name;
      for (const prop in permission.roles) {
        this.permissionRolesForEditPopup.push(String(permission.roles[prop]));
      }
      console.log(this.permissionRolesForEditPopup);
      this.permissionIdForEdit = permission.id;
      this.isEditPopupOpened = true;
    },
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
  white-space: nowrap;
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
.td-message,
.full-name {
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

#overlay {
  position: fixed; /* Sit on top of the page content */
  /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* Black background with opacity */
  z-index: 10; /* Specify a stack order in case you're using a different order for other elements */
  /* cursor: pointer; Add a pointer on hover */
  /* animation: overlay 0.5s forwards normal; */
}
/* overlay transition */
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 200ms ease-in-out;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
/* roles popup transition */
.permissions-popup-enter-active {
  animation: modal 0.2s ease-out;
}
.permissions-popup-leave-active {
  animation: modal reverse 0.2s ease-in;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
