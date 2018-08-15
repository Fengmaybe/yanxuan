<template>
  <div class="swiper" v-if="banner.length">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.picUrl">
          <div class="content">
            <div class="subTitle">{{item.subTitle}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  //import {mapState} from 'vuex';
  export default {
    props: {
      // banner:{
      //   type:Array,
      //   default:() => {
      //     return []
      //   }
      // }
    },
    // data () {
    //   return {
    //   banner:[]
    //   }
    // },
    //此法蛮机智
    computed:{
      //  ...mapState(['detail'])
      banner () {
        return (this.$store.state.detail.banner || [])
      }
    },
    mounted () {
      this.$store.dispatch('getDetail',()=>{
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            effect: "slide",
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1.15,
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              //type: 'bullets',
              //type: 'fraction',
              //type : 'progressbar',
              //type : 'custom',
            },
          })
        })
      });

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper
    background-color #ffffff
    padding 12px 0
    .swiper-container
      .swiper-wrapper
        margin-top 44px
        .swiper-slide
          img
            width 100%
            position relative
          .content
            position absolute
            top 0
            right 0
            bottom 0
            left 0
            margin auto
            background-color rgba(255, 255, 255, .9)
            display flex
            align-items center
            justify-content center
            flex-direction column
            width 233px
            height 100px

            .subTitle
              position relative
              color: #7f7f7f
              font-size 12px
              padding-bottom 6px
              font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
              &:before
                content: ' ';
                position: absolute;
                top: 0;
                bottom: 0;
                left -14px
                margin-top 5px
                width: 10px;
                height: 1px;
                background-color: #b4282d;
              &:after
                content: ' ';
                position: absolute;
                top: 0;
                bottom: 0;
                right -13px
                margin-top 5px
                width: 10px;
                height: 1px;
                background-color: #b4282d;
            .title
              font-size 16px
              color black
              padding-bottom 8px
              line-height 18px
              font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
              font-weight bold
            .desc
              font-size 14px
              color #333
              line-height 14px
              font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;


</style>
