<template lang="pug">
.container.mb-2x.mt-2x
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2.main-head البرامج
        button.main-btn اعرف المزيد
    .row
        .col-md-4(v-for="{user_created , slug,type,category,translations,date_created} in firstArtBlog")
            HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="true" :moreItem="false" :userInfo="true")
    .row.mt-2x
        .col-md-6
            HomeCompDisplayPosters(:posterCover="normal1Cover.id" :posterTitle="normal1Cover.title" :posterUrl="normal1Cover.url")
        .col-md-6
            HomeCompDisplayPosters(:posterCover="normal2Cover.id" :posterTitle="normal2Cover.title" :posterUrl="normal2Cover.url")
</template>
    
<script lang="ts" setup>
import type { PropType } from "vue";

interface Cover{
    id:String,
    title:String,
    url:String
}
    defineProps({
        firstArtBlog:{
            type:Array,
            required:true
        },
        normal1Cover:{
            type:Object as PropType<Cover>
        },
        normal2Cover:{
            type:Object as PropType<Cover>
        }
    })
    
</script>
<style lang="scss">
    .show-img{
        &:hover{
            transform: scale(.9);
        }
        img{
            width: 80%;
            height: 80%;
        }
    }
</style>