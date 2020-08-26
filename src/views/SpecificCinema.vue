<template>
  <div class="specific-cinema">
    <Header :title="renderData.cinemaData.nm"></Header>
    <OpenApp></OpenApp>
    <div class="link-nav">
      <a href="/">猫眼电影</a> > <a href="javascript:;">{{ renderData.cinemaData.nm }}</a>
    </div>
    <div class="cinema-info">
      <div class="title  line-ellipsis">{{ renderData.cinemaData.nm }}</div>
      <div class="location line-ellipsis">{{ renderData.cinemaData.addr }}</div>
      <div class="location-icon"></div>
    </div>
    <div>
      <div class="cinema-swiper">
        <div class="post-bg-filter">
        </div>
        <div class="slider-wrap">
          <div class="swiper-slide" v-for="(item,index) in renderData.showData.movies" :key="index"
               :class="{active:activeId==item.id}" @click="changeActive(item)">
            <img :src="item.img | showImg" alt="">
          </div>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-title line-ellipsis">
          <div class="current-title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/index/Header";
import OpenApp from "../components/index/OpenApp";
import {getSpecificCinema} from "../Utils/api";

export default {
  name: "SpecificCinema",
  components: {
    Header,
    OpenApp
  },
  filters: {
    showImg(val) {
      if (!val) {
        return ''
      } else {
        return val.replace('/w.h', '')
      }
    }
  },
  data() {
    return {
      result: Object,
      activeId: String
    }
  },
  async created() {
    let p = {
      cinemaId: this.$route.params.id,
      movieId: this.$route.query.movieId
    }
    this.result = await getSpecificCinema(p)
    this.activeId = this.$route.query.movieId
  },
  computed: {
    //监控this.result的变化
    renderData() {
      return this.result;
    }
  },
  methods: {
    changeActive(item) {
      this.activeId = item.id;
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.specific-cinema {
  width: 100%;
  top: .5rem;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: white;
  overflow: hidden;
  z-index: 20;

  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .active {
    transform: scale(1.15);
    border: 2px solid #fff;
  }

  .link-nav {
    padding: .1rem 0 0 .15rem;

    a {
      color: #777;
      text-decoration: none;
      font-size: .14rem;
    }
  }

  .cinema-info {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    padding: .15rem;
    padding-right: 1rem;

    .title {
      height: .24rem;
      font-size: .17rem;
      line-height: .24rem;
      font-weight: 700;
      color: #333;
    }

    .location {
      margin-top: 2px;
      font-size: .13rem;
      line-height: .18rem;
      height: .18rem;
      color: #999;
    }
  }

  .location-icon {
    background-color: #e54847;
    position: absolute;
    right: 0;
    top: 50%;
    width: .7rem;
    height: .3rem;
    //-webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border-left: 1px solid #d8d8d8;
    text-align: center;
  }

  .post-bg-filter {
    width: 100%;
    height: 1.35rem;
    position: fixed;
    top: 2.2rem;
    left: 0;
    background-color: #40454d;
    opacity: .55;
    z-index: -1;
  }

  .cinema-swiper {
    width: 100%;
    height: 1.35rem;
    //background-color: #e1e1e1;
    overflow-x: scroll;
    position: relative;

    .slider-wrap {
      height: 100%;
      display: inline-flex;
      flex-wrap: nowrap;
      align-items: center;
      flex-shrink: 0;
    }

    .swiper-slide {
      width: .65rem;
      height: .95rem;
      margin-left: .15rem;
      background-color: #222222;

      img {
        width: 100%;
      }
    }
  }

  .movie-info {
    padding: .11rem .15rem;
    text-align: center;

    .movie-title {
      height: .24rem;
      line-height: .24rem;
      font-size: .17rem;
      color: #333;
      font-weight: 700;
    }

  }
}
</style>