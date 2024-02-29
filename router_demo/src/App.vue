<script setup>
</script>

<template>
  <!-- <div>
    <router-link to="/">首页</router-link>
    <router-link to="/second" style="margin-left: 20px">第二页</router-link>
  </div> -->
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div :key="$route.path">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
</style>
