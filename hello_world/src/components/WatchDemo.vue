<template>
  <hr />
  <h3>侦听器</h3>
  <p>{{ message }}</p>
  <button @click="clickAction">update</button>
</template>

<script>
export default {
  data() {
    return {
      message: "value",
    };
  },
  methods: {
    clickAction() {
      this.message = "Hello World";
    },
  },
  // 侦听器
  watch: {
    message(newValue, oldValue) {
      console.log("newValue:" + newValue + ", " + "oldValue:" + oldValue);
    },
  },
};
</script>

<style>
</style>