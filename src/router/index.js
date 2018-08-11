/*
路由器模块
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Category from '../pages/Category/Category';
import ShopCart from '../pages/ShopCart/ShopCart';
import Personal from '../pages/Personal/Personal';


//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,

    },
    {
      path: '/detail',
      component: Detail,

    },
    {
      path: '/category',
      component: Category,

    },
    {
      path: '/shopcart',
      component: ShopCart,

    },
    {
      path: '/personal',
      component: Personal,

    },
    {
      path: '/',
      redirect: Home
    },
  ]
});
