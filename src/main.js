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
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
