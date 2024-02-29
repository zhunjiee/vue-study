<template>
  <div>
    <h1>Props传值</h1>
    <br />
    <ul>
      <li>姓名: {{ name }}</li>
      <li>年龄: {{ age }}</li>
      <li>性别: {{ gender == 0 ? "男" : "女" }}</li>
    </ul>
    <br />
    <form action="">
      婚姻状况:
      <input type="radio" name="married" value="0" :checked="marry" />已婚
      <input type="radio" name="married" value="1" :checked="!marry" />未婚
    </form>
    <br />
    <button @click="clickHandle">子组件向父组件传递数据</button>
  </div>
</template>

<script>
export default {
  // 禁用透传
  inheritAttrs: false,
  data() {
    return {
      marry: false,
      msg: "Child返回的参数",
    };
  },
  created() {
    this.marry = this.married;
    this.doSomthing("props function 子组件传递数据");
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
    gender: {
      type: Number,
      default: 0,
    },
    married: {
      type: Boolean,
      default: false,
    },
    mother: {
      type: Object,
      default(rawProps) {
        return {};
      },
    },
    doSomthing: {
      type: Function,
      default() {
        return "Default function";
      },
    },
  },
  methods: {
    marriedHandle() {},

    clickHandle() {
      this.$emit("parentEvent", this.msg);
    },
  },
};
</script>

<style>
.commonClass {
  color: red;
}
</style>