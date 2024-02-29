<template>
    <div class="main">
      <h3>Aside</h3>
      <Item name="张三" age="18"/>
      <Item :name="names" :age="ages"/>
      <Item />
    </div>
  </template>
  
  <script>
  import Item from '../components/Item.vue';

  export default {
    data() {
        return {
            names: "小李",
            ages: 28
        }
    },
    components: {
        Item,
    },
  }
  </script>
  
  <style scoped>
  .main {
    /* float: right; */
    width: 30%;
    height: 400px;
    border: 5px solid #999;
    box-sizing: border-box;
    border-left: 0px;
    border-top: 0px;
    padding-left: auto;
    align-content: center;
  }
  </style>