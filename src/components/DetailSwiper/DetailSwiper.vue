<template>
  <div class="swiper">
    <div class="swiper-container" v-if="detail.banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
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
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
