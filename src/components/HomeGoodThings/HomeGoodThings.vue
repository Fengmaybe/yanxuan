<template>
  <div>
    <!--遍历第一层是好物分类-->
    <div class="home-goodThingsCategory1" v-for="(item, index) in cateList" :key="index">
      <div class="home-goodThingsTitle">
        <h3 class="title">{{item.name}}好物</h3>
        <div class="home-goodThings">
          <!--遍历第二层是单个好物的列表商品-->
          <div class="goodThingsWrap" v-for="(good, indexGood) in item.itemList" :key="indexGood">
            <img v-lazy="good.listPicUrl" alt="goodItem">
            <div class="desc">{{good.simpleDesc}}</div>
            <div class="name">{{good.name}}</div>
            <span class="price">￥{{good.couponPrice}}</span>
            <p class="promTag" v-if="good.promTag">{{good.promTag}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      cateList: Array,
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home-goodThingsCategory1
    margin-bottom: 10px
    background-color: #fff
    .home-goodThingsTitle
      background-color: #ffffff
      .title
        line-height: 60px
        text-align: center
        font-size: 18px
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        color: #b4282d
        background-color: #fff
      .home-goodThings
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        .goodThingsWrap
          background: #ff
          width: 46%
          margin-bottom: 8px
          padding-bottom: 8px
          position relative
          &:nth-of-type(odd)
            margin-right: 12px
            margin-left: 8px
          &:nth-of-type(even)
            margin-right: 8px
          img
            display: block
            width: 100%
            height: 172px
            border-radius: 2px 2px 0 0
            background-color: #f4f4f4
          .promTag
            display inline-block
            background-color #f48f18
            color #ffffff
            font-size 12px
            padding 3px
            text-align right
            vertical-align middle
            position absolute
            right 4px

          .desc
            bottom: 0
            width: 95%
            background: #F1ECE2
            border-radius: 0 0 2px 2px
            font-size: 12px
            color: #9F8A60
            letter-spacing: 0
            line-height: 14px
            padding: 10px 5px
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
          .name
            margin-top: 5px
            padding: 0 5px
            line-height: 24px
            text-align: left
            font-size: 14px
            text-overflow: ellipsis
            overflow: hidden
            white-space: nowrap
            color: #333
          .price
            line-height: 1
            font-size: 16px
            text-align: left
            color: #b4282d
            padding: 5px
</style>
