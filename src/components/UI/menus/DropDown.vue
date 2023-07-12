<template>
  <div class="wrapper relative font-inter" ref="target">
    <div
      class="select relative flex items-center outline rounded-[7px]"
      id="slc"
      @click="[openDropDown(), changeDropDownBorder()]"
      :class="[changeCursor, changeTheme, changeBorder]">
      <div class="w-10">
        <label
          for="slc"
          class="translate-y-[-50%] absolute left-[7px] px-[7px]"
          :class="[
            changeCursor,
            floatLabel,
            changeTheme,
            changeLabelColor,
            changeSelectedOptionTitleColor,
          ]"
          >{{ placeholder }}</label
        >
        <span class="absolute top-[50%] translate-y-[-50%] left-[14px]">{{
          selectedOption
        }}</span>
      </div>
      <span class="absolute right-4">
        <DropDownIcon
          class="duration-100"
          :class="[rotateIcon]"
          :stroke="changeDropDownIconColor"
          :fill="changeDropDownIconColor" />
      </span>
    </div>

    <transition>
      <div
        class="options w-full rounded-md absolute z-10 mt-[2px]"
        :class="changeOptionsBg"
        v-if="state.isDropDownOpened">
        <ul class="py-2">
          <li
            v-for="option in options"
            :key="option.title"
            @click="
              [getSelectedOption(option), (state.isDropDownOpened = false)]
            "
            @mouseover="hoverOption(option)"
            @mouseleave="unHoverOption(option)"
            class="option px-4 py-[7px] cursor-pointer"
            :class="[
              changeSelectedOptionColor(option),
              changeOptionBgOnHovered(option),
            ]">
            {{ option.title }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import DropDownIcon from "@/components/icons/DropDown.vue";
import { useNavbarStore } from "@/stores/NavbarStore";
import { ref } from "vue";
import { reactive } from "vue";
import { onClickOutside } from "@vueuse/core";

export default {
  components: {
    DropDownIcon,
  },
  props: {
    // width of dropdown menu [optional]
    width: {
      default: "100%",
    },
    // height of dropdown menu [optional]
    height: {
      default: "50px",
    },
    // placeholder (first option) [required]
    placeholder: {
      type: String,
      required: true,
    },
    // options must be an array of objects [{title: "title", value: val} , ...}][required]
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // to get title of selected option
      selectedOption: "",
      // to get value of selected option
      selectedOptionValue: null,
    };
  },
  setup() {
    const state = reactive({
      isDropDownOpened: false,
      isFocused: false,
    });

    const target = ref(null);

    onClickOutside(target, () => {
      state.isDropDownOpened = false;
      state.isFocused = false;
    });

    const navbarStore = useNavbarStore();
    return { navbarStore, state, target };
  },
  methods: {
    openDropDown() {
      // this.options.map((v) => Object.assign(v, { isHover: false }));
      this.state.isDropDownOpened = !this.state.isDropDownOpened;
    },
    changeDropDownBorder() {
      this.state.isFocused = true;
    },
    changeSelectedOptionColor(option) {
      if (this.navbarStore.darkMode) {
        if (option.value === "") {
          return option.value === this.selectedOption ? "bg-[#506ED74D]" : "";
        } else {
          return option.title === this.selectedOption ? "bg-[#506ED74D]" : "";
        }
      } else {
        if (option.value === "") {
          return option.value === this.selectedOption ? "bg-[#E5EBFB]" : "";
        } else {
          return option.title === this.selectedOption ? "bg-[#E5EBFB]" : "";
        }
      }
    },
    hoverOption(option) {
      if (this.state.isDropDownOpened) {
        option.isHovered = true;
      }
    },
    unHoverOption(option) {
      option.isHovered = false;
    },
    getSelectedOption(option) {
      if (option.value === "") {
        this.selectedOption = option.value;
        this.selectedOptionValue = null;
      } else {
        this.selectedOption = option.title;
        this.selectedOptionValue = option.value;
      }
    },
    changeOptionBgOnHovered(option) {
      if (option.isHovered) {
        if (option.value === "") {
          if (this.selectedOption === option.value) {
            if (this.navbarStore.darkMode) {
              return "bg-[#506ED780]";
            } else {
              return "bg-[#DCE4F9]";
            }
          } else {
            if (this.navbarStore.darkMode) {
              return "bg-[#353941]";
            } else {
              return "bg-[#F0F0F0]";
            }
          }
        } else if (this.selectedOption === option.title) {
          if (this.navbarStore.darkMode) {
            return "bg-[#506ED780]";
          } else {
            return "bg-[#DCE4F9]";
          }
        } else {
          if (this.navbarStore.darkMode) {
            return "bg-[#353941]";
          } else {
            return "bg-[#F0F0F0]";
          }
        }
      }
    },
  },
  computed: {
    changeTheme() {
      return this.navbarStore.darkMode ? "bg-[#2E3239]" : "bg-[#ffffff]";
    },
    changeCursor() {
      return this.state.isDropDownOpened ? "cursor-default" : "cursor-pointer";
    },
    changeBorder() {
      if (this.navbarStore.darkMode) {
        return this.state.isFocused
          ? "outline-[#506ED7] outline-2"
          : "outline-[#91929C] hover:outline-[#C6C7CD] outline-1";
      } else {
        return this.state.isFocused
          ? "outline-[#4167E1] outline-2"
          : "outline-[#B1B1B9] hover:outline-[#878792] outline-1";
      }
    },
    changeDropDownIconColor() {
      if (this.navbarStore.darkMode) {
        return "#91929C";
      } else {
        return "#B1B1B9";
      }
    },
    changeLabelColor() {
      if (this.navbarStore.darkMode) {
        return this.state.isFocused ? "text-[#506ED7]" : "";
      } else {
        return this.state.isFocused ? "text-[#4167E1]" : "";
      }
    },
    changeOptionsBg() {
      if (this.navbarStore.darkMode) {
        return "bg-[#2E3239] text-[#C6C7CD]";
      } else {
        return "bg-[#FFFFFF] text-[#767474]";
      }
    },
    changeOptionBgOnClicked() {
      if (this.navbarStore.darkMode) {
        return "#393E47";
      } else {
        return "#E0E0E0";
      }
    },
    changeSelectedOptionTitleColor() {
      if (this.navbarStore.darkMode) {
        return this.selectedOption === "" && !this.state.isDropDownOpened
          ? "text-[#91929C]"
          : "";
      } else {
        return this.selectedOption === "" && !this.state.isDropDownOpened
          ? "text-[#B1B1B9]"
          : "";
      }
    },
    floatLabel() {
      if (this.navbarStore.darkMode) {
        return !this.state.isDropDownOpened &&
          this.selectedOption === "" &&
          !this.state.isFocused
          ? "top-[50%]"
          : "top-0 text-xs text-[#91929C]";
      } else {
        return !this.state.isDropDownOpened &&
          this.selectedOption === "" &&
          !this.state.isFocused
          ? "top-[50%]"
          : "top-0 text-xs text-[#B1B1B9]";
      }
    },
    rotateIcon() {
      return this.state.isDropDownOpened ? "rotate-180" : "rotate-0";
    },
  },
  mounted() {
    if (this.options[0].value === "") {
      this.options[0] = { title: this.placeholder, value: "" };
    } else {
      this.options.unshift({ title: this.placeholder, value: "" });
    }
  },
};
</script>

<style scoped>
.wrapper {
  width: v-bind(width);
}
.select {
  height: v-bind(height);
  transition: outline-color 0.2s ease-in-out;
}

label {
  transition: top 0.2s ease-in-out, font 0.2s ease-in-out,
    color 0.1s ease-in-out;
}
.options {
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.1),
    0px 32px 40px 0px rgba(0, 0, 0, 0.1);
}
.option {
  transition: background-color 100ms ease-in-out;
}

.option:active {
  background-color: v-bind(changeOptionBgOnClicked);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
