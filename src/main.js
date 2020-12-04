
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
//  扫码router包下的路由
import router from './router'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//  导入Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);

//  引用axios
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App)
})
