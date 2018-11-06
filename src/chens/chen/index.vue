<template>
<div class="chen-search-pager">
  <section class="search-pager-warp">
    <router-link :to="option.back" class="router-link">
      <i class="el-icon-back"></i>
      <span class="title">{{this.option.title}}</span>
    </router-link>
    <div class="tools-warp" v-if="tools">
        <el-button  v-for="(item, index) in tools" :key="index" @click="btnClick(item)">
          <i :class="iconClass(item)"></i>{{item.label}}
        </el-button>
    </div>
  </section>
</div>
</template>

<script>
  export default {
    name: "chen",
    props: {
      option: {
        type: Object,
        default: () => ({})
      },
      tools: Array
    },
    data () {
      return {

      }
    },
    methods: {
      btnClick (item) {
        item.func && item.func(item)
      },
      iconClass (item) {
        return 'el-icon-' + item.icon
      }
    }
  }
</script>

<style lang="less" scoped>
  .chen-search-pager {
    .search-pager-warp {
      padding: 10px 20px;
      line-height: 40px;
      border-bottom: 2px solid #fff;
      .router-link {
        font-size: 18px;
        i {
          font-size: 15px;
          font-weight: 700;
          color: #cc0b8b;
        }
        .title {
          color: #333;
          font-size: 16px;
          font-weight: 700;
          padding-left: 6px;
        }
      }
      .tools-warp {
        display: inline-block;
        float: right;
        &:after {
          clear: both;
        }
      }
      .el-button {
        border: none;
        background: none;
        color: #cc0b8b;
      }

    }
  }
</style>
