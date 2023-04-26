<template>
  <section
    class="duration-300"
    :class="[
      navbarStore.darkMode
        ? 'bg-dark-primary-color text-dark-text-color'
        : 'bg-light-primary-color text-light-text-color',
    ]"
  >
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
    <div>home</div>
  </section>
</template>

<script>
import { useNavbarStore } from "../../../stores/NavbarStore";
import { useSidebarStore } from "../../../stores/SidebarStore";
export default {
  setup() {
    const navbarStore = useNavbarStore();
    const SidebarStore = useSidebarStore();
    return { navbarStore, SidebarStore };
  },
};
</script>

<style lang="scss" scoped></style>
