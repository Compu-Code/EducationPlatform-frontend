<template>
  <div class="roles-popup w-96">
    <div class="Container p-4 w-full">
      <IconClose class="cursor-pointer" @click="$emit('close')" />
      <form @submit.prevent="" class="flex flex-col px-3 pt-3">
        <input
          class="mt-3 mb-3"
          type="text"
          name="name"
          placeholder="Role Name"
          @keyup="getRoleName($event.target.value)"
          @blur="getRoleName($event.target.value)"
          v-model="roleName"
        />
        <p>Select Role Permissions :</p>
        <div
          class="Container h-60 overflow-y-auto mt-2 mb-3 border border-gray"
        >
          <ul class="px-3 py-2">
            <li
              v-for="permission in permissionsStore.permissionsData"
              :key="permission.id"
            >
              <div class="flex items-center">
                <input
                  class="permissions mr-2 cursor-pointer"
                  type="checkbox"
                  :name="permission.name"
                  :id="permission.id"
                  :value="String(permission.id)"
                  v-model="selectedPermissions"
                />
                <label :for="permission.id" class="cursor-pointer">{{
                  permission.name
                }}</label>
              </div>
            </li>
          </ul>
        </div>
        <!-- buttons -->
        <div class="flex">
          <normal-filled
            v-if="primaryBtn === 'create'"
            class="create-btn mr-2 flex items-center justify-center"
            @click="createRole"
          >
            <span v-if="!rolesStore.createLoading">Create</span>
            <div class="spinner" v-if="rolesStore.createLoading"></div>
          </normal-filled>
          <normal-filled
            v-else-if="primaryBtn === 'edit'"
            class="confirm-btn mr-2 flex items-center justify-center"
            @click="updateRole"
          >
            <span v-if="!rolesStore.editLoading">Confirm</span>
            <div class="spinner" v-if="rolesStore.editLoading"></div>
          </normal-filled>
          <normal-filled class="cancel-btn" @click="$emit('close')"
            >Cancel</normal-filled
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const IconClose = defineAsyncComponent(() =>
  import("../../icons/IconClose.vue")
);
const NormalFilled = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalFilled.vue")
);
const NormalDeflated = defineAsyncComponent(() =>
  import("../../UI/BasesButton/NormalDeflated.vue")
);
import { useNavbarStore } from "../../../stores/NavbarStore";
import { useRolesStore } from "../../../stores/RolesStore";
import { usePermissionsStore } from "../../../stores/PermissionsStore";

export default {
  components: {
    IconClose,
    NormalFilled,
    NormalDeflated,
  },
  emits: ["close"],
  props: ["editRoleName", "editRolePermissions", "primaryBtn", "roleId"],
  data() {
    return {
      roleName: null,
      rolePermissions: null,
      selectedPermissions: [],
    };
  },
  watch: {
    selectedPermissions(newValue, oldValue) {
      console.log(newValue);
    },
    editRolePermissions(newValue, oldValue) {
      console.log(oldValue);
    },
  },
  setup() {
    const navbarStore = useNavbarStore();
    const rolesStore = useRolesStore();
    const permissionsStore = usePermissionsStore();
    return { navbarStore, rolesStore, permissionsStore };
  },
  methods: {
    //create flow
    async createRole() {
      if (this.roleName) {
        console.log(this.roleName);
        console.log(this.selectedPermissions);
        await this.rolesStore.createRole({
          name: this.roleName,
          permissions: this.selectedPermissions,
        });
        console.log(this.rolesStore.createdSuccessfully);
        if (this.rolesStore.createdSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // edit flow
    async updateRole() {
      // if (this.roleName) {
      //   this.rolePermissions = document.getElementsByName("checkboxes");
      //   console.log(this.rolePermission);
      // }
      console.log(this.roleName);
      console.log(this.selectedPermissions);
      if (this.selectedPermissions) {
        this.roleName = document.getElementsByName("name")[0].value;
      }
      if (this.roleName) {
        await this.rolesStore.updateRole(
          {
            id: this.roleId,
            name: this.roleName,
            permissions: this.selectedPermissions,
          },
          this.roleId
        );
        if (this.rolesStore.updatedSuccessfully) {
          this.$emit("close");
        }
      }
    },
    // get roles data from the form
    getRoleName(name) {
      this.roleName = name;
    },
    getSelectedPermission(id) {
      this.selectedPermissions.push(String(id));
      console.log(this.selectedPermissions);
    },
  },
  computed: {
    changeColor() {
      if (this.navbarStore.darkMode) {
        return "#3C3954";
      } else {
        return "#F1F1F2";
      }
    },
    changeHoverColor() {
      if (this.navbarStore.darkMode) {
        return "#423F59";
      } else {
        return "#E9E9EB";
      }
    },
  },
  mounted() {
    this.permissionsStore.getPermissionsData();
    if (this.editRolePermissions) {
      if (this.editRolePermissions.length > 0) {
        this.selectedPermissions = this.editRolePermissions;
      }
    }
    if (this.editRoleName) {
      if (this.editRoleName.length > 0) {
        this.roleName = this.editRoleName;
      }
    }
  },
  unmounted() {
    this.selectedPermissions = [];
  },
};
</script>

<style scoped>
.roles-popup {
  background-color: white;
  height: fit-content;
  left: calc(50% - 12rem);
  top: 20vh;
  position: fixed;
  box-shadow: 0px 0px 5px 3px rgb(0, 0, 0, 0.2);
  border-radius: 5px;
}
.create-btn,
.confirm-btn {
  padding: 8px 20px !important;
}
.cancel-btn {
  padding: 8px 20px !important;
  background-color: v-bind(changeColor);
  color: #a0a3a8;
}
.cancel-btn:hover {
  background-color: v-bind(changeHoverColor);
}
.cancel-btn:active {
  background-color: v-bind(changeHoverColor);
}
form input {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  border: 2px solid rgb(159, 159, 159);
  border-radius: 8px;
  color: black;
  outline: none;
  transition: all 0.2s;
}
form textarea {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  border: 2px solid rgb(159, 159, 159);
  border-radius: 8px;
  color: black;
  transition: all 0.2s;
  outline: none;
}
form input:hover {
  border-color: black;
}
form input:focus {
  border-color: black;
}
form textarea:hover {
  border-color: black;
}
form textarea:focus {
  border-color: black;
}
.spinner {
  width: 24px;
  display: inline-flex;
  height: 24px;
  border-radius: 50%;
  border: 3.8px solid #ffffff;
  animation: spinner-bulqg1 0.8s infinite linear alternate,
    spinner-oaa3wk 1.6s infinite linear;
}

@keyframes spinner-bulqg1 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }

  12.5% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%
    );
  }

  25% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      100% 100%,
      100% 100%
    );
  }

  50% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  62.5% {
    clip-path: polygon(
      50% 50%,
      100% 0,
      100% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  75% {
    clip-path: polygon(
      50% 50%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  100% {
    clip-path: polygon(
      50% 50%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      0% 100%
    );
  }
}

@keyframes spinner-oaa3wk {
  0% {
    transform: scaleY(1) rotate(0deg);
  }

  49.99% {
    transform: scaleY(1) rotate(135deg);
  }

  50% {
    transform: scaleY(-1) rotate(0deg);
  }

  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
}
</style>
