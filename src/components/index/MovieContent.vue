<template>
  <div class="content-wrap">
    <content-column :item="item"></content-column>
    <button-click :item="item"></button-click>
  </div>
</template>

<script>
import ContentColumn from "./ContentColumn";
import ButtonClick from "./ButtonClick";

export default {
  name: "MovieContent",
  components: {
    ContentColumn,
    ButtonClick
  },
  props: ['item']
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.content-wrap {
  box-sizing: border-box;
  //width: 100%;
  flex: 1;
  height: 100%;
  margin-left: .15rem;
  padding: .12rem .15rem .12rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid #e1e1e1;
}
</style>