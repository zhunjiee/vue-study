<template>
    <div>
        <h3>Less变量</h3>
        <button @click="backAction">返回</button>
        <br>
        <br>
        <div id="wrap">
            <div id="child">子组件</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        backAction() {
            this.$router.back()
        }
    },
}
</script>

<style lang="less" scoped>
@bgColor: #FAFAFA;
@textBlackColor: black;
@textHintColor: #999999;
// 背景路径
@imagePath: '../assets/images';

// 公共属性抽取
@commonTextStyle: {
    font-size: 14px;
    color: #000;
    font-weight: 400;
    text-overflow: ellipsis;
}

@commonBorder: {
    border: 3px solid purple;
}

@mySelector: #wrap;
@child: child;

@{mySelector} {
    background-color: red;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@{imagePath}/bg_img.png');
}

#@{child} {
    width: 100px;
    height: 100px;
    background-color: green;
    text-align: center;
    line-height: 100px;
    @commonBorder();
}
</style>