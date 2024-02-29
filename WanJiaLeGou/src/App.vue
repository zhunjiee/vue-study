<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </transition>
  </RouterView>
</template>

<style lang="less">
@import url('./css/public.css');

/** 过度动画 */
.router-switch-enter-active,
.router-switch-leave-active {
  transition: opacity 0.3s;
}

.router-switch-enter,
.router-switch-leave-to {
  opacity: 0;
}

/** 卡片打开关闭动画 */
.anim-simple-up-enter-active,
.anim-simple-up-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.anim-simple-up-enter,
.anim-simple-up-leave-to {
  opacity: 0;
  transform: translateY(-50%) scaleY(0.5);
}

*::-webkit-scrollbar {
  display: none;
}

input {
  background: unset;
  outline: none;
  border: none;
  width: 100%;
  color: inherit;

  &::placeholder {
    color: @holder-color;
  }
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;

  &.router-link {
    color: @theme-color;
  }
}

.loadding-out {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vedio {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999
}
</style>
