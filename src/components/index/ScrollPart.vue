<template>
  <div class="scroll-part">
    <div class="wrap">
      <TopRated></TopRated>
      <MovieList @message="getChildList" :index="index"></MovieList>
    </div>
  </div>
</template>

<script>
import TopRated from "./TopRated";
import MovieList from "./MovieList";

import BScroll from 'better-scroll'

export default {
  name: "ScrollPart",
  props: ['list'],
  components: {
    TopRated,
    MovieList
  },
  data() {
    return {
      index: 0,
      movielist: []
    }
  },
  methods: {
    getChildList(list) {
      this.movielist = list;
      // this.$nextTick是在所有的dom全部渲染完以后做的事情
      this.$nextTick(() => {
        // 创建实例，第一个参数是操作的元素， 第二个是传递的参数
        // http://ustbhuangyi.github.io/better-scroll/doc/api-specific.html
        let bScroll = new BScroll('.scroll-part', {
          // 滚动部分允许点击
          click: true,
          // 允许上拉加载
          pullUpLoad: true
        })

        // 上拉加载，监听pullingUp方法
        bScroll.on('pullingUp', () => {
          this.index++
          // 告诉bScroll已经加载完了，可以下一次加载了
          bScroll.finishPullUp()
        })
      })

    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.scroll-part {
  position: absolute;
  top: 1.1rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

}
</style>