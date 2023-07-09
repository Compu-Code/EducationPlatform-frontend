<template>
  <div class="relative">
    <input
      :type="[passIsHide ? 'password' : 'text']"
      class="w-full password-field"
      @blur="$emit('checkPassValidate', $event.target.value)"
      @focus="$emit('showPassConstraint')"
      @keyup="$emit('userPass', $event.target.value)"
      ref="password"
      :value="modelValue"
      :placeholder="changePlaceholder"
    />
    <div
      class="pass-icon absolute right-7 h-full flex items-center"
      @click="
        togglePassVisibility();
        this.$refs.password.focus();
      "
    >
      <IconShowpass v-if="!passIsHide" />
      <IconHidepass v-else-if="passIsHide" />
    </div>
  </div>
</template>

<script>
function changeFieldColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  } else {
    return "transparent";
  }
}
function changeFieldHoverColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  }
}
function changeFieldClickedColor(arg1) {
  if (arg1) {
    return "#4CC38AE5";
  } else if (arg1 === false) {
    return "#FF6369E5";
  }
}
// to change bg of fields in light mode
function changeBgFieldColor(arg1) {
  if (!useNavbarStore().darkMode) {
    if (arg1 === true) {
      return "rgba(41, 151, 100, 0.1)";
    } else if (arg1 === false) {
      return "rgba(220, 61, 67, 0.1)";
    } else if (arg1 === "") {
      return "rgba(53, 92, 239, 0.1)";
    }
  } else {
    return "rgba(240, 244, 255, 0.2)";
  }
}

import { useNavbarStore } from "../../../stores/NavbarStore";
import IconShowpass from "../../icons/IconShowpass.vue";
import IconHidepass from "../../icons/IconHidepass.vue";
import { useSignupStepsStore } from "../../../stores/SignupStepsStore";

export default {
  components: {
    IconShowpass,
    IconHidepass,
  },
  props: ["placeHolder", "modelValue", "isValid"],
  emits: [
    "checkPassValidate",
    "update:modelValue",
    "showPassConstraint",
    "userPass",
  ],
  data() {
    return {
      passIsHide: true,
      userPass: "",
    };
  },
  setup() {
    const navbarStore = useNavbarStore();
    const signupStepsStore = useSignupStepsStore();
    return { navbarStore, signupStepsStore };
  },
  methods: {
    togglePassVisibility() {
      this.passIsHide = !this.passIsHide;
    },
    changePassFieldColor() {
      return changeFieldColor(this.isValid);
    },
    changePassFieldHoverColor() {
      return changeFieldHoverColor(this.isValid);
    },
    changePassFieldClickedColor() {
      return changeFieldClickedColor(this.isValid);
    },
    changePassFieldBgColor() {
      return changeBgFieldColor(this.isValid);
    },
  },
  computed: {
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
    changePlaceholder() {
      if (this.placeHolder === 1) {
        return "Password";
      } else if (this.placeHolder === 2) {
        return "Confirm Password";
      } else if (this.placeHolder === 3) {
        return "Enter your password";
      } else if (this.placeHolder === 4) {
        return "Enter Password";
      }
    },
  },
};
</script>

<style scoped>
.user-data-form form input {
  padding: 11.5px 30px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: v-bind(changeFieldsBGColor);
  color: #8394b1;
  transition: all 0.1s;
  outline: none;
}

.pass-icon {
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
}
.user-data-form form input {
  border-color: v-bind(changePassFieldColor()) !important;
  background-color: v-bind(changePassFieldBgColor()) !important;
}
.user-data-form form input:hover {
  border-color: v-bind(changePassFieldHoverColor()) !important;
}
.user-data-form form input:focus {
  border-color: v-bind(changePassFieldClickedColor()) !important;
}
</style>
