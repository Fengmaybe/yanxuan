<template>
  <div class="detail_main_wrap">
    <DetailHeader />
    <DetailSwiper />
    <DetailEssayScrollX :column="detail.column"/>
    <DetailRecommend :detail="detail"/>
    <DetailLook />
    <DetailQuarterTen :tenfifteen="detail.tenfifteen"/>
    <DetailFindMore :findMore="detail.findMore"/>
    <goTop />

  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import DetailHeader from '../../components/DetailHeader/DetailHeader';
  import DetailSwiper from '../../components/DetailSwiper/DetailSwiper';
  import DetailEssayScrollX from '../../components/DetailEssayScrollX/DetailEssayScrollX';
  import DetailRecommend from '../../components/DetailRecommend/DetailRecommend';
  import DetailLook from '../../components/DetailLook/DetailLook';
  import DetailQuarterTen from '../../components/DetailQuarterTen/DetailQuarterTen';
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore';
  import goTop from '../../components/goTop/goTop';

  export default {
    computed:{
      ...mapState(['detail'])
    },
    mounted () {
      this.$store.dispatch('getDetail')
    },
    components:{
      DetailHeader,
      DetailSwiper,
      DetailEssayScrollX,
      DetailRecommend,
      DetailLook,
      DetailQuarterTen,
      DetailFindMore,
      goTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail_main_wrap
    background-color #eee
</style>
