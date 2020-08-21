<template>
  <div class="switch-hot">
    <a v-for="(item,index) in switchHot" :key="index" href="javascript:;" :class="{active:isActive===index}"
       @click="changeActive(index,$event)">{{ item }}</a>
    <div class="active-mark" ref="mark"></div>
  </div>
</template>

<script>
export default {
  name: "SwitchHot",
  data() {
    return {
      switchHot: ['热映', '影院', '待映', '经典电影'],
      isActive: 0,
      toLeft: 0
    }
  },
  mounted() {
    let obj = this.$refs.mark;
    obj.style.left = 0.145 + 'rem';
  },
  methods: {
    changeActive(i, e) {
      this.isActive = i;
      let obj = this.$refs.mark;
      let end = (e.target.offsetLeft + (e.target.offsetWidth - obj.offsetWidth) / 2) / 100 - 0.145;
      console.log('结束位置：' + end);

      let promise = new Promise((resolve, reject) => {
        obj.style.transform = `translate3d(${end}rem,0,0)`;
        resolve();
      }).then(() => {
        this.toLeft = end;
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

a {
  box-sizing: border-box;
  height: .21rem;
  text-decoration: none;
  font-size: .15rem;
  font-weight: 500;
  color: rgb(102, 102, 102);
  padding: 0 1.33333vw;
  list-style: none;
  text-align: center;
  margin: 0 1.3333vw;
}

.active {
  color: rgb(51, 51, 51);
  font-size: .17rem;
  height: .24rem;
}

.active-mark {
  width: 5.33333vw;
  background-color: #f03d37;
  position: absolute;
  //bottom: .01rem;
  bottom: 0;
  height: .03rem;
  border-radius: .01rem;
  transition: all .2s ease-in-out;

}

.switch-hot {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
}
</style>