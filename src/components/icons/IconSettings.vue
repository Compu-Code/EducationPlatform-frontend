<template>
  <svg
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2.75H7.99998"
      :stroke="toggleColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 2.75H1"
      :stroke="toggleColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 4.5C5.9665 4.5 6.75 3.7165 6.75 2.75C6.75 1.7835 5.9665 1 5 1C4.0335 1 3.25 1.7835 3.25 2.75C3.25 3.7165 4.0335 4.5 5 4.5Z"
      :stroke="toggleColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 8.25H9.00002"
      :stroke="toggleColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 8.25H1"
      :stroke="toggleColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.00002 10C7.96652 10 8.75002 9.2165 8.75002 8.25C8.75002 7.2835 7.96652 6.5 7.00002 6.5C6.03352 6.5 5.25002 7.2835 5.25002 8.25C5.25002 9.2165 6.03352 10 7.00002 10Z"
      :stroke="toggleColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
import { useNavbarStore } from "../../stores/NavbarStore";
export default {
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
  computed: {
    toggleColor() {
      if (this.navbarStore.darkMode) {
        return "#F0F4FF";
      } else {
        return "#01041B";
      }
    },
  },
};
</script>
