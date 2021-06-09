import Toast from './toast'
let test = {}
test.install = function (Vue, options) {
  Vue.component(Toast.name,Toast) 
}
export default test