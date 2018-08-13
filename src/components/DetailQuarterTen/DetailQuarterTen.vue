<template>
  <div>
    <div class="QuarterTen">
      <div class="title">十点一刻</div>
      <div class="Wrap">
        <div class="scrollWrap">
          <div class="scroll-item" v-for="(item,index) in tenfifteen" :key="index">
            <div class="line-title">
              <span class="inner1">- 今日话题 -</span>
            </div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">
              <div class="inner">
                <div class="avatars">
                  <div class="avatar" v-for="(avatarItem,index) in item.participantAvatar" :key="index">
                    <img :src="avatarItem" alt="">
                  </div>
                  <!--三点头像-->
                  <div class="avatar1">
                    <div class="doc"></div>
                    <div class="doc"></div>
                    <div class="doc"></div>
                  </div>
                </div>
                <div class="join">
                  <span>{{item.participantNum}}</span>
                  <span>人参与话题</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    props:{
      tenfifteen:Array
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll('.Wrap',{
          click:true,
          scrollX:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .QuarterTen
    overflow: hidden
    padding: 15px 20px
    height: 245px
    background-color: #fff
    margin-top 10px
    .title
      font-size 18px
      font-weight 500
      font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
      height 40px
      display flex
      justify-content center
      align-items center
    .Wrap
      display: flex;
      .scrollWrap
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translate3d(0px, 0px, 0px);
        transition-duration: 0ms;
        .scroll-item
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          background-size: 100% 90%;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png);
          position: relative
          width: 290px
          height: 206px
          padding: 19pxm 20px 39px
          margin-right: 15px
          text-align: center
          color: #333;
          .line-title
            display: flex
            align-items: center
            justify-content: center
            margin-bottom: 20px
            .inner1
              padding-top 20px
              margin: 10 4px
              font-size: 12px
              color: #7f7f7f
          .title
            font-size: 18px
            font-weight: 700
          .desc
            font-size: 16px
            line-height: 1.5
            display: block
            overflow: hidden
            text-overflow: ellipsis
          .joinInfo
            position: absolute
            bottom: 50px
            left 0
            right 0
            margin auto
            width: 215px
            text-align: center
            .inner
              display: inline-block
              overflow: hidden
              .avatars
                float: left
                margin-right: 8px
                .avatar
                  float: left
                  img
                    position: relative
                    float: left;
                    height: 24px
                    width: 24px
                    border: 1px solid #fff
                    border-radius: 50%
                    z-index: 4

                .avatar1
                  background-color: #d9d9d9;
                  display: flex
                  justify-content: center
                  align-items: center
                  border-radius: 50%
                  position: relative
                  float: left
                  height: 24px
                  width: 24px
                  overflow: hidden
                  border: 1px solid #fff
                  .doc
                    width: 3px
                    height: 3px
                    border-radius: 50%
                    margin-right: 2px
                    background-color: #fff

              .join
                float: left;
                text-align: left;
                line-height: 24px
                font-size: 12px
                color: #7f7f7f
                span
                  text-align: left
                  line-height: 24px
                  font-size: 12px
                  color: #7f7f7f
</style>
