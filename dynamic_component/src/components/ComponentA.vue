<template>
  <div>ComponentA</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("beforeCreate---A组件创建之前");
  },
  created() {
    console.log("created---A组件创建之后");
  },
  beforeMount() {
    console.log("beforeMount---A组件挂载之前");
  },
  mounted() {
    console.log("mounted---A组件挂载之后");
  },
  beforeUpdate() {
    console.log("beforeMount---A组件更新之前");
  },
  updated() {
    console.log("mounted---A组件更新之后");
  },
  beforeUnmount() {
    console.log("beforeUnmount---A组件销毁之前");
  },
  unmounted() {
    console.log("unmounted---A组件销毁之后");
  },
};
</script>

<style>
</style>