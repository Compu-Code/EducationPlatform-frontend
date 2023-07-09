<template>
  <Teleport to="body">
    <div
      v-if="createNewsClicked"
      id="overlay"
      :class="{ hidden: !createNewsClicked }"
      @click="createNewsClicked = false"
    ></div>
  </Teleport>
</template>

<script>
export default {
  props: ["createNewsClicked"],
};
</script>

<style scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* Black background with opacity */
  z-index: 10; /* Specify a stack order in case you're using a different order for other elements */
  /* cursor: pointer; Add a pointer on hover */
  /* animation: overlay 0.5s forwards normal; */
}
</style>
