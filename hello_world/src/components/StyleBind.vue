<template>
  <hr />
  <h3 :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    Style样式绑定
  </h3>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: 30,
    };
  },
};
</script>

<style>
</style>