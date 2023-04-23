<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_555_407)">
      <path
        d="M12.5 1.66663L0 7.49996L3.33333 8.99996V11.8333C2.33333 12.1666 1.66667 13.1666 1.66667 14.1666C1.66667 15.1666 2.33333 16.1666 3.33333 16.5V16.6666L1.83333 20.1666C1.33333 21.6666 1.66667 23.3333 4.16667 23.3333C6.66667 23.3333 7 21.6666 6.5 20.1666L5 16.6666C6 16.1666 6.66667 15.3333 6.66667 14.1666C6.66667 13 6 12.1666 5 11.8333V9.83329L12.5 13.3333L25 7.49996L12.5 1.66663ZM19.8333 12.5L12.3333 15.8333L8.33333 14V14.1666C8.33333 15.3333 7.83333 16.3333 7 17.1666L8 19.5V19.6666C8.16667 20.3333 8.33333 21 8.16667 21.6666C9.33333 22.1666 10.6667 22.5 12.3333 22.5C17.8333 22.5 19.8333 19.1666 19.8333 17.5V12.5Z"
        :fill="toggleIconColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_555_407">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
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
    toggleIconColor() {
      if (this.navbarStore.darkMode) {
        return "#DAE6F9";
      } else {
        return "#01041B";
      }
    },
  },
};
</script>
