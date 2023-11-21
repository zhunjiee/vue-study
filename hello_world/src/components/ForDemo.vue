<template>
  <hr />
  <h3>列表渲染</h3>
  <ul>
    <li v-for="(item, index) in nameList" :key="index">{{ item }}</li>
  </ul>
  <button @click="addListHandler">添加数据</button>
  <br />
  <ul>
    <li v-for="item in userList" :key="item.id">
      name: {{ item.name }}, age:{{ item.age }}
    </li>
  </ul>
  <br />
  <ul>
    <li v-for="(value, key, index) in userInfo" :key="index">
      {{ index }} --- {{ key }}: {{ value }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nameList: ["张三", "李四", "王五"],
      userList: [
        { id: 1, name: "张三", age: 18 },
        { id: 2, name: "李四", age: 28 },
        { id: 3, name: "王五", age: 38 },
      ],
      userInfo: {
        name: "托尼老师",
        age: 38,
        job: "理发师",
        interest: "洗剪吹",
      },
    };
  },
  methods: {
    addListHandler() {
      this.nameList.push('赵六', '朱七')
    }
  },
  // 计算属性
  computed: {
    nameListLength() {
      return this.nameList.length > 3 ? "YES" : "NO" 
    }
  },
};
</script>

<style>
</style>