// 入口js
import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store';

import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

//执行mock数据
import './mock/mockServer';

//声明使用插件
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
