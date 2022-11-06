<template lang="pug">
.container.mb-2x.mt-2x
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2 Shows
        img(src="/images/HomeIcons/mainBtn2.svg").cursor-p
    .row
        .col-md-6(v-for="{user_created , slug,type,category,translations,date_created} in activeShow").text-light
            HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="true" :moreItem="false" :userInfo="true" :show="true")
            
        .col-md-6
            div(v-for="{user_created , slug,type,category,translations,date_created} in firstArtBlog").mb-2.text-light.show-content
                HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true" :userInfo="true")

</template>
        
<script lang="ts" setup>
        defineProps({
            firstArtBlog:{
                type:Array,
                required:true
            },
            activeShow:{
                type:Array,
                required:true
            }
        })
</script>
<style lang="scss">
.show-content{
    
    
}
</style>