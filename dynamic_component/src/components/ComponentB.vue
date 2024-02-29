<template>
  <div>ComponentB</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate---B组件创建之前");
  },
  created() {
    console.log("created---B组件创建之后");
  },
  beforeMount() {
    console.log("beforeMount---B组件挂载之前");
  },
  mounted() {
    console.log("mounted---B组件挂载之后");
  },
  beforeUpdate() {
    console.log("beforeMount---B组件更新之前");
  },
  updated() {
    console.log("mounted---B组件更新之后");
  },
  beforeUnmount() {
    console.log("beforeUnmount---B组件销毁之前");
  },
  unmounted() {
    console.log("unmounted---B组件销毁之后");
  },
};
</script>

<style>
</style>