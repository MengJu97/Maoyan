<template>
  <header>
    <div class="go-back" @click="goBack">
      &lt;
    </div>
    <span>{{ title }}</span>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {}
  },
  props: ['title'],
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  height: 0.5rem;
  background-color: #e54847;
  font-size: .18rem;
  text-align: center;
  color: white;
  line-height: 0.5rem;
  font-weight: 300;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .go-back {
    width: .5rem;
    height: .5rem;
    font-size: .22rem;
    position: absolute;
    left: 0;
  }
}
</style>