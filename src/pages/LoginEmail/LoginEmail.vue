<template>
  <div>
    <DetailHeader />
    <div class="loginWrap">
      <div class="view">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
        </div>
        <div class="userBox">
          <section>
            <section class="login_message">
              <input type="text" maxlength="25" placeholder="请输入邮箱地址" v-model="email" autocomplete="off">
            </section>
            <section class="login_verification">
              <input type="text" maxlength="12" placeholder="密码" v-if="showPwd" v-model="pwd" autocomplete="off">
              <input type="password" maxlength="12" placeholder="密码" v-else v-model="pwd" autocomplete="off">
              <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                <div class="switch_circle" :class="{right: showPwd}"></div>
                <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
              </div>
            </section>
            <section class="login_message">
              <input type="text" maxlength="4" placeholder="验证码" v-model="captcha" autocomplete="off">
              <img class="get_verification" src="./images/captcha.svg" alt="captcha"
                    style="width: 150px ; margin-top: 5px;right: 20px">
            </section>
            <section class="login_hint">
              <span>遇到问题？</span>
              <span>使用密码验证登录</span>
            </section>
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
        email:'',
        pwd:'',
        captcha:'',
        showPwd:false,
      }
    },
    components:{
      DetailHeader
    },
    methods:{
      goLogin () {
        const {email,pwd,showPwd,captcha} = this;
        if(!email) {
          MessageBox.alert('主人，邮箱不能为空咯', '邮箱错误提示');
          return
        } else if(!pwd) {
          MessageBox.alert('主人，密码不能为空咯', '密码错误提示');
          return
        }else if(!captcha) {
          MessageBox.alert('主人，验证码不能为空咯', '验证码错误提示');
          return
        }else if(captcha.toLowerCase() !== 'wk3v') {
          MessageBox.alert('主人，验证码不正确耶', '验证码错误提示');
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
          text: '正在跳转',
          spinnerType: 'fading-circle'
        });
        setTimeout(()=>{
          Indicator.close();
          this.$router.replace('/personal');
        },2000)
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
          margin-top 27px
          border-bottom 1px solid lightgrey
          input
            width: 291px
            height: 25px
            font-size: 18px
            line-height: 25px
            margin: 6px 0;
            padding-left: 0;
            -webkit-tap-highlight-color: transparent;
            letter-spacing: normal;
            outline: none;
          &:-webkit-autofill
            -webkit-box-shadow:0 0 0 1000px white inset !important
            -webkit-text-fill-color: #666;
          &:-webkit-autofill:focus
            -webkit-box-shadow:0 0 0 1000px white inset !important
            -webkit-text-fill-color: #666
          .get_verification
            position absolute
            top 46%
            right 60px
            transform translateY(-50%)
            border 0
            color #ccc
            font-size 16px
            &img
              width 100px
            &>input
              width: 291px
              height: 22.5px
              font-size: 16px
              line-height: 22.5px
              margin: 6px 0;
              padding-left: 0;
              -webkit-tap-highlight-color: transparent;
              letter-spacing: normal;
              outline: none;
            &.right_phone
              color: black
        .login_verification
          position relative
          margin-top 16px
          height: 40px
          font-size 14px
          background #fff
          border-bottom 1px solid lightgrey
          input
            width: 291px
            height: 25px
            font-size: 18px
            line-height: 25px
            margin: 6px 0;
            padding-left: 0;
            -webkit-tap-highlight-color: transparent;
            letter-spacing: normal;
            outline: none;
          &:-webkit-autofill
            -webkit-box-shadow:0 0 0 10000px white inset !important
            -webkit-text-fill-color: #666;
          &:-webkit-autofill:focus
            -webkit-box-shadow:0 0 0 10000px white inset !important
            -webkit-text-fill-color: #666
          .switch_button
            font-size 12px
            border 1px solid #ddd
            border-radius 8px
            transition background-color .3s, border-color .3s
            padding 0 6px
            width 35px
            height 16px
            line-height 16px
            color #fff
            position absolute
            top 50%
            right 10px
            transform translateY(-50%)
            &.off
              background #fff
              .switch_text
                float right
                color #ddd
                font-size 15px
                font-weight bolder
                line-height 10px

            &.on
              background #b4282d
            > .switch_circle
              position absolute
              top -1px
              left -1px
              width 15px
              height 15px
              border 1px solid #ddd
              border-radius 50%
              background #fff
              box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
              transition transform .3s
              &.right
                transform translateX(32px)
            > .switch_text
              font-size: 14px
        .login_hint
          padding-top 14px
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
