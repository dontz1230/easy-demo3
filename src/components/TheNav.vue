<template>
  <div class="nav">
    <img src="../assets/img/logo.svg" alt />
    <div class="nav__links">
      <router-link to="/">縣市政府防災</router-link>
      <router-link to="/">長照機構防災</router-link>
      <router-link to="/">登入</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
