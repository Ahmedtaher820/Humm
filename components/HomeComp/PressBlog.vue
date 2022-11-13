<template lang="pug">
.container
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2.main-head Press
        button.main-btn اعرف المزيد

    .shop-items
        .row 
            .col-md-4(v-for="i in 3" :key="i")
                .shop-item.position-relative
                    .item-img.position-absolute
                        img(src="/images/HomeIcons/pressblog.png" alt="press blog img ")
                    .item-content.main-trans
                        h5 قدم بعض المشروبات #[br] في 4 يوليو  #[br] الظبخ بالخارج
                        div.align-item.gap-2
                            svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                                path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                                path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z")
                            span.date-text 2 April 2022
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.shop-items {
  .shop-item {
    min-height: 500px;
    &:not(:nth-last-of-type(3)) {
      margin-bottom: 16px;
    }
    &:hover {
      .item-content {
        bottom: 20px;
        left: 20px;
        opacity: 1;
        pointer-events: auto;
      }
    }
    .item-img {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-content {
      position: absolute;
      bottom: -20px;
      left: -20px;
      right: 20px;
      background-color: $second-color;
      padding: 25px 40px 25px 0px;
      opacity: 0;
      pointer-events: none;
       &:hover{
        background-color: $main-color;
        color:$second-color;
        svg{
                fill: $second-color;
        }
       } 
      h5 {
        line-height: 1.3;
      }
    }
  }
}
</style>
