<template lang="pug">
.article-content.d-flex.gap-3.mb-art.main-trans
        div
            img(:src="`https://board.humm.world/assets/${translations[0].cover.id}?fit=cover&quality=80`").art-img.main-trans
        .content.d-flex.flex-column.justify-content-center.gap-3.pe-3
            .art-type: NuxtLink(:to="`food/category/dessert`") Dessert
            h3(class="mb-0") Serve Up Some Blue Drinks at Your 4th of July Cookout
            div
                svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="me-1")
                    path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                    path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                span.date-text.fw-light 2 April 2022    
                .col-md-4(v-for="{user_created , slug,type,category,translations,date_created} in firstArtBlog" :key="art.id" )



</template>

<script lang="ts" setup>
import { PropType } from "vue"

type translationsType = {title:string}[]
const props = defineProps({
    userCreated:{
        type:Object,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    category:{
        type:Object,
        required:true
    }
    ,
    translations:{
        type:Object as PropType<translationsType>,
        required:true
    },
    date_created:{
        type:String,
        required:true
    },
})
</script>

<style lang="scss">
.article-content {
          padding: 10px;
          border-radius: 5px;
          &:hover{
            box-shadow: 0px 0px 10px rgba(0,0,0,.2);
            cursor: pointer;
            
          }
          &:hover .art-img{
            filter: blur(0px);

            }
        &.mb-art{
          margin-bottom: 30px;
        }
        &.alone{
          box-shadow: 3px 3px 5px rgb(0,0,0);
          border: 1px solid #333;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 80%;
          img.art-img{
            width: 100%;
          }
          &:hover{
            background-color: $main-color;
            color: $second-color;
          }
          &:hover svg{
              fill: $second-color;
          }
        }
        .art-type{
            a{
                box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.2);
                color: $main-color;
            }
        }
        h3{
          font-size: 22px;
          line-height: 1.4;
        }
        .art-img {
          width: 200px;
          height: 230px;
          object-fit: cover;
          filter: blur(.8px);
          
        }
        .content {
          a {
            padding: 6px 24px;
            border-radius: 15px;
            background-color: #ffe200;
          }
        }
      }
</style>