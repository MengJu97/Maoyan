<template>
  <div class="container">
    <Header :title="'猫眼电影'"></Header>
    <div class="main-area">
      <open-app></open-app>
      <top-bar></top-bar>
<!--      <scroll-part :list="list"></scroll-part>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../components/index/Header";
import OpenApp from "../components/index/OpenApp";
import TopBar from "../components/index/TopBar";
import ScrollPart from "../components/index/ScrollPart";

import {getIndexList} from "../Utils/api";

export default {
  name: "Index",
  components: {
    Header,
    OpenApp,
    TopBar,
    ScrollPart
  },
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    await getIndexList().then(data => this.list = data.movieList)
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.main-area {
  position: absolute;
  top: .5rem;
  bottom: .5rem;
  left: 0;
  right: 0;
  overflow: auto;
  background-color: #f5f5f5;
}
</style>