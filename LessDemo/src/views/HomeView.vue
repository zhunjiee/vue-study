<template>
    <div>
        <h3>Less从入门到精通</h3>
        <ol>
            <li @click="variateClickHandle(1)">变量</li>
            <li @click="variateClickHandle(2)">嵌套</li>
            <li @click="variateClickHandle(3)">方法</li>
            <li @click="variateClickHandle(4)">继承</li>
            <li @click="variateClickHandle(5)">导入</li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        variateClickHandle(type) {
            switch (type) {
                case 1:
                    this.$router.push({ name: 'variate' })
                    break;
                case 2:
                    this.$router.push({ name: 'nest' })
                    break;
                case 3:
                    this.$router.push({ name: 'method' })
                    break;
                case 4:
                    this.$router.push({ name: 'extend' })
                    break;
                case 5:
                    this.$router.push({ name: 'import' })
                    break;
                default:
                    break;
            }

        }
    },
}
</script>

<style lang="less" scoped></style>