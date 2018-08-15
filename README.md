## font-family 个人钟爱写法
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;

## input标签取消高亮
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

## mintUI的使用套路要牢记
    1.下载miniUI npm install --save mint-ui
    2.实现按需打包下载依赖 npm install --save-dev babel-plugin-component
    3.按需打包需修改babel配置
      "plugins": ["transform-runtime",["component", [
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]]]
    4.注意标签组件还是非标签组件，标签组件需全局注册组件

## 左右留白
    https://blog.csdn.net/weixin_41978390/article/details/79977107

## 修改登录页面的input黄色的颜色（choorm记住密码）两种方式失效
    解决方式1： autocomplete="off"
    解决方式2：

## 修改路由跳转的title
    1.在route中配置
        meta:{
                showFooterNav:false,
                title:'网易严选 - 个人中心',
              }
    2.在main.js用router.beforeEach
        router.beforeEach((to, from, next) => {
          /* 路由发生变化修改页面title */
          if (to.meta.title) {
            document.title = to.meta.title
          }
          next()
        });
    3.没有第三步了



## 项目描述
    1)此项目为购物App (SPA)
    2)包括首页商品，识物商品，分类，购物车，个人中心，登录等多个子模块
    3)使用Vue全家桶+ES6+Webpack技术
    4)采用模块化、组件化、工程化的模式开发

## 技术选型
    vue
    vue-router
    vuex
    mint-ui
    vue-lazyload
    better-scroll
    swiper
    vue2-countdown
    axios
    mockjs

## 前后台交互
    mock

## 模块化
    ES6

## 项目构建
    webpack
    vue-cli
    eslint

## css预编译器
    stylus

## vue组件
    APP(FooterNav + 路由)
