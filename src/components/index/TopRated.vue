<template>
  <div class="top-rated">
    <p class="title">最受好评电影</p>
    <div class="top-rated-list">
      <div class="top-rated-item" v-for="(item,index) in 10" :key="index">
        <div class="poster">
          <img src="https://p0.meituan.net/170.230/movie/22857bface4d3e8586c8f45858d4fa92662013.jpg" alt="">
        </div>
        <h5 class="name line-ellipsis">误杀</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopRated"
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.top-rated {
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 2.03rem;
  margin-bottom: .1rem;
  padding: .12rem .15rem .12rem .15rem;

  .title {
    font-size: .14rem;
    color: #333;
    margin-bottom: .12rem;
  }

  .top-rated-list {
    width: 100%;
    overflow: auto;
    display: flex;
    .top-rated-item {
      margin-right: .2rem;
      img {
        width: .85rem;
        height: 1.15rem;
      }
    }
    .name {
      font-size: .13rem;
      color: #222;
      margin-bottom: .03rem;
    }

    .line-ellipsis {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    &::-webkit-scrollbar {
      overflow-x:hidden;
    }
  }
}
</style>