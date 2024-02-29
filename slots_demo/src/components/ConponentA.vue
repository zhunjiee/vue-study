<template>
  <div>
    <h1>插槽基础知识</h1>
    <hr>
    <slot name="first-slot" :msg="childMsg">
        <p>第一个插槽默认内容</p>
    </slot>
    <hr>
    <slot name="second-slot">
        <p>第二个插槽</p>
    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const childMsg = ref('子组件数据');

</script>

<style>
</style>