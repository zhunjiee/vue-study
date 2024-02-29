<template>
  <div>首页</div>
  <table>
    <thead>
      <tr>
        <th>品牌</th>
        <th>价格</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <th>
          {{ item.name }}
        </th>
        <th>
          {{ item.price }}
        </th>
        <th>
          <button @click="pushToDetail(item)">详情</button>
        </th>
      </tr>
    </tbody>
  </table>

  <hr>
  <RouterLink to="/">A</RouterLink>
  <RouterLink to="/about">B</RouterLink>
</template>

<script>
import { data } from "../data/list.json";

export default {
  data() {
    return {
      items: data,
    };
  },
  methods: {
    pushToDetail(item) {
      this.$router.push({
        name: "Second",
        query: item,
        params: { id: item.id },
      });
    },
  },
};
</script>

<style>
table {
  border: 1px solid black;
}
</style>