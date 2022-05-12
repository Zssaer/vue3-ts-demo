<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 200vh;
  padding-top: 12vh;
}

.fade-enter-active, 
.fade-leave-active { 
  transition: opacity 0.5s ease; 
} 


.fade-enter-from, 
.fade-leave-to { 
  opacity: 0; 
}
</style>