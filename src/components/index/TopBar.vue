<template>
  <div class="top-bar">
    <ChooseCity></ChooseCity>
    <switch-hot></switch-hot>
    <div class="search-icon"></div>
  </div>
</template>

<script>
import ChooseCity from "./ChooseCity";
import SwitchHot from "./SwitchHot";

export default {
  name: "TopBar",
  components: {
    ChooseCity,
    SwitchHot
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.top-bar {
  width: 100%;
  height: .44rem;
  border-bottom: 1px solid rgb(230, 230, 230);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  .search-icon {
    width: .45rem;
    height: .4rem;
    background-color: #e54847;
  }

}
</style>