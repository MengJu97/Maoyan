<template>
  <div class="open">
    <div class="cat-logo">
      <img src="https://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png" alt="猫眼电影">
    </div>
    <div class="name-desc">
      <div class="app-name">
        猫眼
      </div>
      <div class="app-desc">
        在线选座，热门影讯，爱上看电影
      </div>
    </div>
    <div class="open-app-btn">
      打开APP
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenApp"
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.open {
  box-sizing: border-box;
  width: 100%;
  height: 0.64rem;
  border-bottom: 1px solid rgb(230, 230, 230);
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;

  .cat-logo {
    width: .44rem;
    height: .44rem;

    img {
      width: 100%;
    }
  }

  .name-desc {
    width: 1.8rem;
    height: .4rem;
    margin-left: -.3rem;
    .app-name {
      width: 100%;
      height: .23rem;
      font-size: .17rem;
      font-weight: 300;
    }

    .app-desc {
      font-size: .12rem;
      width: 100%;
      height: .17rem;
      color: rgb(153, 153, 153);
      font-weight: 300;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .open-app-btn{
    width: .68rem;
    height: .3rem;
    background-color: rgb(239, 66, 56);
    border-radius: .03rem;
    color: white;
    font-size: .13rem;
    line-height: .3rem;
    text-align: center;
  }
}
</style>