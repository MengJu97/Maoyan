<template>
  <div class="choose-city">
    <span class="city-name">杭州</span>
  </div>
</template>

<script>
export default {
  name: "ChooseCity"
}
</script>

<style scoped lang="scss">
    *{
      margin: 0;
      padding: 0;
    }

    .choose-city{
      box-sizing: border-box;
      height: .21rem;
      width: .64rem;
      padding-left: .15rem;
      .city-name{
        font-size: .15rem;
        color: rgb(102, 102, 102);
      }
    }
</style>