<template>
  <div class="hello">
    <chen :option="option"
    :tools="tools"></chen>
    <h1>{{ msg }}</h1>
    <h2>home</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'home',
        option: {
          title: '没想到吧',
          back: '/first'
        },
        tools: [
          {
            label: '刷新',
            icon: 'reset',
            func: () => { console.log('没想到吧')}
          },
          {
            label: '新增',
            icon: 'plus'
          },
          {
            label: '删除',
            icon: 'delete'
          }
        ]
      }
    },
    beforeMount () {
      // this.getData()
    },
    methods: {
      getData(){
        let that = this
        this.$http.get('/api/index').then(res => {
          // console.log(res)
          that.msg = res
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
