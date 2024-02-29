<script setup>
import Main from "./pages/Main.vue";
import Aside from "./pages/Aside.vue";
</script>

<template>
  <Header />
  <div id="flex-container">
    <Main />
    <Aside />
  </div>
</template>

<style scoped>
#flex-container {
  display: flex;
  flex-direction: row;
}
</style>