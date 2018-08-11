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
      <!--home的内容-->
      <div class="homeContent">

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
    },
    computed: {
      ...mapState(['data','banner'])
    },
    methods: {
      //滚动
      initScorllTab () {
        new BScroll('.hdScorllTab',{
          click: true,
          scrollX: true
        })
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
  $rem = 750/10rem
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
            flex-wrap:nowrap;
            margin: 0 .5*75/@rem;
            font-size: .37333*75/@rem;
            &.active
              padding: 0 0 12px 0;
              border-bottom: 3px solid #b4282d;
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
</style>
