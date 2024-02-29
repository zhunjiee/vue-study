<template>
  <hr />
  <h3>Main</h3>
  <div>父组件获取输入框内容: {{ message }}</div>
  <search-component @searchInputEvent="searchComponentHandle" />
</template>

<script>
import SearchComponent from "./SearchComponent.vue";
export default {
  data() {
    return {
      message: "",
    };
  },
  components: {
    SearchComponent,
  },
  methods: {
    searchComponentHandle(searchText) {
      this.message = searchText;
    },
  },
};
</script>

<style>
</style>