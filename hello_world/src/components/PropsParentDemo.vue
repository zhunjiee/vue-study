<template>
  <div>
    <PropsDemo />
    <PropsDemo name="张三" :age="18" :isMale="false" :userInfo="userInfo" />
    <PropsDemo v-bind="author" />
  </div>
</template>

<script>
import PropsDemo from "./PropsDemo.vue";

export default {
  components: { PropsDemo },
  data() {
    return {
      author: {
        name: "李四",
        age: 25,
        isMale: true,
      },
      userInfo: { name: "赵六", age: 32, isMale: true },
    };
  },
};
</script>

<style>
</style>