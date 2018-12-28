<template>
  <div class="login">
    <el-row :gutter="10">
      <el-col :span="4"> 账号：</el-col>
      <el-col :span="20">
        <el-input
          placeholder="请输入账号"
          v-model="name">
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="4"> 密码：</el-col>
      <el-col :span="20">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="password">
        </el-input>
      </el-col>
    </el-row>
    <el-button type="primary" @click="login" class="logins">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      login() {
        if(!this.name) return
        if(!this.password) return
        if(this.name === 'chen' && this.password === 'chen') {
          this.$router.push('/index')
        } else {
          this.$message.error('账号或密码错了哦！！！');
        }
        // this.$http.post('/api/login').then(res => {
        //   localStorage.setItem('token', res)
        //   location.replace('/index')
        // })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login {
    position: absolute;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #fff;
    padding: 30px;
    .el-row {
      margin-top: 10px;
      line-height: 40px;
    }
    .logins {
      width: 60%;
      margin-top: 50px;
    }
  }
</style>
