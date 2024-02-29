<template>
    <button @click="clickHandle" ref="refresh">更新组件{{ count }}</button>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate---组件创建之前");
  },
  created() {
    console.log("created---组件创建之后");
    console.log("created---" + this.$refs.refresh);
  },
  beforeMount() {
    console.log("beforeMount---组件挂载之前");
  },
  mounted() {
    console.log("mounted---组件挂载之后");
    console.log("mounted---" + this.$refs.refresh);
  },
  beforeUpdate() {
    console.log("beforeMount---组件更新之前");
  },
  updated() {
    console.log("mounted---组件更新之后");
  },
  beforeUnmount() {
    console.log("beforeUnmount---组件销毁之前");
  },
  unmounted() {
    console.log("unmounted---组件销毁之后");
  },
data() {
    return {
        count: 0
    }
},
  methods: {
    clickHandle() {
        this.count++;
    }
  },
};
</script>

<style>
</style>