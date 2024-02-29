<template lang="html">
    <h3>Less变量</h3>
    <button @click="backAction">返回</button>
    <br>
    <div class="center">
        <ul id="user">
            <li id="name">张三</li>
            <li id="age">18</li>
            <li id="gender">男</li>
        </ul>
    </div>
    <br>
    <div id="main" ref="main">

    </div>
</template>

<script>
export default {
    mounted () {
        this.$refs.main.classList.add('show');
    },
    methods: {
        backAction() {
            this.$router.back();
        }
    },
}
</script>

<style lang="less">
.center {
    width: 200px;
    height: 200px;
    background-color: red;

    #user {
        width: 100px;
        height: 100px;
        background-color: green;

        #name {
            font-size: 30px;
            color: orange;
            font-weight: bold;
            text-align: center;
        }

        #age {
            font-size: 18px;
            color: wheat;
            font-style: italic;
        }
    }
}

// 媒体查询
.center {
    @media screen {
        @media (max-width: 400px) {
            width: 100px;
        }
    }
    @media tv {
        width: 2000px;
    }
}

// 定义私有样式
#main {
    width: 100px;
    height: 50px;
    color: blue;
    &.show {
        display: block;
    }
}

.show {
    display: none;
}

</style>