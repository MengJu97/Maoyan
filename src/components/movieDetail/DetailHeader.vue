<template>
  <div class="wrap" v-if="renderInfo">
    <div class="detail-header" v-if="renderInfo">
      <div class="poster">
        <img :src="img" alt="">
      </div>
      <div class="text-content">
        <div class="detail-title line-ellipsis">
          {{ renderInfo.nm }}
        </div>
        <div class="detail-enm line-ellipsis">
          {{ renderInfo.enm }}
        </div>
        <div class="detail-score line-ellipsis">
          <span v-if="renderInfo.sc">{{ renderInfo.sc }}  <span
              class="no-score">({{ renderInfo.snum | getCount }})</span></span>
          <span v-else class="no-score">暂无评分</span>
        </div>
        <div class="detail-type line-ellipsis">
          <span>{{ renderInfo.cat }}</span>
        </div>
        <div class="detail-src line-ellipsis">
          {{ renderInfo.src }}/{{ renderInfo.dur }}分钟
        </div>
        <div class="detail-pub line-ellipsis">
          {{ renderInfo.pubDesc }}
        </div>
      </div>
    </div>
    <div class="background" :style="{backgroundImage:'url('+img+')'}" v-if="renderInfo">

    </div>
    <div class="movie-filter" v-if="renderInfo">

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  props: {
    renderInfo: {
      type: Object,
      default: ''
    },
    img: String
  },
  data() {
    return {}
  },
  filters: {
    getCount(val) {
      if (!val) {
        return ''
      } else if (val >= 10000) {
        return (val / 10000).toFixed(1) + '万人评'
      } else {
        return val+'人评'
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.wrap {
  width: 100%;
  height: 1.88rem;
  position: relative;
}

.detail-header {
  box-sizing: border-box;
  width: 100%;
  height: 1.88rem;
  padding: .19rem .3rem .19rem .15rem;
  background-color: transparent;
  display: flex;
  justify-content: space-around;

  .poster {
    width: 1.1rem;
    height: 1.5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .text-content {
    width: 2.07rem;
    height: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .detail-title {
      font-size: .2rem;
      margin-top: 2px;
      font-weight: 700;
      overflow: hidden;
    }

    .detail-enm {
      height: .12rem;
      line-height: .12rem;
      margin-top: 5px;
      font-size: .12rem;
      color: #fff;
      opacity: .8;
    }

    .detail-score {
      line-height: .18rem;
      height: .18rem;
      font-size: .18rem;
      font-weight: 700;
      color: #fc0;
      margin-top: 11px;
    }

    .no-score {
      font-size: 12px;
      color: #fff;
      opacity: .8;
    }

    .detail-type {
      height: .15rem;
      margin-top: 10px;
      font-size: 12px;
      color: #fff;
      opacity: .8;
    }

    .detail-src {
      line-height: .12rem;
      height: .12rem;
      margin-top: 10px;
      font-size: 12px;
      color: #fff;
      opacity: .8;
    }

    .detail-pub {
      line-height: .12rem;
      height: .12rem;
      margin-top: 10px;
      font-size: 12px;
      color: #fff;
      opacity: .8;
    }
  }
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  overflow: hidden;
  filter: blur(15px);
  background-repeat: no-repeat;
  opacity: .55;
}

.movie-filter {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  background-color: #333;
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>