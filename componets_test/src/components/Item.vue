<template>
  <div>Item</div>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
</template>

<script>
export default {
  props: {
    name: String,
    age: Number,
  },
};
</script>

<style>
</style>