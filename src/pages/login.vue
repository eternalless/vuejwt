<template>
  <div class="hello">
    <div>{{msg}}</div>
    <div @click="login">login</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your login'
    }
  },
  methods:{
    login(){
      console.log(1111)
      this.$http.post('/api/login').then(res => {
          localStorage.setItem('token', res)
          location.replace('/index')
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
