<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_555_419)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0ZM17.5274 9.14618C17.2223 8.84108 16.7276 8.84108 16.4225 9.14618L11.4501 14.1175L8.68853 11.3559C8.38344 11.0508 7.88877 11.0508 7.58368 11.3559C7.27858 11.661 7.27858 12.1556 7.58368 12.4607L10.8982 15.7753C11.2033 16.0804 11.698 16.0804 12.0031 15.7753C12.0063 15.7721 12.0094 15.7689 12.0125 15.7657L17.5274 10.251C17.8325 9.94594 17.8325 9.45127 17.5274 9.14618Z"
        :fill="toggleIconColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_555_419">
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
