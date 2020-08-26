<template>
  <div class="movie-detail">
    <Header :title="title"></Header>
    <div class="main-body">
      <DetailHeader :render-info="movieInfo" :img="passImg"></DetailHeader>
      <TimeLine :id="getId"></TimeLine>
    </div>
  </div>
</template>

<script>
import Header from "../components/index/Header";
import {getMovieDetail} from "../Utils/api";
import {getCinemaList} from "../Utils/api";
import TimeLine from "../components/movieDetail/TimeLine";


import DetailHeader from "../components/movieDetail/DetailHeader";

export default {
  name: "MovieDetail",
  components: {
    Header,
    DetailHeader,
    TimeLine
  },
  data() {
    return {
      getId: '',
      movieInfo: {},
      title: '',
      passImg: ''
    }
  },
  mounted() {
    this.getId = this.$route.params.id;
    //获取电影信息
    this.getMovieById()
    //获取电影院信息
  },
  methods: {
    async getMovieById() {
      const search = {
        movieId: this.getId
      }
      await getMovieDetail(search).then(data => this.movieInfo = data.detailMovie);
      this.title = this.movieInfo.nm;
      this.passImg = this.movieInfo.img.replace('/w.h', '')
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.main-body {
  width: 100%;
  top: .5rem;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: white;
  overflow: hidden;
  z-index: 20;
}
</style>