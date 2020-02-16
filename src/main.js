import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import axios from 'axios';
import MintUI from 'mint-ui'
// 引入样式
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false
// 安装axios
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
