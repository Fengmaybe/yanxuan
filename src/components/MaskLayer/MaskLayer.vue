<template>
  <div>
    <!--整体使用固定定位-->
    <div class="m-newWapUserGiftModal">
      <div class="mask"></div>
      <i class="close"></i>
      <div class="wrap">
        <div class="modle">
          <div class="title">
            <span class="titleContent">－－ 新人专享礼 －－</span>
          </div>
          <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
          <div class="m-newUserItem">
            <div class="img">
              <img src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&amp;quality=85&amp;thumbnail=232y232" alt="">
            </div>
            <div class="content">
              <div class="itemName">花样年华女士小白鞋</div>
              <div class="manu">
                <i class="manuTag">舒适透气，时尚经典</i>
              </div>
              <div class="price">
                <div class="retailPrice">
                  <span>¥</span>
                  <span>259.00</span>
                </div>
                <div class="comparePrice">
                  <span>¥</span>
                  <span>899.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="actCouponBtn">
            <span>
              <span>领券立减¥</span>
              <span>60.00</span>
            </span>
            <div class="linkBtn">查看更多特惠商品</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .m-newWapUserGiftModal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
    }
    .close {
      position: fixed;
      right: 15px;
      top: 30px;
      z-index: 1;
      width: 32px;
      height: 32px;
      display: inline-block;
      vertical-align: middle;
      background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
      background-repeat: no-repeat;
      background-size cover
    }
    .wrap{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 1;
      .modle{
        width: 315px;
        box-sizing border-box
        height: 346px;
        background-color: #fff;
        border-radius: 5px;
        padding: 26px 22px;
        .title{
          font-size: 20px;
          text-align: center;
          .titleContent{
            display: inline-block;
            position: relative;
            font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            font-size: 20px;
            text-align: center;
          }
        }
        .subTitle{
          margin-top: 8px;
          font-size: 12px;
          font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
          text-align: center;
        }
        .m-newUserItem{
          margin-top: 20px;
          background-color: #f4f4f4;
          border-radius: 6px;
          height: 115px;
          width: 100%;
          display: flex;
          .img{
            img{
              width: 115px;
              height: 115px;
            }
          }
          .content{
            flex: 1;
            padding: 43px 0;
            margin-left: 8px;
            line-height: 1.5;
            color: #333;
            font-size: 14px;
            .itemName{
              font-size: 12px;
              width: 280px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              line-height: 1.5;
              color: #333;
            }
            .manu{
              margin-top: 15px;
              line-height: 1.5;
              color: #333;
              display: block;
              font-size: 24px;
              .manuTag{
                border: 1px solid #7f7f7f;
                border-radius: 2px;
                padding: 0 2px;
                height: 18px;
                line-height: 18px;
                color: #333;
              }
            }
            .price{
              line-height: 1.5;
              color: #333;
              display: block;
              margin-top: 20px;
              font-size: 12px;
              .retailPrice{
                color: #b4282d;
                font-size: 12px;
                line-height: 1.5;
                span{
                  float: left;
                  color: #b4282d;
                  font-size: 12px;
                  line-height: 1.5;
                }
              }
              .comparePrice{
                color: #999;
                display: inline-block;
                margin-left: 8px;
                text-decoration: line-through;
                font-size: 12px
                line-height: 1.5;
                span{
                  color: #999;
                  display: inline-block;
                  margin-left: 8px
                  text-decoration: line-through;
                  font-size: 12px;
                  line-height: 1.5;
                }
              }
            }
          }
        }
        .actCouponBtn{
          height: 44px;
          background-color: #b4282d;
          color: #fff;
          font-size: 14px;
          margin-top: 40px
          border-radius: 5px
          text-align: center;
          line-height: 44px;
          span{
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 44px;
            span{
              height: 44px;
              background-color: #b4282d;
              color: #fff;
              font-size: 14px;
              margin-top: 24px;
              border-radius: 5px;
              text-align: center;
              line-height: 44px;
            }
          }
          .linkBtn{
            height: 22px;
            border: 1px solid #7F7F7F;
            border-radius: 4px;
            text-align: center;
            line-height: 22px;
            font-size: 14px;
            margin-top: 12px;
            display: block;
            color: #333;
          }
        }
      }
    }
  }

</style>
