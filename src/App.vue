<template>
  <div id="app">
<!--    <Index></Index>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "./components/index/Footer";

export default {
  data() {
    return {}
  },
  components: {
    Footer
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>