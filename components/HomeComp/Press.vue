<template lang="pug">
.container.mb-2x.mt-2x
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2 Press
        MainLink
    .row
        .col-md-4(v-for="{user_created , slug,type,category,translations,date_created} in firstArtBlog")
            HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="true" :moreItem="false" :userInfo="true")
    .row.mt-2x
        .col-md-6 
            img(src="images/HomeIcons/fresh.png").full-w.show-img.main-trans
        .col-md-6 
            img(src="images/HomeIcons/spicy.png").full-w.show-img.main-trans 
        
</template>
    
<script lang="ts" setup>
    defineProps({
        firstArtBlog:{
            type:Array,
            required:true
        }
    })
</script>
<style lang="scss">
    .show-img{
        &:hover{
            transform: scale(.9);
        }
    }
</style>