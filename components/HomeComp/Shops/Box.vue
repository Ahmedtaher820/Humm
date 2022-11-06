<template lang="pug">
.shop-box.p-3.border.d-flex.justify-content-between.flex-column
    .shop-img 
        img(src="/images/HomeIcons/shop.png").full-w
    h5.my-4 60 Earl Grey Bundle + 60 Free Green Tea Bags
    .price.flex-item.space-between 
        h6.text-danger.fw-bold LE 240.00
        div.cart.center-items
            svg(xmlns="http://www.w3.org/2000/svg" width="17.489" height="17.777" viewBox="0 0 17.489 17.777")
                path(id="Path_4" data-name="Path 4" d="M3.471,5.654.757,2.941,1.941,1.757,4.654,4.471H17.409a.837.837,0,0,1,.8,1.077L16.2,12.243a.837.837,0,0,1-.8.6H5.145v1.674H14.35v1.674H4.308a.837.837,0,0,1-.837-.837Zm1.255,13.88a1.255,1.255,0,1,1,1.255-1.255A1.255,1.255,0,0,1,4.726,19.534Zm10.042,0a1.255,1.255,0,1,1,1.255-1.255A1.255,1.255,0,0,1,14.768,19.534Z" transform="translate(-0.757 -1.757)") 
            

template
    
</template>

<script lang="ts" setup>
import {PropType} from "vue";
type translationsType = { title: string }[];
defineProps({
    userCreated: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
  translations: {
    type: Object as PropType<translationsType>,
    required: true,
  },
  date_created: {
    type: String,
    required: true,
  },

})
</script>

<style lang="scss">
.shop-box{
    .cart{
        width: 40px;
        height: 40px;
        border: 1px solid $main-color;
    }
}
</style>