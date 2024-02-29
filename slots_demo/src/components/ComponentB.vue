<template>
  <component-a>
    <template v-slot:first-slot="slotProps">
      <h3>{{ title }}</h3>
      <p>{{ content }} --- {{ slotProps.msg }}</p>
    </template>

    <template #second-slot>
      <h3>我是第二个插槽</h3>
      <p>第二个插槽内容</p></template
    >
  </component-a>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ComponentA from "./ConponentA.vue";

const title = ref("第一个插槽标题");
const content = ref("插槽内容");

onMounted(() => {
  console.log("the component b is now mounted");
});
</script>

<style>
</style>