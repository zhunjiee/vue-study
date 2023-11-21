<template>
  <h3>表单输入绑定</h3>
  <form action="">
    <input ref="input" type="text" v-model.lazy="name" placeholder="请输入" />
    <button @click.prevent="searchAction">Search</button>
    <p>{{ name }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    searchAction() {
        console.log(this.name);
    }
  },
  mounted () {
    // 挂在后获取焦点
    this.$refs.input.focus();
  },
};
</script>

<style>
</style>