<template>
  <div class="MainWrap">
    <DetailHeader/>
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="loginWarp">
    <div class="phoneLogin">
      <i class="phoneIcon"></i>
      <span>手机帐号登录</span>
    </div>
    <div class="msgLogin">
      <i class="msgIcon"></i>
      <span>邮箱帐号登录</span>
    </div>

    </div>
    <div class="register">
      手机号快捷注册>>
    </div>
    <div class="contact">
      <div class="contactWrap">
      <span class="wechat">
        <i class="iconfont icon-changyonglogo28"></i>
        微信</span>
      <span class="line">|</span>
      <span class="qq">
        <i class="iconfont icon-qq"></i>
        QQ</span>
      <span class="line">|</span>
      <span class="weibo">
        <i class="iconfont icon-weibo"></i>
        微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  import DetailHeader from '../../components/DetailHeader/DetailHeader';

  export default {
    components: {
      DetailHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .MainWrap
    background-color #F2F5F4
    height 100%
  .logo
    margin-top 44px
    width 100%
    height 204px
    display flex
    justify-content center
    align-items center
    img
      display inline-block
      width 67 * 2px
      height 23 * 2px
  .loginWarp
    width 100%
    padding 0 20px
    .phoneLogin
      width 335px
      height 46px
      margin-bottom 20px
      border 1px solid #b4282d
      background-color #B4282D
      border-radius 3px
      display flex
      justify-content center
      align-items center
      color white
      font-size 14px
    .phoneIcon
      display: inline-block;
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
      background-repeat: no-repeat;
      background-size: 20px 145px
      background-position: 0 -25px
      width: 20px
      height: 20px
      color white
      padding-right 6px
    .msgLogin
      width 335px
      height 46px
      margin-bottom 20px
      border 1px solid #b4282d
      border-radius 3px
      display flex
      justify-content center
      align-items center
      color #b4282d
      font-size 14px
    .msgIcon
      display: inline-block;
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
      background-repeat: no-repeat;
      background-size: 20px 145px
      background-position: 0 0
      width: 20px
      height: 20px
      color white
      padding-right 6px
  .register
    font-size 14px
    color #333
    display flex
    justify-content center
    align-items center

  .contact
    background-color #F2F5F4
    height 268px
    width 100%
    position relative
  .contactWrap
    display flex
    bottom 40px
    left 0
    right 0
    margin auto
    justify-content center
    margin-top 200px

    .wechat
      font-size 15px
      line-height 20px
      color #333
      padding 0 8px
      .iconfont
        font-size: 18px;
    .qq
      font-size 15px
      line-height 20px
      color #333
      padding 0 8px
      .iconfont
        font-size: 16px;
    .weibo
      font-size 15px
      line-height 20px
      color #333
      padding 0 8px
      .iconfont
        font-size: 16px;






</style>
