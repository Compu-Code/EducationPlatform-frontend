<template>
  <section class="flex flex-row items-center">
    <div class="font-bold text-2xl">Logo</div>
    <div class="divider mx-3"></div>
    <ul>
      <li
        v-for="Menu in navbarStore.navbarMenus"
        class="inline-flex navMenu pr-8 text-sm"
        @click="navbarStore.setActive(Menu.id)"
      >
        <RouterLink :to="'' + Menu.link" :class="{ active: Menu.isActive }">{{
          Menu.title
        }}</RouterLink>
      </li>
    </ul>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import { useNavbarStore } from "../../stores/NavbarStore";

export default {
  data() {
    return {};
  },
  setup() {
    const navbarStore = useNavbarStore();
    return { navbarStore };
  },
};
</script>

<style scoped>
.active {
  background: linear-gradient(
    104.06deg,
    #1570fe -53.97%,
    #76acff 43.01%,
    #8458e8 97.28%,
    #876cd2 149.05%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.navMenu {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
}
.divider {
  width: 31px;
  height: 0px;
  border: 1px solid #01041b;
  transform: rotate(90deg);
}
</style>
