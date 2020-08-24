<template>
  <div class="movie-detail">
    电影详情页{{ getId }}
    <button @click="goBack"><</button>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {
      getId: ''
    }
  },
  mounted() {
    this.getId = this.$route.params.id;
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
}
</script>

<style scoped>

</style>