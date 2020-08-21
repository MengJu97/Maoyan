<template>
  <div class="footer-nav-bar">
    <a href="javascript:;" v-for="(item,index) in footerBarItem" :key="index">
      <img src="" alt="">
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footerBarItem: [{title: '电影/影院'}, {title: '视频'}, {title: '小视频'}, {title: '演出'}, {title: '我的'}]
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
}


</style>