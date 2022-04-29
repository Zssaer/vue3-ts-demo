<template>
  <div id="headerEl" ref="headerEl" :class="state.isOnTop ? 'header top' : 'header notop'">
    <div class="header_container">
      <div class="header_left">
        <img src="@/assets/logo.png" alt="" height='42'>
      </div>
      <div class="nav">
        <!-- menuList -->
        <template v-for="(item, index) in menuList">
          <ul class="menu" :class="getActivePath() === item.path ? 'isonPress' : ''">
            <li @click="goto(item.path)">{{ item['name'] }}</li>
            <ul class="submenu">
              <li>122</li>
            </ul>
          </ul>
        </template>

      </div>
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

  25% {
    background: linear-gradient(rgb(192, 50, 59), transparent),
  }

  25% {
    background: linear-gradient(rgb(192, 67, 75), transparent),
  }

  50% {
    background: linear-gradient(rgb(194, 94, 101), transparent),
  }

  75% {
    background: linear-gradient(rgb(190, 142, 146), transparent),

  }

  95% {
    background: linear-gradient(rgb(189, 156, 159), transparent),
  }

  100% {
    background: linear-gradient(#fff, transparent),
  }
}

.isonPress {
  background: linear-gradient(rgb(113, 247, 218), transparent),
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
  }

  .header_container {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .header_left {
      position: relative;
      right: 8em;
      width: 30%;
      display: flex;
      justify-content: center;
    }

    .nav {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .menu {
        height: 100%;
        display: flex;
        align-items: center;
      }

      li {
        font-size: 1.2em;
        cursor: pointer;
        position: relative;
        width: 64px;
        right: 5%;
        display: flex;
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