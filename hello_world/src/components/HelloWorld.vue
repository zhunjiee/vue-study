<script>
export default {
  data() {
    return {
      msg: "!!!Hello World!!!",
      commonClass: "commonClass",
      objectAttrs: {
        class: "commonClass",
        id: "objId",
      },
    };
  },
};
</script>

<template>
  <div v-bind:class="commonClass">{{ msg }}</div>
  <div :class="commonClass">{{ msg }}</div>
  <div v-bind="objectAttrs">{{ msg }}</div>
</template>

<style>
.commonClass {
  color: red;
  font-size: 30px;
}
</style>