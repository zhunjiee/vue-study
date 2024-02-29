<template lang="html">
    <h3>方法</h3>
    <button @click="backAction">返回</button>
    <br>
    <div id="wrap">
        method
    </div>
</template>
<script>

export default {
    methods: {
        backAction() {
            this.$router.back();
        }
    },
}
</script>
<style lang="less">
@import '../css/03_method.less';
</style>