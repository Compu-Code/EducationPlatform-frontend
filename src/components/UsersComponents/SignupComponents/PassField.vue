<template>
  <div class="relative">
    <input
      :type="[passIsHide ? 'password' : 'text']"
      class="w-full password-field"
      @blur="$emit('checkPassValidate', $event.target.value)"
      @focus="$emit('showPassConstraint')"
      @keyup="$emit('userPass', $event.target.value)"
      :value="modelValue"
      :placeholder="[placeHolder === 1 ? 'Password' : 'Confirm Password']"
    />
    <div class="pass-icon absolute right-7" @click="togglePassVisibility">
      <IconShowpass v-if="!passIsHide" />
      <IconHidepass v-else-if="passIsHide" />
    </div>
  </div>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
import IconShowpass from "../../icons/IconShowpass.vue";
import IconHidepass from "../../icons/IconHidepass.vue";
import { useSignupStepsStore } from "../../../stores/SignupStepsStore";

export default {
  components: {
    IconShowpass,
    IconHidepass,
  },
  props: ["placeHolder", "modelValue"],
  emits: [
    "checkPassValidate",
    "update:modelValue",
    "showPassConstraint",
    "userPass",
  ],
  data() {
    return {
      passIsHide: true,
      isPassValid: "",
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
  },
  computed: {
    changeFieldsBGColor() {
      if (this.navbarStore.darkMode) {
        return "rgba(240, 244, 255, 0.2)";
      } else {
        return "rgba(53, 92, 239, 0.1)";
      }
    },
  },
};
</script>

<style scoped>
.user-data-form form input {
  margin-bottom: 17px;
  padding-left: 30px;
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: v-bind(changeFieldsBGColor);
  color: #8394b1;
  transition: all 0.1s;
  outline: none;
}
.user-data-form form input:hover {
  border: 2px solid #8394b1;
}
.user-data-form form input:focus {
  border: 2px solid #b2c4e4;
}
.pass-icon {
  top: calc(50% - 8.5px);
  transform: translateY(-50%);
  cursor: pointer;
  /* transition: opacity 0.1s;
  opacity: 0; */
}

/* input[name="pass"]:focus ~ .pass-icon {
  opacity: 1;
} */
</style>
