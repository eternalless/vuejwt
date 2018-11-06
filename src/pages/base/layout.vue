<template>
  <div class="app">
    <sideBar/>
    <section class="main">
      <headers/>
      <section class="page">
        <router-view/>
      </section>
    </section>
  </div>
</template>

<script>
    import sideBar from './side-bar.vue'
    import headers from './headers.vue'
    export default {
        components:{
           sideBar,
           headers
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang='less' scoped>
.app {
  .main {
    position: absolute;
    left: 180px;
    right: 0;
  }
}
</style>