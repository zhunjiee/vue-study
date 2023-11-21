<template>
  <hr />
  <h3>条件渲染</h3>
  <div v-if="flag">v-if条件成立显示这一行</div>
  <div v-else>v-else否则显示这一样</div>
  <br />
  <div v-if="type === A">A</div>
  <div v-else-if="type === B">B</div>
  <div v-else-if="type === C">C</div>
  <div v-else>Not A/B/C</div>
  <br />
  <div v-show="flag">v-show是否能显示</div>
</template>
  
  <script>
export default {
  data() {
    return {
      flag: true,
      type: "D",
    };
  },
};
</script>
  
  <style>
</style>