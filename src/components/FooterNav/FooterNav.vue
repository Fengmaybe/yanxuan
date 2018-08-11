<template>
  <div class="FooterContainer">
    <div class="Footer">
      <div class="FooterItem" v-for="(nav,index) in navInfos" :key='index'
        @click="$router.replace(nav.to)" :class="{active: nav.to === $route.path}">
      <span class="iconfont" :class="nav.className"></span>
      <span class="title">{{nav.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navInfos: [
          { title: '首页', to: '/home', className:'icon-shouye' },
          { title: '识物', to: '/detail' , className:'icon-fangkuaidagou-weixuanzhong'},
          { title: '分类', to: '/category' , className:'icon-chouti'},
          { title: '购物车', to: '/shopcart', className:'icon-gouwuche'},
          { title: '个人', to: '/personal', className:'icon-renwu' }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  $rem = 750/10rem
  .FooterContainer
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    position: fixed;
    bottom: 0;
    z-index: 20;
    background-color: #f5f5f5;
    height: 49px;
    width: 100%;
  .Footer
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  .FooterItem
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &.active
      color: #b4282d;
  .title
    font-size: 14px;
    margin-top: 4px;
  .iconfont
    font-size: 22px;
</style>
