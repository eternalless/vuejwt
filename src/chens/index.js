import Chen from './chen/index'
const components = [
  Chen
]
// 遍历组件
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default install