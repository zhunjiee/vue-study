<template>
  <div id="second">
    <p>商品详情</p>
    <button @click="popToHome">返回首页</button>
    <br>
    <h3>query方式</h3>
    <ul>
      <li>品牌: {{ route.query.name }}</li>
      <li>价格: {{ route.query.price }}</li>
      <li>ID: {{ route.query.id }}</li>
    </ul>
    <br>
    <h3>params方式</h3>
    <ul>
      <li>品牌: {{ item.name }}</li>
      <li>价格: {{ item.price }}</li>
      <li>ID: {{ item.id }}</li>
    </ul>
  </div>
</template>

<script>
import { data } from '../data/list.json';
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      route: useRoute(),
      item: {},
    }
  },
  mounted () {
    console.log(this.$route.params.id);
    this.item = data.find(v => v.id == this.$route.params.id);
    console.log(this.item);
  },
  methods: {
    popToHome() {
      this.$router.back();
    },
  },
};
</script>

<style>
#second {
  width: 100%;
  height: 100%;
  background-color: green;
}
</style>