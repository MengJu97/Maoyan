<template>
  <div class="list-wrap">
    <MovieListItem :list="movieList">
    </MovieListItem>
  </div>
</template>

<script>
import MovieListItem from "./MovieListItem";
import {getIndexList} from "../../Utils/api";
import {getMoreComing} from '../../Utils/api';

export default {
  name: "MovieList",
  components: {
    MovieListItem
  },
  mounted() {
    // await getIndexList().then(data => this.list = data.movieList)
    this.getList();
  },
  props:{
    index:Number
  },
  data() {
    return {
      list: [],
      movieList: [],
      movieIds: [],
      currentIndex: 12,
    }
  },
  computed: {
    currentIds() {
      return this.movieIds.slice(this.currentIndex, this.currentIndex + 10).toString()
    }
  },
  watch: {
    index() {
      this.getMore('movieIds', this.currentIds)
      // console.log(this.currentIds);
    }
  },
  methods: {
    getList: async function () {
      const {movieList, movieIds} = await getIndexList();
      this.list = movieList;
      this.movieIds = movieIds;
      this.movieList = movieList;
      this.$emit('message', this.movieList);
    }
    , getMore: async function (data1, data2) {
      const {coming} = await getMoreComing(data1, data2)
      this.movieList = this.movieList.concat(coming);
      this.currentIndex += 10
      console.log(this.movieList)
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.list-wrap {
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
}
</style>