<template>
  <div>
    <div class="movie-list-item" v-for="(item,index) in list"   :key="item.id">
      <MoviePoster :img="item.img"></MoviePoster>
      <MovieContent :item="item"></MovieContent>
    </div>
  </div>
</template>

<script>
import MoviePoster from "./MoviePoster";
import MovieContent from "./MovieContent";


export default {
  name: "MovieListItem",
  components: {
    MoviePoster,
    MovieContent
  },
  props:['list']
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.movie-list-item {
  width: 100%;
  height: 1.14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>