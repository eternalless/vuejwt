import axios from 'axios'

const http = axios.create({
  // timeout:10000,
  // baseURL: '',
  // method: 'post'
})
// http request 拦截器
// 每次请求都为http头增加Authorization字段，其内容为Token
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = token;
      // config.headers['token'] = token
    }
    console.log(config)
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
http.interceptors.response.use(response => {
  let data = response.data
  if (data.code === 200) {
    return data.data
  }
  if (data.code === 401) {
    window.location.href = '/login'
  }
  // let msg = data.code ? data.msg : `${response.config.headers['method']} : ${data.error}`
  // data.message = msg
  return Promise.reject(data)
}, error => {
  // if (error.response) {
  //   switch (error.response.status) {
  //     case 401:
  //       // 这里写清除token的代码
  //       localStorage.removeItem(token);
  //       router.replace({
  //         path: 'login',
  //         query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
  //       })
  //   }
  // }
  // return Promise.reject(error.response.data)
  // if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
  //   error.msg = '请求超时，请重试'
  // }
  return Promise.reject(error)
})

export default http
