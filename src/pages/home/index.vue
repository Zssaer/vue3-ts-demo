<template>
  <div class="layout">
    <div class="left">
      <h1>Left area</h1>
    </div>
    <div class="main">
      <h1>Main area</h1>
    </div>
    <div class="right">
      <h1>Right area</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
h1{
  text-align: center;
  opacity: 45%;
}
.layout{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .left{
    height: 45%;
    flex-grow: 1;
    margin: 0 15px;
    background-color: #79bdba;
  }
  .main{
    flex-grow: 4;
    margin: 0 15px;
  }

  .right{
    height: 25%;
    flex-grow: 1;
    margin: 0 15px;
    background-color: #91B493;
  }
}
</style>