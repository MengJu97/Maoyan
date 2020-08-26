<template>
  <div class="time-line">
    <div class="time-bar">
      <div class="each-day" v-for="(item,index) in dateList" :key="index" :class="{chosen:isActive===index}"
           @click="changeActive(index)">
        <span v-if="index===0">今天</span>
        <span v-else-if="index===1">明天</span>
        <span v-else-if="index===2">后天</span>
        <span v-else>周{{ item.week | showWeek }}</span>
        <span>{{ item.m |showMonth }}月{{ item.day }}日</span>
      </div>
    </div>
    <div class="cinemas">
      <div class="cinema-tab" v-for="(item,index) in usedList" :key="item.id">
        {{ item.nm }}
      </div>
    </div>
  </div>
</template>

<script>
import {getCinemaList} from "../../Utils/api";

let _this;
export default {
  name: "TimeLine",
  props: ['id'],
  data() {
    return {
      dateList: [],
      movieId: '',
      numberToChinese: ['日', '一', '二', '三', '四', '五', '六'],
      isActive: 0,
      cinemas: {}
    }
  },
  computed: {
    usedList: {
      get() {
        return this.cinemas.cinemas
      }
    }
  }
  ,
  filters: {
    showWeek(val) {
      if (!val) {
        return ''
      } else {
        return _this.numberToChinese[val];
      }
    },
    showMonth(val) {
      if (!val) {
        return ''
      } else {
        if (Number(val) < 10) {
          return '0' + val
        }
      }
    }
  },
  created() {
    //获取当天的日期
    this.getDateList();
    _this = this
  },
  methods: {
    //获取n天的日期存入数组
    getDateList() {
      let n = 5;
      let d = new Date();
      let ms = d.getTime();
      for (let i = 0; i <= n; i++) {
        d = new Date(ms);
        let y = d.getFullYear();
        let m = d.getMonth() + 1;
        let day = d.getDate();
        let week = d.getDay();
        let date = {
          y,
          m,
          day,
          week
        }
        this.dateList.push(date);
        ms += 86400000;
      }
    },
    //改变选中的框
    changeActive(index) {
      this.isActive = index;
      let p = {
        updateShowDay: true,
        movieId: this.movieId,
        day: this.dateList[index].y + '-' + this.double(this.dateList[index].m) + '-' + this.double(this.dateList[index].day)
      }
      getCinemaList(p).then(data => this.cinemas = data);
    },
    double(val) {
      if (val < 10) {
        return '0' + val
      } else {
        return val
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    this.movieId = this.$route.params.id
    getCinemaList({
      updateShowDay: true,
      movieId: this.movieId,
      day: this.dateList[0].y + '-' + this.double(this.dateList[0].m) + '-' + this.double(this.dateList[0].day)
    }).then(data => this.cinemas = data);
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.time-line {
  width: 100%;
  box-sizing: border-box;
  overflow-x: scroll;

}


.time-bar {
  display: inline-flex;
  //flex-wrap: nowrap;
  //background-color: blue;

  .each-day {
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    width: 1.25rem;
    height: .45rem;
    line-height: .45rem;
    font-size: .14rem;
    text-align: center;
    list-style: none;
    color: #666;
    //background-color: #e54847;
  }

  .chosen {
    border-bottom: 2px solid #f03d37;
    color: #f03d37;
  }


}

.cinemas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 2.86rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  //background-color: #e1e1e1;

  .cinema-tab {
    width: 3.6rem;
    height: 1.17rem;
    background-color: white;
    padding: .13rem .15rem .13rem 0;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e1e1;
  }
}


</style>