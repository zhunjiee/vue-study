<template>
    <div class="box">
        <div class="head1">
            <van-col class="denglu" span="22" offset="1">登录</van-col>
        </div>
        <div class="body1">
            <van-cell-group>
                
            </van-cell-group>
        </div>
        <div class="body2"></div>
        <div class="foot1"></div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

.van-col,
.van-row {
    text-align: center;
}

.denglu {
    padding-top: 10%;
    text-align: center;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: white;
    line-height: 65px;
}

.box {
    width: 100vw;
    height: 100vh;
    background-color: #EECE51;
    background-repeat: no-repeat;
}

.head1 {
    height: 10vh;
    width: 100%;
}

.body1 {
    height: 60vh;
    width: 90%;
    display: flex;
    background-color: white;
    margin: 20px 5% 0 5%;
    border-radius: 10px;
}

.body2 {
    height: 20vh;
    width: 100%;
}

.foot1 {
    height: 10vh;
    width: 100%;
}
</style>