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
import InterLayer from '../pages/InterLayer/InterLayer';


//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{
        showFooterNav:true
      }

    },
    {
      path: '/detail',
      component: Detail,
      meta:{
        showFooterNav:true
      }

    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFooterNav:true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        showFooterNav:true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        showFooterNav:true
      }
    },
    {
      path: '/interlayer',
      component: InterLayer
    },
    {
      path:'',
      redirect:'/interlayer'
    }
  ]
});
