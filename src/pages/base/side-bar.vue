<template>
  <aside class="side-bar" :class="{on: isShow}">
    <div class="side-wrap">
      <header class="logo-wrap">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <span class="logo-txt side-txt">管理平台1</span>
      </header>
      <div class="side-main">
        <nav class="side-nav">
          <div class="nav-list" v-for="(item, index) in routers" :key="index">
            <div @click="onSelectNav(item)" class="nav-item" :class="{on: isSelectNav(item)}">
              <i :class="'icon iconfont ' + item.icon"></i>
              <span class="nav-title side-txt">{{item.title}}</span>
              <span class="nav-select" v-if="item.sub" :class="{on: isShowSubNav(item)}">
                <i class="iconfont icon-xiala"></i>
              </span>
              <!--<span class="nav-badge">12</span>-->
            </div>
            <div class="nav-sub" v-if="item.sub" :class="{on: isShowSubNav(item)}">
              <router-link :to="sub.path" v-for="(sub, subIndex) in item.sub" :key="subIndex"
                           class="nav-item" :class="{on: isSelectNav(sub)}">
                <span class="nav-title side-txt">{{sub.title}}</span>
                <!--<span class="nav-badge">12</span>-->
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      routers: [
        {
          title: "首页",
          path: "/index",
          icon: "icon-shouye"
        },
        {
          title: "第一测试",
          path: "/first",
          icon: "icon-kaoheguanli"
        },
        {
          title: "第二测试",
          icon: "icon-xiangmuguanli",
          sub: [
            {
              title: "第二测试1",
              path: "/second1"
            },
            {
              title: "第二测试2",
              path: "/second2"
            }
          ]
        },
        {
          title: "第三测试",
          icon: "icon-xiangmuguanli",
          sub: [
            {
              title: "第二测试1",
              path: "/second1"
            },
            {
              title: "第二测试2",
              path: "/second2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    /**
     * 选择菜单
     * @param item
     */
    onSelectNav(item) {
      // 如果没子菜单则直接跳转
      if (!item.sub && item.path) {
        return this.$router.push(item.path);
      }
      // 否则设置是否显示子菜单
      item.showSub = !item.showSub;
    },
    /**
     * 是否打开子菜单
     * @param item
     * @param isIcon
     * @returns {boolean}
     */
    isSelectNav(item, isIcon) {
      if ((!item.sub || this.isShow) && !isIcon) {
        // 非判断子菜单，没有子级，或者打开的状态，直接输出
        return this.$route.path === item.path;
      }
      // 否则判断是否需要打开
      let show = false;
      let routerPath = this.$route.path;
      item.sub.map(sub => {
        if (routerPath === sub.path) {
          show = true;
        }
      });
      return show;
    },
    /**
     * 是否显示打开子菜单
     * @param item
     * @returns {*}
     */
    isShowSubNav(item) {
      // 如果为0则是第一次，设置为有子菜单默认选中则默认打开
      if (typeof item.showSub === "undefined" || item.showSub === 0) {
        this.$set(item, "showSub", this.isSelectNav(item, 1));
      }
      return item.showSub;
    }
  }
};
</script>

<style lang='less' scoped>
.side-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1001;
  width: 60px;
  overflow: hidden;
  background-color: #1f2436;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  .side-txt {
    display: none !important;
  }
  &.on {
    width: 180px;
    .side-txt {
      display: block !important;
    }
    .side-nav .nav-list .nav-badge {
      right: 12px;
      left: auto;
      top: 50%;
      margin-top: -9px;
    }
  }
  .side-wrap {
    position: relative;
    width: 180px;
    height: 100%;
  }
  .logo-wrap {
    overflow: hidden;
    line-height: 60px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    .logo {
      float: left;
      width: 60px;
      height: 60px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    .logo-txt {
      display: block;
      margin-left: 60px;
      font-size: 20px;
      color: #ffffff;
      font-family: PingFangSC-Semibold;
      font-weight: bold;
    }
  }
  .side-main {
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
  }
  .side-nav {
    padding: 8px 0;
    .nav-list {
      color: #ffffff;
      line-height: 44px;
      .nav-item {
        position: relative;
        display: block;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          background: #262c40;
          .icon,
          .nav-select,
          .nav-title {
            opacity: 1;
          }
        }
        &.on {
          color: #ffffff;
          background: #399dfc;
          .icon,
          .nav-title {
            opacity: 1;
          }
          .nav-badge {
            color: #399dfc;
            background: #ffffff;
          }
        }
      }
      .nav-select {
        position: absolute;
        right: 10px;
        top: 0;
        opacity: 0.5;
        transform: rotate(180deg);
        transform-origin: center center;
        transition: all 0.2s ease;
        &.on {
          transform: rotate(0deg);
        }
      }
      .nav-sub {
        max-height: 0;
        overflow: hidden;
        transition: all 0.4s ease;
        &.on {
          max-height: 300px;
        }
      }
      .icon {
        float: left;
        margin: 0 12px 0 18px;
        font-size: 24px;
        opacity: 0.5;
      }
      .nav-title {
        display: block;
        margin: 0 54px;
        font-size: 14px;
        opacity: 0.5;
      }
      .nav-badge {
        position: absolute;
        left: 32px;
        top: 6px;
        width: 24px;
        line-height: 18px;
        font-size: 12px;
        background: #399dfc;
        color: #ffffff;
        border-radius: 24px;
        text-align: center;
        box-sizing: border-box;
        transform: scale(0.82);
      }
    }
  }
}
</style>