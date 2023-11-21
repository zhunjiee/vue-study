<template>
  <div :id="refClass">
    <h3>模板引用, DOM操作</h3>
    <div ref="container">{{ content }}</div>
    <button @click="getElementHandler">获取元素</button>
    <p ref="testRef">我是一段内容</p>
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from "./MyComponent.vue";

export default {
  data() {
    return {
      content: "内容",
      refClass: "refdemo",
    };
  },
  methods: {
    getElementHandler() {
      this.$refs.container.innerHTML = "哈哈哈";
      console.log(this.$refs.testRef.innerHTML);
    },
  },
  components: {
    MyComponent,
  },
};
</script>

<!-- scoped: 让当前样式只在当前组件中生效 -->
<style scoped>
#refdemo {
  border: 10px solid red;
  background-color: orange;
}
</style>