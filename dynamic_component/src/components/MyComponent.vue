<template>
  <div>
    动态组件:<keep-alive
      ><component :is="tabComponment"></component
    ></keep-alive>
  </div>
  <button @click="changeComponent">更改组件</button>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ComponentAVue from "./ComponentA.vue";
// import ComponentBVue from "./ComponentB.vue";
// 异步组件
const ComponentBVue = defineAsyncComponent(() => import("./ComponentB.vue"));
export default {
  data() {
    return {
      message: "Message",
      tabComponment: "ComponentAVue",
    };
  },
  components: {
    ComponentAVue,
    ComponentBVue,
  },
  methods: {
    changeComponent() {
      this.tabComponment =
        this.tabComponment == "ComponentAVue"
          ? "ComponentBVue"
          : "ComponentAVue";
    },
  },
  provide() {
    return {
      msg: this.message,
    };
  },
  inject: ['msg'],
};
</script>

<style>
</style>