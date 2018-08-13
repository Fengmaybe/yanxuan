<template>
  <div id="scrollContainer">
    <div class="homeContainer">
      <MaskLayer />
      <!--home的头部-->
      <div class="homeHeader">
        <!--logo+搜索框-->
        <div class="hd_Wrap">
          <a class="logo"></a>
          <div class="search">
            <div class="sContent">
              <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
              <span>搜索商品, 共9981款好物</span>
            </div>
          </div>
        </div>
        <!--tab列表-->
        <div class="hdScorllTab">
          <div class="hdScorllItem" ref="hdScorllItem">
            <span @click="selectIndex(index)" v-for="(item,index) in data" :class="{active: tabIndex === index}">{{item.name}}</span>
          </div>
        </div>
      </div>
      <!--home的轮播-->
      <div class="swiper-container" v-if="banner.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img :src="item.picUrl">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!--轮播底下的玩意tips-->
      <div class="tips">
        <div class="item" v-for="(item,index) in home.policyDescList" :key="index">
          <img :src="item.icon">
          <span>{{item.desc}}</span>
        </div>
      </div>
      <!--品牌供货商div-->
      <div class="home_brand">
        <div class="brand">
          <div class="brand-Wrap">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-yuanjiantou1"></i>
          </div>
        </div>
        <div class="brand-itemWrap">
          <div class="brand-item">
            <h4>Nine West制造商</h4>
            <div class="title">
              536元起
            </div>
            <div class="goNew">上新</div>
          </div>
          <div class="brand-item">
            <h4>RainBow箱</h4>
            <div class="title">
              699元起
            </div>
            <div class="goNew">上新</div>
          </div>
          <div class="brand-item">
            <h4>海外制造商</h4>
            <div class="title">
              9.9元起
            </div>
            <div class="goNew">上新</div>
          </div>
          <div class="brand-item">
            <h4>芙尔达品牌</h4>
            <div class="title">
              89.9元起
            </div>

          </div>
        </div>
      </div>
      <!--新品专栏-->
      <div class="home-newItems">
        <header class="newItemsWrap">
          <span>人气推荐·好物精选</span>
          <div id="all">查看全部 ></div>
        </header>
        <div class="home-goodList">
          <div class="list">
            <div class="goodList-item" v-for="(item,index) in home.newItemList" :key="index">
              <div class="wrap">
                <img :src="item.primaryPicUrl" alt="newProduct">
              </div>
              <div class="title">
                限时购
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">RMB: {{item.retailPrice}}</div>
            </div>
          </div>
        </div>
      </div>
      <!--专题精选-->
      <div class="home_topic">
        <div class="topicImg">
          <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="专题精选">
        </div>
        <div class="topic_wrap">
          <div class="topic_content">
            <span>专题精选&nbsp;</span>
            <i class="iconfont icon-yuanjiantou1"></i>
          </div>
        </div>
      </div>
      <!--专题商品横滚-->
      <div class="home_imgWrap">
        <div class="home_imgScroll">
          <div class="imgItem" v-for="(item,index) in home.topicList" :key="index">
            <img :src="item.itemPicUrl" alt="topicImgList">
            <div class="content">
              <h4>{{item.title}}</h4>
              <span>{{item.priceInfo}}元起</span>
            </div>
            <div class="desc">{{item.subtitle}}</div>
          </div>
        </div>
      </div>
      <!--定时器抢购-->
      <div class="timerWrap">
        <div class="timerLeft">
          <p class="title">严 选 限 时 购</p>
          <div class="h_m_s">
            <span class="hour">{{hour}}</span>
            <span class="colon">:</span>
            <span class="min">{{min}}</span>
            <span class="colon">:</span>
            <span class="sec">{{sec}}</span>
          </div>
          <p class="nextTimer">下一场 14:00 开始</p>
        </div>
        <div class="timerRight">
          <img
            src="http://yanxuan.nosdn.127.net/366713b30b7328ab978dc65b9551bd49.png?imageView&quality=85&thumbnail=330x330"
            alt="限时抢购">
          <span class="price">
            <span class="priceFont"> &nbsp;￥36</span>
          </span>
        </div>
      </div>
      <!--组件：GoodThings-->
      <HomeGoodThings :cateList="home.cateList"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import 'swiper/dist/css/swiper.css';
  import BScroll from 'better-scroll';
  import Swiper from 'swiper';

  import HomeGoodThings from '../../components/HomeGoodThings/HomeGoodThings';
  import MaskLayer from '../../components/MaskLayer/MaskLayer';

  export default {
    data() {
      return {
        tabIndex: 0,
        hour:"",
        min:"",
        sec:"",
      }
    },
    components: {
      HomeGoodThings,
      MaskLayer
    },
    mounted() {
      //获取数据(tab选项)
      this.$store.dispatch('getData', () => {
        //数据拿到
        this.$nextTick(() => {
          //界面渲染
          this._initScorllTabAndNew();
          //开启倒计时
          this._countTime();
        });
      });

      //获取轮播图数据
      this.$store.dispatch('getBanner', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            effect: "fade",
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              //type: 'bullets',
              //type: 'fraction',
              //type : 'progressbar',
              //type : 'custom',
            },
            autoplay: {
              autoplay: true,
              delay: 3000
            },
          })
        })
      })

      //获取home的数据
      this.$store.dispatch('getHome', () => {
        //数据拿到
        this.$nextTick(() => {
          //界面渲染
          this._initScorllTopic();
        });
      });
    },
    computed: {
      ...mapState(['data', 'banner', 'home'])
    },
    methods: {
      //滚动(tab列表滚，新品首发滚)
      _initScorllTabAndNew() {
        new BScroll('.hdScorllTab', {
          click: true,
          scrollX: true
        });
        new BScroll('.home-goodList', {
          click: true,
          scrollX: true
        });
      },
      //滚动(专题滚)
      _initScorllTopic() {
        new BScroll('.home_imgWrap', {
          click: true,
          scrollX: true
        });
      },
      //tab点选
      selectIndex(index) {
        this.tabIndex = index;
      },
      //倒计时
      _countTime() {
        //获取当前时间
        let date = new Date();
        let now = date.getTime();
        //设置截止时间
        let endDate = new Date("2018-10-10 23:23:23");
        let end = endDate.getTime();
        //时间差
        let leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        let d, h, m, s;
        if (leftTime >= 0) {
          d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
          h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
          m = Math.floor(leftTime / 1000 / 60 % 60);
          s = Math.floor(leftTime / 1000 % 60);
        }
        //更新本组件中的状态
        if (h < 10) {
          this.hour=`0${h}`;
        } else {
          this.hour=`${h}`;
        }
        if (m < 10) {
          this.min=`0${m}`;
        } else {
          this.min=`${m}`;
        }
        if (s < 10) {
          this.sec=`0${s}`;
        } else {
          this.sec=`${s}`;
        }
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(this._countTime, 1000);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  #scrollContainer
    width 100%
    overflow hidden
    margin-bottom 50px

  .homeContainer
    width 100%
    overflow hidden
    background #F4F4F4
    .homeHeader
      background #fff
      position fixed
      overflow hidden
      z-index 10
      width 100%
      top 0
      .hd_Wrap
        background: #ffffff;
        padding: 16px;
        width: 100%;
        height: 75 /$rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo
          display inline-block
          width: 18%;
          height 20px
          background-image url("./images/logo.png")
          background-size cover
          background-position center
        .search
          width: 70%;
          height 28px
          font-size: .37333 /$rem
          background-color: #ededed
          border-radius: 6px
          display: flex
          align-items: center
          justify-content: center
          margin-right: 34px
          margin-left 10px
          .sContent
            .icon-xingtaiduICON_sousuo--
              font-size 16px
      .hdScorllTab
        width: 100%;
        overflow: hidden
        display: flex
        .hdScorllItem
          padding: 0 0 2px 0
          display: flex
          justify-content: space-between
          align-items: center
          span
            width: 70px
            text-align: center
            flex-shrink: 0;
            flex-wrap: nowrap
            margin: 0 .5 * 75 /@rem
            font-size: .37333 * 75 /@rem
            &.active
              padding: 0 0 12px 0;
              border-bottom: 3px solid #b4282d
              color: #b4282d

    .swiper-container
      margin-top 90px
      width 100%
      height 200px
      .swiper-wrapper
        width 100%
        height 200px
        .swiper-slide
          width 100%
          height 100%
          img
            width 100%
            height 100%
    .tips
      margin-bottom 6px
      background #fff
      display flex
      justify-content space-between
      align-items center
      width 100%
      .item
        width 33%
        height 36px
        margin-left 15px
        img
          width 16px
          vertical-align middle
        span
          font-size 12px
          color #333
          line-height 36px
          vertical-align middle
    .home_brand
      margin-bottom 50px
      background-color #ffffff
      .brand
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height 55px
        font-size: 14px
        .icon-yuanjiantou1
          font-size: 15px
      .brand-itemWrap
        .brand-item
          display inline-block
          margin-bottom: 4px
          width 140px
          height 117px
          overflow hidden
          background-color #f4f4f4
          padding 18px
          border 1px solid #999
          &:nth-child(1), &:nth-child(3)
            margin-left 8px
          &:nth-child(1)
            background url("http://yanxuan.nosdn.127.net/7f55f337f98a198ac3d629847171d5d2.png?imageView&thumbnail=355x0&quality=65") no-repeat;
            background-size 100%;
          &:nth-child(2)
            background url("http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png") no-repeat;
            background-size: 100%;
          &:nth-child(3)
            background url("http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65") no-repeat;
            background-size: 100%;
          &:nth-child(4)
            background url("http://yanxuan.nosdn.127.net/cc056d931b009298769d65b94175d696.png?imageView&thumbnail=355x0&quality=65") no-repeat;
            background-size: 100%;
          h4
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            font-size: 14px
            line-height 16px
            margin-bottom 6px
          .title
            font-size 12px
            color gray
          .goNew
            display inline-block
            font-size 12px
            line-height 12px
            border 1px solid #CEAD6F
            padding 2px
            color #CEAD6F
            margin-top 5px
    .home-newItems
      margin-top: -46px
      margin-bottom: 8px
      background-color: #fff
      .newItemsWrap
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png);
        background-size: 375px 130px;
        height: 130px;
        position: relative;
        margin-top 55px
        span
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 18px;
          color: #B4A078;

        #all
          text-align: center;
          margin: 18px auto 0;
          width: 120px;
          height: 28px;
          font-size: 14px;
          line-height: 28px;
          background: #F4E9CB;
          color: #B4A078;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);

      .home-goodList
        padding-bottom: 25px;
        margin-top: 24px;
        height: 240px;
        background-color: #fff;
        display: flex;
        .list
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          .goodList-item
            margin-left: 15px;
            width: 140px;
            .wrap
              width: 140px;
              background-color: #f4f4f4;
              img
                width: 100%;
                background-size: 100% 100%;
            .title
              z-index: 1;
              margin-top: 7px;
              margin-left: 7px;
              margin-bottom 4px
              height: 14px;
              overflow: hidden;
              background-color: #e5686d;
              padding: 4px 4px;
              line-height: 14px;
              text-align: center;
              color: #fff;
              font-size: 10px;
              border-radius: 1px;
              display: inline-block;
              vertical-align: middle;

            .name
              margin-bottom: 5px
              padding: 0 5px
              font-size: 14px
              line-height: 17px
              text-overflow: ellipsis
              overflow: hidden
              white-space: nowrap
              color: #333
              text-align: left

            .newItemDesc
              display: block;
              font-size: 12px;
              color: #7f7f7f;
              line-height: 15px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding-left 10px
              padding-right 10px
              padding-top 4px
              padding-bottom 4px

            .price
              padding-top 4px
              font-size: 16px;
              text-align: center;
              color: #b4282d;
              line-height: 1;

    .home_topic
      margin-top: 6px;
      .topicImg
        img
          width: 100%;
      .topic_wrap
        margin-top: 6px;
        background-color #fff
      .topic_content
        height 55px
        display flex
        flex-flow row nowrap
        justify-content center
        align-items center
        span
          font-size 16px
        i
          font-size 15px

    .home_imgWrap
      display: flex
      background-color #fff
      .home_imgScroll
        padding-left: 18px
        display: flex
        justify-content: space-between
        align-items: center
        .imgItem
          margin-right: 18px
          width: 288px
          margin-bottom: 8px
          border-radius: 8px
          overflow: hidden
          float: left
          img
            width: 100%;
            margin-bottom: 4px
          .content
            height: 16px
            margin-bottom: 4px
            overflow: hidden
            h4
              white-space: nowrap
              overflow: hidden
              -ms-text-overflow: ellipsis
              -o-text-overflow: ellipsis
              text-overflow: ellipsis
              width: 200px
              float: left
              font-size: 14px
            span
              float: right;
              font-size: 14px
              color: #b4282d
              margin-right 4px

          .desc
            white-space: nowrap
            overflow: hidden
            -ms-text-overflow: ellipsis
            -o-text-overflow: ellipsis
            text-overflow: ellipsis
            width: 286px
            font-size: 12px
            line-height 16px
            color: #7F7F7F
    .timerWrap
      display flex
      margin-top 10px
      background-color #ffffff
      justify-content space-around
      align-items center
      width 100%
      height 190px
      .timerLeft
        width 40%
        display flex
        flex-direction column
        align-items center
        justify-content center
        .title
          font-size 20px
          color black
          font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;

        .h_m_s
          padding 20px 0
          .hour, .min, .sec
            display inline-block
            width 26px
            height 26px
            background-color black
            color #fff
            text-align center
            vertical-align middle
            line-height 26px
            border-radius 2px
          .colon
            display inline-block
            font-weight bolder
            width 10px
            height 26px
            text-align center
            line-height 26px
            font-size 16px
        .nextTimer
          font-size 12px
          color black
      .timerRight
        width 40%
        position relative
        img
          width 100%
        .price
          position absolute
          right 10px
          bottom 5px
          background-color rgba(244, 143, 24, .95);
          width 48px
          height 48px
          border-radius 50%
          .priceFont
            text-align center
            line-height 48px
            font-size 16px
            color white


</style>
