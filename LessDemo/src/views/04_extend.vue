<template lang="html">
    <h3>继承</h3>
    <button @click="backAction">返回</button>
    <br>
    <div id="main">
        继承
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
@import '../css/04_extend.less';
</style>