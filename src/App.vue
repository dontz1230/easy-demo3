<template>
  <div id="app">
    <TheNav />
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    TheNav: () => import("./components/TheNav")
  }
};
</script>
<style lang="scss" src="./assets/scss/style.scss">
</style>
