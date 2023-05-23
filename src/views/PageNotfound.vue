<template>
  <div class="page-not-found">
    <h1 class="text-center text-9xl mb-10">404</h1>
    <p class="text-2xl">
      This page no longer exists or was moved to another location.
    </p>
    <p class="text-center text-xl">
      Go to
      <router-link
        to="/home"
        class="hover:text-light-blue-hover duration-200 font-bold"
        >Home</router-link
      >
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-not-found {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
