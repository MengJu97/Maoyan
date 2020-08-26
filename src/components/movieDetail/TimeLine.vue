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
      <div class="cinema-tab" v-for="(item,index) in usedList" :key="item.id" @click="jumpToCinema(item.id)">
        <div class="cinema-title line-ellipsis">
          <span>{{ item.nm }}</span>
          <span class="price-block">
            <span class="price">{{ item.sellPrice }}</span>
            <span class="q">元起</span>
          </span>
        </div>
        <div class="location-block box-flex">
          <div class="flex line-ellipsis">
            {{ item.addr }}
          </div>
          <div class="distance">
            {{ item.distance }}
          </div>
        </div>
        <div class="label-block">
          <div class="endorse">改签</div>
          <div class="vipTag">折扣卡</div>
          <div class="hallType" v-for="(i,index) in item.tag.hallType">{{ i }}</div>
        </div>
        <div class="discount-block" v-if="item.tag.vipTag!==''">
          <div class="discount-label normal card">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                :alt="item.tag.vipTag">
          </div>
          <div class="discount-label-text">{{ item.promotion.cardPromotionTag }}</div>
        </div>
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

      return _this.numberToChinese[val];

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
        cityId: 50,
        updateShowDay: true,
        movieId: this.movieId,
        day: this.dateList[index].y + '-' + this.double(this.dateList[index].m) + '-' + this.double(this.dateList[index].day)
      }
      getCinemaList(p).then(data => this.cinemas = data);
    },
    double(val) {
      // if (val < 10) {
      //   return '0' + val
      // } else {
      //   return val
      // }
      return val < 10 ? '0' + val : val;
    },
    jumpToCinema(cinemaId) {
      let movieId = this.$route.params.id;
      this.$router.push('/cinema/' + cinemaId + '?movieId=' + movieId);
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
  //height: 100%;内容的位置固定,高度占满剩余的部分,自动滚动.为此没必要设置高度height。
  position: fixed;
  top: 2.86rem;
  bottom: 0;
  left: 0;
  right: 0;
  //display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  overflow-x: scroll;
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
    margin-left: .15rem;

    .line-ellipsis {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .cinema-title {
      height: .23rem;
      line-height: .23rem;
      font-size: .15rem;
      color: #000;
      font-weight: 400;

      .price-block {
        padding-top: 9px;
        padding-left: 3px;

        .price {
          color: #f03d37;
          font-size: .18rem;
        }

        .q {
          font-size: .11rem;
          margin-left: 3px;
          color: #f03d37;
        }
      }
    }

    .location-block {
      margin-top: 6px;
      font-size: .13rem;
      color: #666;
      display: flex;

      .flex {
        flex: 1;
      }
    }

    .distance {
      margin-left: 5px;
    }

    .label-block {
      height: .17rem;
      line-height: .17rem;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: hidden;
      font-size: 0;
      flex-shrink: 0;

      div {
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: .15rem;
        line-height: .15rem;
        border-radius: 2px;
        font-size: 11px;
      }

      .endorse {
        color: #589daf;
        border: 1px solid #589daf;
      }

      .vipTag {
        margin-left: 5px;
        color: #f90;
        border: 1px solid #f90;
      }

      .hallType {
        color: #589daf;
        border: 1px solid #589daf;
        margin-left: 5px;
      }
    }

    .discount-block {
      color: #999;
      margin-bottom: 4px;

      .discount-label {
        display: inline-block;
        width: .15rem;
        height: .14rem;
        position: relative;
        top: 3px;

        img {
          width: 100%;
        }
      }

      .discount-label-text {
        font-size: 11px;
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
}


</style>