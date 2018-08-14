<template>
  <div id="app">
    <!--优化1：缓存路由组件对象-->
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <FooterNav v-if="$route.meta.showFooterNav"/>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav';
  export default {
    components:{
      FooterNav
    },
    data () {
     return {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
