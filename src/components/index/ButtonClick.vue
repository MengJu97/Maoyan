<template>
  <div class="button-click">
    <span v-if="item.showst===3">购票</span>
    <span v-else :style="{backgroundColor:blue}">预售</span>
  </div>
</template>

<script>
export default {
  name: "ButtonClick",
  props: ['item'],
  data() {
    return {
      blue: '#3c9fe6',
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.button-click {
  width: .47rem;
  height: .27rem;

  line-height: .28rem;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: .12rem;
  cursor: pointer;

  span {
    border-radius: 4px;
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>