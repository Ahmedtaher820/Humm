<template lang="pug">
.container.mb-2x.mt-2x
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2 Read
        MainLink
    .row
        .col-md-6
            DisplayOneItem(:items="secondCol" :userInfo="true")
        .col-md-6
            div(v-for="{user_created , slug,type,category,translations,date_created} in firstCol").my-3
                HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true" :readSection="true" )
</template>

<script lang="ts" setup>
defineProps({
    secondCol:{
        type:Array,
        required:true
    },
    firstCol:{
        type:Array,
        required:true
    }
})
</script>

<style>

</style>