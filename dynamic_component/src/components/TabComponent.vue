<template>
  <hr />
  <div>动态组件:<component :is="tabComponment" /></div>
  <button @click="changeComponent()">更改组件</button>
</template>
  
  <script setup lang="ts">
import { ref, markRaw } from "vue";
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";

const tabComponment = ref(markRaw(ComponentA));

const changeComponent = () => {
  tabComponment.value =
    tabComponment.value == markRaw(ComponentA)
      ? markRaw(ComponentB)
      : markRaw(ComponentA);
  console.log(tabComponment.value);
};
</script>
  
  <style>
</style>