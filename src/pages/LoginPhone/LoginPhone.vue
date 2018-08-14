<template>
  <div>
    <DetailHeader />
    <div class="loginWrap">
      <div class="view">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
        </div>
        <div class="userBox">
          <section class="login_message">
            <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone">
          </section>
          <section class="login_verification">
            <input type="text" maxlength="8" placeholder="请输入验证码" v-model="code">
            <div class="getWrap">
              <a class="getsmscode">获取验证码</a>
            </div>
          </section>
          <section class="login_hint">
            <span>遇到问题？</span>
            <span>使用密码验证登录</span>
          </section>
        </div>
        <div class="loginWarp" >
          <div class="phoneLogin" @click="goLogin">
            <span>登录</span>
          </div>
          <div class="msgLogin" @click="goHome">
            <span>其他方式登录</span>
          </div>

        </div>
        <div class="register" @click="$router.replace('/personal')">
          注册账号>>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox ,Indicator ,Toast } from 'mint-ui';
  import DetailHeader from '../../components/DetailHeader/DetailHeader';
  export default {
    data () {
      return{
        phone:'',
        code:'',
      }
    },
    components:{
      DetailHeader
    },
    methods:{
      goLogin () {
          const {code,phone} = this;
          if(!(/^1[34578]\d{9}$/.test(phone))) {
            MessageBox.alert('手机号格式不正确', '提示');
            this.phone='';
            this.code='';
            return
          } else if(!/^\d{6}$/.test(code)) {
            MessageBox.alert('主人，验证码必须6位咯', '提示');
            this.code='';
            return
          }else{
            Indicator.open();
            Indicator.open({
              text: '跳转主页',
              spinnerType: 'fading-circle'
            });
            setTimeout(()=>{
              Indicator.close();
              this.$router.replace('/home');
            },2000)
          }
      },
      goHome() {
        Indicator.open();
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'fading-circle'
        });
        setTimeout(()=>{
          Indicator.close();
          this.$router.replace('/personal');
        },3000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginWrap
    width 100%
    margin-top 60px
    box-sizing border-box
    padding 0 15px
    display flex
    justify-content center
    .view
      display flex
      flex-direction column
      justify-content center
      align-items center
      .logo
        width 100%
        height 32px
        padding-top 12px
        text-align center
        img
          width 96px
          height 32px
      .userBox
        padding-top 40px
        .login_message
          margin-bottom: 10px
          border-bottom 1px solid lightgrey
          border-radius: 2px;
          display: block;
          width: 100%;
          height: 40px
          line-height: 40px
          overflow: hidden;
          font-size: 16px
          color: #fff;
          vertical-align: middle;
          text-align: center;
          margin-top 10px
          input
            width: 291px
            height: 22.5px
            font-size: 16px
            line-height: 22.5px
            margin: 6px 0;
            padding-left: 0;
            -webkit-tap-highlight-color: transparent;
            letter-spacing: normal;
            outline: none;
          &:-webkit-autofill
            -webkit-box-shadow:0 0 0 100px white inset
            -webkit-text-fill-color: #666;
          &:-webkit-autofill:focus
            -webkit-box-shadow:0 0 0 100px white inset
            -webkit-text-fill-color: #666
        .login_verification
          margin-bottom: 10px
          border-bottom 1px solid lightgrey
          border-radius: 2px;
          display: block;
          width: 100%;
          height: 40px
          line-height: 40px
          overflow: hidden;
          font-size: 16px
          color: #fff;
          vertical-align: middle;
          text-align: center;
          margin-top 10px
          position relative
          input
            width: 291px
            height: 22.5px
            font-size: 16px
            line-height: 22.5px
            margin: 6px 0;
            padding-left: 0;
            -webkit-tap-highlight-color: transparent;
            letter-spacing: normal;
            outline: none;
          &:-webkit-autofill
            -webkit-box-shadow:0 0 0 100px white inset
            -webkit-text-fill-color: #666;
          &:-webkit-autofill:focus
            -webkit-box-shadow:0 0 0 100px white inset
            -webkit-text-fill-color: #666
          a
            display: inline-block;
            width: 66px;
            height: 18px;
            text-align: center;
            color: #333;
            font-size: 12px;
            line-height: 18px;
            border: 1px solid #7F7F7F;
            border-radius: 4px;
            position absolute
            right: 0
            top 10px

        .login_hint
          padding 14px 0
          display flex
          justify-content space-between
          span
            font-size 14px
            color #333
            line-height 14px
      .loginWarp
        width 375px
        .phoneLogin
          margin-top 20px
          width 335px
          height 46px
          margin-left 20px
          margin-right 20px
          margin-bottom 20px
          border 1px solid #b4282d
          background-color #B4282D
          border-radius 3px
          display flex
          justify-content center
          align-items center
          color white
          font-size 14px
        .msgLogin
          width 335px
          height 46px
          margin-left 20px
          margin-right 20px
          margin-bottom 20px
          border 1px solid #b4282d
          border-radius 3px
          display flex
          justify-content center
          align-items center
          color #b4282d
          font-size 14px
      .register
        font-size 14px
        color #333
        display flex
        justify-content center
        align-items center

</style>
