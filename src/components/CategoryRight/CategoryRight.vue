<template>
  <div>
    <div class="wrap" v-if="data">
      <div class="poster">
        <img :src="data[currentIndex].bannerUrl" alt="poster">
      </div>
      <div class="categoryList">
        <div class="title">
          <span>{{data[currentIndex].name}}分类</span>
        </div>
        <div class="list">
          <div class="cateItem" v-for="(subItem,subIndex) in data[currentIndex].subCateList" :key="subIndex">
            <div class="itemDiv">
              <img :src="subItem.bannerUrl" alt="item">
              <div class="name">{{subItem.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      currentIndex:Number,
      data: Array,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    height: 89%;
    background: #ffffff;
    position: absolute;
    top: 45px;
    right: 0;
    margin-left: 81px
    padding: 15px 15px 10px 15px;
    .poster
      position: relative;
      width: 100%;
      height: 87px
      display: table;
      img
        width: 100%;
        border-radius: 4px;
    .categoryList
      .title
        text-align center
        position relative
        span
          height: 54px
          line-height: 54px
          text-align: center;
          font-size: 14px
          color: #333;
          font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
          &:before
            display inline-block
            content ''
            width 24px
            height 1px
            background-color lightgrey
            position absolute
            top 25px
            margin-left -35px
          &:after
            display inline-block
            content ''
            width 24px
            height 1px
            background-color lightgrey
            position absolute
            top 25px
            margin-left 10px

      .list
        .cateItem
          float: left;
          margin-bottom: 50px;
          width: 72px
          height: 72px
          margin-right: 16px
          .itemDiv
            img
              display: block;
              width: 100%;
              background: #fff;
            .name
              height: 37.5px
              font-size: 12px
              color: #333;
              text-align: center;
              line-height: 20px
</style>
