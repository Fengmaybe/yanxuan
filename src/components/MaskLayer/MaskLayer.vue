<template>
  <transition name="fade">
  <div v-if="isNeedMask">
    <!--整体使用固定定位-->
    <div class="homeFixedMask">
      <div class="mask"></div>
      <i class="close" @click="removeMask"></i>
      <div class="wrap">
        <div class="modle">
          <div class="title">
            <span class="titleContent">－－ 新人专享礼 －－</span>
          </div>
          <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
          <div class="m-newUserItem">
            <div class="img">
              <img src="http://yanxuan.nosdn.127.net/a1ebcdbeb2c90cc9d57770dec87460d7.jpg?imageView&quality=85&thumbnail=232y232" alt="photo">
            </div>
            <div class="content">
              <div class="itemName">抽屉收纳柜 三层</div>
              <div class="manu">
                <span class="manuTag">让收纳事半功倍</span>
              </div>
              <div class="price">
                <div class="retailPrice">
                  <span>¥</span>
                  <span>69.00</span>
                </div>
                <div class="comparePrice">
                  <span>¥</span>
                  <span>109.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="actCouponBtn">
            <span>
              <span>领券立减¥</span>
              <span>5.20</span>
            </span>
            <div class="linkBtn">查看更多特惠商品</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        isNeedMask: true
      }
    },
    methods:{
      removeMask() {
        this.isNeedMask = false;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .fade-enter-active,.fade-leave-active
    transition opacity .6s
  .fade-enter,.fade-leave-to
    opacity 0
  .homeFixedMask
    position: fixed
    top: 0;
    left: 0
    right: 0
    bottom: 0
    z-index: 100
    .mask
      position: absolute
      top: 0
      left: 0
      z-index: 0
      width: 100%
      height: 100%
      background-color: rgba(0,0,0,.6)
    .close
      position: fixed
      right: 15px
      top: 30px
      z-index: 1
      width: 32px
      height: 32px
      display: inline-block
      vertical-align: middle
      background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
      background-repeat: no-repeat
      background-size cover

    .wrap
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      z-index: 1
      .modle
        width: 315px;
        box-sizing border-box
        height: 346px
        background-color: #fff
        border-radius: 5px
        padding: 26px 22px
        .title
          font-size: 20px
          text-align: center
          .titleContent
            display: inline-block
            position: relative
            font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            font-size: 20px
            text-align: center;

        .subTitle
          margin-top: 8px
          font-size: 12px
          font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
          text-align: center;

        .m-newUserItem
          margin-top: 20px
          background-color: #f4f4f4
          border-radius: 6px
          height: 115px
          width: 100%
          display: flex
          .img
            img
              width: 115px;
              height: 115px;

          .content
            flex: 1;
            padding: 20px 0;
            margin-left: 8px;
            line-height: 1.5;
            color: #333;
            font-size: 16px;
            .itemName
              font-size: 14px;
              font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
              width: 280px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              line-height: 1.5;
              color: #333;

            .manu
              margin-top: 10px
              line-height: 1.5
              font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
              color: #333
              display: block
              font-size: 12px
              .manuTag
                border: 1px solid #7f7f7f
                border-radius: 2px
                padding: 0 2px
                height: 18px
                line-height: 18px
                color: #333
            .price
              line-height: 1.5
              color: #333
              display: block
              margin-top: 12px
              font-size: 12px
              .retailPrice
                color: #b4282d
                font-size: 12px
                line-height: 1.5
                span
                  float: left;
                  color: #b4282d;
                  font-size: 12px;
                  line-height: 1.5
              .comparePrice
                color: #999
                display: inline-block
                margin-left: 6px
                text-decoration: line-through;
                font-size: 12px
                line-height: 1.5
                span
                  color: #999;
                  display: inline-block
                  text-decoration: line-through
                  font-size: 12px
                  line-height: 1.5
        .actCouponBtn
          height: 44px
          background-color: #b4282d
          color: #fff
          font-size: 14px
          margin-top: 20px
          border-radius: 5px
          text-align: center
          line-height: 44px
          span
            color: #fff
            font-size: 14px
            text-align: center
            line-height: 44px
            span
              height: 44px
              background-color: #b4282d
              color: #fff
              font-size: 14px
              margin-top: 24px
              border-radius: 5px
              text-align: center
              line-height: 44px
          .linkBtn
            height: 44px
            border: 1px solid #7F7F7F
            border-radius: 4px
            text-align: center
            line-height: 44px
            font-size: 14px
            margin-top: 12px
            display: block
            color: #333
</style>
