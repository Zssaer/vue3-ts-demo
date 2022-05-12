<template>
  <div id="headerEl" ref="headerEl" :class="state.isOnTop ? 'header top' : 'header notop'">
    <div class="header_container">
      <div class="header_left">
        <img src="@/assets/logo.png" alt="" height='42' class="">
      </div>
      <div class="nav">
        <!-- menuList -->
        <template v-for="(item, index) in menuList">
          <ul class="menu" :class="[getActivePath() === item.path ? 'isonPress' : '', state.isOnTop ? '' : 'notop']">
            <li @click="goto(item.path)">{{ item['name'] }}</li>
          </ul>
        </template>
      </div>
      <div class="language-select relative left-4">CN</div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, ref, onMounted } from 'vue';
import { getScrollTop } from '@/util/scroll'
import { useRoute, useRouter } from 'vue-router'

const state = reactive({
  isOnTop: true,
})

const menuList = ref([
  {
    name: "Home",
    value: '1',
    isActive: true,
    path: '/'
  },
  {
    name: "Ref",
    value: '1',
    isActive: true,
    path: '/ref'
  },
  {
    name: "About",
    value: '1',
    isActive: true,
    path: '/about'
  },
])

onMounted(() => {
  // 监听滚动条位置
  window.addEventListener('scroll', scrollTop, true)
})
const route = useRoute()

const getActivePath = () => {
  return route.path
}


// 实时滚动条高度
const scrollTop = () => {
  let scrollhight = getScrollTop()
  if (scrollhight != null && scrollhight >= 50) {
    state.isOnTop = false
  } else {
    state.isOnTop = true
  }
}
const router = useRouter()
const goto = (path: string) => {
  router.push({
    path: path
  })
}


</script>

<style lang="scss" scoped>
@keyframes colorswitch1 {
  0% {
    background: linear-gradient(#fff, transparent),
  }

  25% {
    background: linear-gradient(rgb(189, 156, 159), transparent),
  }

  25% {
    background: linear-gradient(rgb(190, 142, 146), transparent),
  }

  50% {
    background: linear-gradient(rgb(194, 94, 101), transparent),
  }

  75% {
    background: linear-gradient(rgb(192, 67, 75), transparent),
  }

  95% {
    background: linear-gradient(rgb(192, 50, 59), transparent),
  }

  100% {
    background: linear-gradient(rgb(226, 27, 27), transparent),
  }
}

@keyframes colorswitch2 {
  0% {
    background: linear-gradient(rgb(226, 27, 27), transparent),
  }

  15% {
    background: linear-gradient(rgb(192, 50, 59), #fff),
  }

  25% {
    background: linear-gradient(rgb(192, 67, 75), #fff),
  }

  50% {
    background: linear-gradient(rgb(194, 94, 101), #fff),
  }

  75% {
    background: linear-gradient(rgb(190, 142, 146), #fff),

  }

  95% {
    background: linear-gradient(rgb(189, 156, 159), #fff),
  }

  100% {
    background: linear-gradient(#fff, #fff),
  }
}

@keyframes colorswitch3 {
  0% {
    background: linear-gradient(rgb(113, 247, 218), transparent),
  }

  15% {
    background: linear-gradient(rgb(113, 247, 218), rgba(113, 247, 218, 0.137)),
  }

  25% {
    background: linear-gradient(rgb(113, 247, 218), rgba(113, 247, 218, 0.322)),
  }

  50% {
    background: linear-gradient(rgb(113, 247, 218), rgba(113, 247, 218, 0.507)),
  }

  75% {
    background: linear-gradient(rgb(113, 247, 218), rgba(113, 247, 218, 0.747)),

  }

  95% {
    background: linear-gradient(rgb(113, 247, 218), rgba(113, 247, 218, 0.89)),
  }

  100% {
    background: linear-gradient(rgb(113, 247, 218), rgb(113, 247, 218)),
  }
}

.isonPress {
  background: linear-gradient(rgb(113, 247, 218), transparent),
}

.isonPress.notop {
  animation: colorswitch3 linear 0.2s;
  animation-fill-mode: forwards;
}

.header {
  width: 100%;
  height: 10%;
  position: fixed;
  z-index: 999;
  background: -webkit-linear-gradient(#fff, transparent);
  background: -o-linear-gradient(#fff, transparent);
  background: -moz-linear-gradient(#fff, transparent);
  background: linear-gradient(#fff, transparent);

  &.top {
    animation: colorswitch1 linear 0.2s;
    animation-fill-mode: forwards;
  }

  &.notop {
    animation: colorswitch2 linear 0.2s;
    animation-fill-mode: forwards;
    box-shadow:
      0.5px 11px 10px rgba(0, 0, 0, 0.056),
  }

  .header_container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .header_left {
      height: 100%;
      position: relative;
      right: 4em;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80%;
      }
    }

    .nav {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .menu {
        width: 6em;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: center;
      }

      li {
        font-size: 1.2em;
        cursor: pointer;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .submenu {
        position: absolute;
        left: -22%;
        top: 68px;
        z-index: 9999;
        font-size: 14px;

        li {
          padding: 20px 18px;
          background: #287095;
        }
      }
    }
  }
}
</style>