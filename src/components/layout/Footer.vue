<template>
  <div class="footer">
    <div class="footer_container">
      <ul class="container">
        <li class="left"><img src="@/assets/logo.png" height="100" /></li>
        <li class="middle">
          <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
          </ul>
        </li>
        <li class="right">
          <ul>
            <li>222</li>
            <li>222</li>
            <li>222</li>
            <li>222</li>
            <li>222</li>
            <li>222</li>
          </ul>
        </li>
      </ul>
      <div class="footer_text">版权所有©️XXXXXXX&emsp;&emsp;蜀ICP备XXXXXX号-XX川公网安备 XXXXXXXXXXX 号</div>
    </div>

  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
$medium-family: PingFangSC-medium;

.footer {
  width: 100%;
  background-color: #2978AE;
  padding-top: 3.25%;
  padding-bottom: 10px;
  color: #ffff;

  .footer_container {
    width: 62%;
    margin: 0 auto;

    .container {
      display: flex;
      justify-content: space-around;
      list-style: none;

      .left {
        flex-grow: 1;
        display: flex;
        justify-content: center;
      }

      .middle {
        flex-grow: 1;
        display: flex;
        justify-content: center;

        ul {
          list-style: none;

          li {
            margin: 10px 0px;
          }
        }
      }

      .right {
        flex-grow: 1;
        display: flex;
        justify-content: center;

        ul {
          list-style: none;

          li {
            margin: 10px 0px;
          }
        }
      }
    }
  }

  .footer_text {
    font-size: 12px;
    opacity: 0.5;
    margin-top: 40px;
    text-align: center;
    font-family: $medium-family;
  }


}
</style>