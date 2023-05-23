<template>
  <div class="relative top-3 w-full">
    <div
      class="permission-header flex flex-col p-3 justify-between mt-10 flex-wrap w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Permission ID :</span>
        {{ permissionID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Permission created at :</span>
        {{ permissionsStore.permissionDetails.created_at }}
      </div>
      <div class="">
        <span class="font-bold">Permission updated at :</span>
        {{ permissionsStore.permissionDetails.updated_at }}
      </div>
    </div>
    <div
      class="permission-body mt-8 p-4 w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Permission Name :</span>
        {{ permissionsStore.permissionDetails.name }}
      </div>
      <div class="">
        <span class="font-bold">Permission Roles :</span>
        <template
          v-for="(value, key) in permissionsStore.permissionDetails.roles"
        >
          <div class="">{{ key }}</div>
        </template>
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-permissions' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <div class="right-btns">
        <normal-deflated
          @click="openEditPopup(permissionsStore.permissionDetails)"
          class="edit-btn mr-4"
          >Edit</normal-deflated
        >
        <normal-deflated
          @click="permissionsStore.deletePermission(Number(permissionID))"
          class="delete-btn"
          >Delete</normal-deflated
        >
      </div>
    </div>
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

const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);

const IconDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/IconDeflated.vue")
);
const OverlayBase = defineAsyncComponent(() =>
  import("../../UI/OverlayBase.vue")
);

const PermissionsPopup = defineAsyncComponent(() =>
  import("./PermissionsPopup.vue")
);

export default {
  props: ["permissionID"],
  components: {
    NormalDeflated,
    IconDeflated,
    OverlayBase,
    PermissionsPopup,
  },
  data() {
    return {
      isEditPopupOpened: false,
      permissionNameForEditPopup: null,
      permissionRolesForEditPopup: [],
      permissionIdForEdit: null,
    };
  },
  setup() {
    const permissionsStore = usePermissionsStore();
    const navbarStore = useNavbarStore();
    return { navbarStore, permissionsStore };
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
  mounted() {
    this.permissionsStore.showPermissionData(Number(this.permissionID));
  },
};
</script>

<style scoped>
.permission-header,
.permission-body {
  width: 100%;
  /* min-width: 100%; */
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.permission-container {
  /* width: fit-content; */
  /* margin-right: 0; */
  /* width: 100%; */
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
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

#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
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
/* news popup transition */
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
