<template>
  <div id="app">
    <router-view></router-view>
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
