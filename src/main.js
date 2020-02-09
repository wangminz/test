import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios';
// // 引入插件
// import MintUI from 'mint-ui';
// // 引入样式文件
// import 'mint-ui/lib/style.css';

// // 安装
// Vue.use(MintUI);
Vue.config.productionTip = false
// 安装axios
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
