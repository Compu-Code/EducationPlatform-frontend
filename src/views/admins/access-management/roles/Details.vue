<template>
  <div class="relative top-3 w-full">
    <div
      class="Role-header flex flex-col p-3 justify-between mt-10 flex-wrap w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Role ID :</span>
        {{ roleID }}
      </div>
      <div class="mb-5">
        <span class="font-bold">Role created at :</span>
        {{ rolesStore.roleDetails.created_at }}
      </div>
      <div class="">
        <span class="font-bold">Role updated at :</span>
        {{ rolesStore.roleDetails.updated_at }}
      </div>
    </div>
    <div
      class="Role-body mt-8 p-4 w-1/2"
      :class="
        navbarStore.darkMode
          ? 'bg-[#272937] text-dark-text-color'
          : 'bg-white text-light-text-color'
      "
    >
      <div class="mb-5">
        <span class="font-bold">Role Name :</span>
        {{ rolesStore.roleDetails.name }}
      </div>
      <div class="">
        <span class="font-bold">Role Permissions :</span>
        <template v-for="(value, key) in rolesStore.roleDetails.permissions">
          <div class="">{{ key }}</div>
        </template>
      </div>
    </div>
    <div class="btns flex justify-between mt-24 mb-5">
      <router-link :to="{ name: 'admin-roles' }">
        <icon-deflated :direction="'left'" :border="true">Back</icon-deflated>
      </router-link>
      <div class="right-btns">
        <normal-deflated
          @click="openEditPopup(rolesStore.roleDetails)"
          class="edit-btn mr-4"
          >Edit</normal-deflated
        >
        <normal-deflated
          @click="rolesStore.deleteRole(Number(roleID))"
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
              (isEditPopupOpened = false), (rolesStore.editLoading = false);
            }
          "
        ></div>
      </transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="roles-popup">
        <RolesPopup
          v-if="isEditPopupOpened"
          @close="
            {
              (isEditPopupOpened = false), (rolesStore.editLoading = false);
            }
          "
          :edit-role-name="roleNameForEditPopup"
          :edit-role-permissions="rolePermissionsForEditPopup"
          :primary-btn="'edit'"
          :roleId="roleIdForEdit"
          class="z-20"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { useRolesStore } from "../../../stores/RolesStore";
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

const RolesPopup = defineAsyncComponent(() => import("./RolesPopup.vue"));

export default {
  props: ["roleID"],
  components: {
    NormalDeflated,
    IconDeflated,
    OverlayBase,
    RolesPopup,
  },
  data() {
    return {
      isEditPopupOpened: false,
      roleNameForEditPopup: null,
      rolePermissionsForEditPopup: [],
      roleIdForEdit: null,
    };
  },
  setup() {
    const rolesStore = useRolesStore();
    const navbarStore = useNavbarStore();
    return { rolesStore, navbarStore };
  },
  methods: {
    openEditPopup(role) {
      this.rolePermissionsForEditPopup = [];
      this.roleNameForEditPopup = role.name;
      for (const prop in role.permissions) {
        this.rolePermissionsForEditPopup.push(String(role.permissions[prop]));
      }
      console.log(this.rolePermissionsForEditPopup);
      this.roleIdForEdit = role.id;
      this.isEditPopupOpened = true;
    },
  },
  mounted() {
    this.rolesStore.showRoleData(Number(this.roleID));
  },
};
</script>

<style scoped>
.Role-header,
.Role-body {
  width: 100%;
  /* min-width: 100%; */
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
}
.Role-container {
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
.roles-popup-enter-active {
  animation: modal 0.2s ease-out;
}
.roles-popup-leave-active {
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

