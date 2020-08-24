<template>
  <div class="footer-nav-bar">
    <router-link v-for="(item,index) in footerBarItem" :key="index" :to="item.path" active-class="active">
      <img src="" alt="">
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerBarItem: [
        {
          title: '电影/影院',
          path: '/index/hot'
        },
        {
          title: '视频',
          path: '/video'
        },
        {
          title: '小视频',
          path: '/short'
        },
        {
          title: '演出',
          path: '/show'
        },
        {
          title: '我的',
          path: '/mine'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.footer-nav-bar {
  box-sizing: border-box;
  width: 100%;
  height: .5rem;
  border-top: 1px solid rgb(230, 230, 230);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;

  a {
    width: 25%;
    height: 100%;
    color: #696969;
    text-decoration: none;
    font-size: .12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    display: block;
    width: .25rem;
    height: .25rem;
  }

  .active {
    color: #f03d37;
  }
}


</style>