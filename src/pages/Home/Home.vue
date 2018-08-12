<template>
  <div id="scrollContainer">
    <div class="homeContainer">
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
            <h4>国潮品牌</h4>
            <div class="title">
              36元起
            </div>
          </div>
          <div class="brand-item">
            <h4>RainBow箱</h4>
            <div class="title">
              699元起
            </div>
          </div>
          <div class="brand-item">
            <h4>北京老鞋</h4>
            <div class="title">
              299元起
            </div>
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
          <span>新品首发</span>
          <div id="all">查看全部 ></div>
        </header>
        <div class="home-goodList">
          <div class="list">
            <div class="goodList-item" v-for="(item,index) in home.newItemList" :key="index">
              <div class="wrap">
                <img :src="item.primaryPicUrl" alt="newProduct">
              </div>
              <div class="title">
                新品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">RMB: {{item.retailPrice}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import 'swiper/dist/css/swiper.css';
  import BScroll from 'better-scroll';
  import Swiper from 'swiper';
  export default {
    data () {
      return {
        tabIndex:0
      }
    },
    mounted () {
      //获取数据(tab选项)
      this.$store.dispatch('getData',() => {
        //数据拿到
        this.$nextTick(() => {
          //界面渲染
          this.initScorllTab();
        });
      });

      //获取轮播图数据
      this.$store.dispatch('getBanner',() => {
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            effect: "fade",
            loop: true,
            autoplay: {
              autoplay:true,
              delay: 2000
            },
          })
        })
      })

      //获取home的数据
      this.$store.dispatch('getHome');
    },
    computed: {
      ...mapState(['data','banner','home'])
    },
    methods: {
      //滚动
      initScorllTab () {
        new BScroll('.hdScorllTab',{
          click: true,
          scrollX: true
        });
        new BScroll('.home-goodList', {
          click: true,
          scrollX: true
        });
      },
      //tab点选
      selectIndex (index) {
        this.tabIndex = index;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  @rem = 750/10rem
  #scrollContainer
    width 100%
    overflow hidden
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
        height: 75/$rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo
          display inline-block
          width: 18%;
          height 20px
          background-image  url("./images/logo.png")
          background-size cover
          background-position center
        .search
          width: 70%;
          height 28px
          font-size: .37333/$rem
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
            flex-shrink:0;
            flex-wrap:nowrap
            margin: 0 .5*75/@rem
            font-size: .37333*75/@rem
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
          &:nth-child(1),&:nth-child(3)
            margin-left 8px
          &:nth-child(1)
            background url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png") no-repeat;
            background-size 100%;
          &:nth-child(2)
            background url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png") no-repeat;
            background-size: 100%;
          &:nth-child(3)
            background url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png") no-repeat;
            background-size: 100%;
          &:nth-child(4)
            background url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png") no-repeat;
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
    .home-newItems{
      margin-top: -46px;
      margin-bottom: 20px;
      background-color: #fff;
      .newItemsWrap{
        background: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
        background-size: 375px 100px;
        height: 100px;
        position: relative;
        span{
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 18px;
          color: #8BA0B6;
        }
        #all{
          text-align: center;
          margin: 18px auto 0;
          width: 120px;
          height: 28px;
          font-size: 14px;
          line-height: 28px;
          background: #D8E5F1;
          color: #8BA0B6;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .home-goodList{
        padding-bottom: 60px;
        margin-top: 24px;
        height: 240px;
        background-color: #fff;
        display: flex;
        .list{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          .goodList-item{
            margin-left: 15px;
            width: 140px;
            .wrap{
              width: 140px;
              background-color: #f4f4f4;
              img{
                width: 100%;
                background-size: 100% 100%;
              }
            }
            .title{
              z-index: 1;
              margin-top: 7px;
              margin-left: 7px;
              margin-bottom 4px
              height: 14px;
              overflow: hidden;
              background-color: #f48f18;
              padding: 4px 4px;
              line-height: 10px;
              text-align: center;
              color: #fff;
              font-size: 10px;
              border-radius: 1px;
              display: inline-block;
              vertical-align: middle;
            }
            .name{
              margin-bottom: 5px;
              padding: 0 5px;
              font-size: 14px;
              line-height: 17px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;
              text-align: left;
            }
            .newItemDesc{
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
            }
            .price{
              padding-top 4px
              font-size: 16px;
              text-align: center;
              color: #b4282d;
              line-height: 1;
            }
          }
        }
      }
    }
</style>
