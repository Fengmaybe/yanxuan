<template>
  <div class="FindMore">
    <div class="more">
      <div class="title">更多精彩</div>
    </div>
    <div class="wrap" v-for="(item,index) in findMore" :key="index">
      <div class="box">
        <div class="imgBox">
          <img :src="item.itemPicUrl" alt="photo">
        </div>
        <div class="text">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      findMore:Array,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .FindMore
    margin-top 10px
    margin-bottom 50px
    background-color #eee
  .more
    padding 10px 5px
    .title
      font-size 14px
      line-height 14px
      padding 0 2px
      text-align center
      position relative
  .wrap
    padding 12px
    background-color white
    margin 10px
    .box
      .imgBox
        img
          width 331px
          height 182px
          vertical-align middle
          text-align center
      .text
        padding 8px 0 10px 0
        font-size 16px

</style>
