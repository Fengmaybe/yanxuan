<template>
  <div>
    <div class="g-bd">
      <div class="g-row">
        <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
        <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
      </div>
      <div class="g-row">
        <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
        <router-link to="/home" class="goHome">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .g-bd
    background-color #eee
    height 667px
    position relative
    flex-direction column-reverse
    justify-content flex-end
    align-items flex-start
    .g-row
      position absolute
      &:nth-child(2)
        bottom 0
      &:nth-child(1)
        bottom 215px
      img
        width 100%
      .goHome
        position absolute
        bottom 86px
        left 100px



</style>
