<template>
  <div>
    <div class="homeHeader">
    <div class="hd_Wrap">
      <div class="search">
        <div class="sContent">
          <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
          <span>搜索商品, 共9981款好物</span>
        </div>
      </div>
    </div>
    </div>
    <div class="leftWrap">
      <div class="leftList">
        <div class="leftNav">
          <div class="item" v-for="(item,index) in nav.categoryL1List"
               :key="index" :class="{active: index===InitIndex}"
                @click="changeActive(index)">{{item.name}}</div>
        </div>
      </div>
    </div>
    <CategoryRight :currentIndex="InitIndex" :data="nav.categoryL1List"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import CategoryRight from '../../components/CategoryRight/CategoryRight';
  export default {
    data () {
      return {
        InitIndex:3,
      }
    },
    components:{
      CategoryRight
    },
    methods:{
      changeActive (index) {
        this.InitIndex = index;
      }
    },
    computed:{
      ...mapState(['nav'])
    },
    mounted () {
        this.$store.dispatch('getNav')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeHeader
    background #fff
    position fixed
    overflow hidden
    z-index 10
    width 100%
    top 0
    border-bottom  1px solid lightgrey
    .hd_Wrap
      background: #ffffff;
      padding: 10px;
      width: 100%
      height: 75 /$rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search
        width: 90%;
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

  .leftWrap
    border-right: 1px solid #999;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 4;
    top 48px
    width: 81px;
    background-color: #fff;
    .leftList
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
    .leftNav
      height: 91%;
      padding-bottom: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .item
        width: 100%;
        height: 25px;
        text-align: center;
        border: none;
        display: block;
        color: #333;
        font-size: 14px;
        line-height: 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &.active
          font-size: 18px;
          color: #ab2b2b;
          line-height: 25px
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          border-left: 4px solid #ab2b2b;
</style>
