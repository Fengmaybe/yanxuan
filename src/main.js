// 入口js
import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store';

//执行mock数据
import './mock/mockServer';

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
