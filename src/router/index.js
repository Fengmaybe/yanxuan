/*
路由器模块
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

/*import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Category from '../pages/Category/Category';
import ShopCart from '../pages/ShopCart/ShopCart';
import Personal from '../pages/Personal/Personal';*/
import InterLayer from '../pages/InterLayer/InterLayer';
import LoginEmail from '../pages/LoginEmail/LoginEmail';
import LoginPhone from  '../pages/LoginPhone/LoginPhone';


/*路由组件懒加载-->配置的是组件函数而非组件，按需加载*/
const Home = () => import('../pages/Home/Home');
const Detail = () => import('../pages/Detail/Detail');
const Category = () => import('../pages/Category/Category');
const ShopCart = () => import('../pages/ShopCart/ShopCart');
const Personal = () => import('../pages/Personal/Personal');

//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/loginemail',
      component: LoginEmail
    },
    {
      path: '/loginphone',
      component: LoginPhone
    },
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
        showFooterNav:false
      }
    },
    {
      path: '/interlayer',
      component: InterLayer
    },
    {
      path:'/',
      redirect:'/interlayer'
    }
  ]
});
