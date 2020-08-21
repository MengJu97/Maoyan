<template>
  <div class="movie-poster">
    <img :src=" img | replaceUrl" alt="">
  </div>
</template>

<script>
export default {
  name: "MoviePoster",
  props: ['img'],
  filters: {
    replaceUrl(val) {
      return val.replace('/w.h', '');
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.movie-poster {
  box-sizing: border-box;
  width: .64rem;
  height: .9rem;
  background-color: antiquewhite;
  margin-left: .15rem;
  img{
    width: 100%;
  }
}
</style>