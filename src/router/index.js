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
      component: LoginEmail,
      meta:{
        title:'网易严选-邮箱登录'
      }
    },
    {
      path: '/loginphone',
      component: LoginPhone,
      meta:{
        title:'网易严选-手机登录'
      }
    },
    {
      path: '/home',
      component: Home,
      meta:{
        showFooterNav:true,
        title:'网易严选 - 以严谨的态度，为中国消费者甄选天下优品',
      }

    },
    {
      path: '/detail',
      component: Detail,
      meta:{
        showFooterNav:true,
        title:'网易严选 - 发现识物',
      }

    },
    {
      path: '/category',
      component: Category,
      meta:{
        showFooterNav:true,
        title:'网易严选 - 分类介绍',
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta:{
        showFooterNav:true,
        title:'网易严选 - 购物车',
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta:{
        showFooterNav:false,
        title:'网易严选 - 个人中心',
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
