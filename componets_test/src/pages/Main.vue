<template>
  <div class="main">
    <h3>Mian</h3>
    <Article />
    <Article />
  </div>
</template>

<script setup>
import Article from "../components/Article.vue";
</script>

<style scoped>
.main {
  float: left;
  width: 70%;
  height: 400px;
  border: 5px solid #999;
  box-sizing: border-box;
  border-top: 0px;
}
</style>