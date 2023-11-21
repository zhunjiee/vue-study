<template>
    <hr>
  <div>{{ count }}</div>
  <button @click="addCount($event, 'hello')">+1</button>
  <button @click="reduceCount">-1</button>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      list:[1, 2, 3, 4]
    };
  },
  methods: {
    addCount(e, msg) {
      console.log(e.target);
      console.log(msg);
      this.count++;
    },
    reduceCount(e) {
      console.log(e.target);
      this.count--;
    },
    sliceList() {
      this.list = this.list.slice(1, 3);
    }
  },
};
</script>

<style>
</style>