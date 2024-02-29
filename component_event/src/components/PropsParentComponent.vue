<template>
  <PropsChildComponent name="张三" :age="28" :married="true" @parentEvent="childEventListener" :doSomthing="childPropsEvent" class="commonClass"/>
  <br />
  <div>父组件接收到的参数: --- {{ message }}</div>
  <div>父组件接收到的props参数: --- {{ content }}</div>
</template>

<script>
import PropsChildComponent from "./PropsChildComponent.vue";

export default {
  components: {
    PropsChildComponent,
  },
  data() {
    return {
      message: "",
      content: "",
    };
  },
  methods: {
    // 子传父
    childPropsEvent(data) {
      this.content = data;
    },
    childEventListener(data) {
      this.message = data;
    },
  },
};
</script>

<style>

</style>