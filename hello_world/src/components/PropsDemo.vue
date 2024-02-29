<template>
  <hr />
  <h3>Props传值</h3>
  <ul>
    <li>姓名: {{ name }}</li>
    <li>年龄: {{ age }}</li>
    <li>性别: {{ isMale ? "男" : "女" }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    isMale: { type: Boolean, default: true },
    userInfo: {
      type: Object,
      default(rawProps) {
        return {};
      },
    },
  },
};
</script>

<style>
</style>