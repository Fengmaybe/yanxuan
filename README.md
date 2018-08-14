## font-family 个人钟爱写法
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;

## input标签取消高亮
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

## miniUI的使用套路要牢记
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
