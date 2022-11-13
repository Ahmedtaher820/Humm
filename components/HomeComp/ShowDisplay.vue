<template lang="pug">
NuxtLink(:to="'shows/'+item.slug").article-content-show.d-flex.gap-2.main-trans.mb-3.mx-lg-3.mx-2.flex-column.flex-lg-row.align-items-center
      img( :src="`https://board.humm.world/assets/${item.translations[0].cover.id}?fit=cover&quality=80`" loading="lazy" :alt="item.translations[0].title").main-trans
      .content.d-flex.flex-column.justify-content-center.text-light.text-center.text-lg-end
          h3.mb-1 {{item.translations[0].title}}
          p {{item.translations[0].description}}
</template>
  
  <script lang="ts" setup>
  const props = defineProps({
     item:{
      type:Object
     }
  })
  </script>
  
  <style lang="scss" scoped>
  .article-content-show{
   padding: 20px;
   border: 1px solid rgb(119, 119, 119);
   &:hover{
      box-shadow: 4px 4px 0px rgba(255,255,255);
      border: 1px solid $second-color;
   }

      img{
         width: 200px;
         height: 200px;
         object-fit: cover;
      }
   .content{
      p{
         font-weight: 500;
         font-size: 18px;
      }
   }
  }
  </style>