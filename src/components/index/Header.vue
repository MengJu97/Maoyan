<template>
  <header>
    猫眼电影
  </header>
</template>

<script>

export default {
  name: "Header"
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
}
</style>