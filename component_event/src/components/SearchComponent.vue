<template>
  <input type="text" v-model="searchText" placeholder="请输入">
  <p>子组件获取输入框内容: {{ searchText }}</p>
</template>

<script>
export default {
    data() {
        return {
            searchText: ''
        }
    },
watch: {
    searchText(newValue, oldValue) {
        this.$emit("searchInputEvent", newValue)
    }
},
}
</script>

<style>

</style>