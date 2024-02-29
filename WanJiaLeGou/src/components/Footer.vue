<template>
  <div class="app-foot-vue">
    <transition name="foot-page-switch" mode="out-in">
      <router-view
        @update:status="changeFootStatus"
        class="app-foot-vue-page"
      />
    </transition>
    <div class="app-foot-placeholder" v-if="showFoot">
      <div class="app-foot-bar">
        <div
          class="foot-item"
          v-for="(item, index) in footList"
          :key="index"
          :class="{ big: item.big }"
        >
          <div @click="clickFootItem(item, index)" class="foot-item-real">
            <img :src="index === active ? item.activeImg : item.img" />
            <p :class="index === active ? 'active' : ''">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showFoot: true,
      footList: [
        {
          name: "首页",
          title: "首页",
          img: require("../assets/foot/shouye@2x.png"),
          activeImg: require("../assets/foot/shouye_xuanze@2x.png"),
          url: "/",
        },
        {
          name: "商家",
          title: "商家",
          img: require("../assets/foot/huodongzhongxin_icn_moren@2x.png"),
          activeImg: require("../assets/foot/huodongzhongxin_icn@2x.png"),
          url: "/business",
        },
        // {
        //   name: "团队",
        //   title: "团队",
        //   img: require("../assets/foot/duihuan_icn@2x.png"),
        //   activeImg: require("../assets/foot/duihuan_icn@2x.png"),
        //   url: "/team",
        //   big: true,
        // },
        {
          name: "购物车",
          title: "购物车",
          img: require("../assets/foot/otc_icn_moren@2x.png"),
          activeImg: require("../assets/foot/gouwuche2@2x.png"),
          url: "/shop",
        },
        {
          name: "我的",
          title: "我的",
          img: require("../assets/foot/mine_icn_moren@2x.png"),
          activeImg: require("../assets/foot/wode-2@2x.png"),
          url: "/self",
        },
      ],
      active: 0,
    };
  },
  methods: {
    clickFootItem(item, index) {
      if (this.$route.path === item.url) {
        return false;
      }
      this.active = index;
      this.$router.push(item.url);
    },
    initActive(path) {
      this.showFoot = true;
      path = path || this.$route.path;
      for (let i = 0; i < this.footList.length; i++) {
        if (this.footList[i].url === path) {
          this.active = i;
        }
      }
    },
    changeFootStatus(show) {
      this.showFoot = !!show;
    },
  },
  components: {},
  pass: true,
  created() {
    this.initActive();
  },
  beforeRouteUpdate(to, from, next) {
    this.initActive(to.path);
    this.showFoot = true;
    next();
  },
};
</script>

<style scoped lang="less">
.foot-page-switch-enter-active,
.foot-page-switch-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.foot-page-switch-enter,
.foot-page-switch-leave-to {
  opacity: 0;
}

.app-foot-vue {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

.app-foot-bar {
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.app-foot-vue-page {
  height: calc(100% - @app-foot-bar-height);
  overflow: auto;
}

.app-foot-bar,
.app-foot-placeholder {
  height: @app-foot-bar-height;
}

.foot-item {
  height: 100%;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;

  .active {
    color: @theme-color;
  }

  &.big > .foot-item-real > img {
    width: 34px;
    height: 34px;
    margin-top: -10px;
  }
}

.foot-item-real {
  font-size: 12px;
  width: 100%;
}

.foot-item-real > img {
  width: 24px;
  height: 24px;
}
</style>