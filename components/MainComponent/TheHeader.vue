<template lang="pug">
div(class="container header")
  .header-top.space-between
    NuxtLink(to="/").logo
      img(src="../../static/logo.svg")
    ul.list-unstyled.d-flex.flex-row.mb-0
      li.d-flex.align-items-center
        .head-circle.center-items.me-2 
          img(src="../../static/HeaderIcons/email.svg")
        span Subscribe
      li.d-flex.px-4.align-items-center
        .head-circle.center-items.me-2 
          img(src="../../static/HeaderIcons/shop.svg")
        span Cart  
      li.d-flex.align-items-center
        .head-circle.center-items
         span EN  
    button(class="main-btn") Contact us
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
  padding:42px 0px;
  .header-top{
    ul{
      li{
        .head-circle{
          width: 47px;
          height: 47px;
          border: 1px solid $main-color;
          border-radius: 50%;

        }
      }
    }
  }
}

</style>