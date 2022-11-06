<template lang="pug">
.container.mb-2x.mt-2x
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2 Shop
        MainLink
    .row
        .col-lg-3(v-for="{user_created , slug,type,category,translations,date_created} in shops" :key="art.id" )
            HomeCompShopsBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created")
</template>

<script lang="ts" setup>
    defineProps({
        shops:{
            type:Array,
            required:true
        },
})
 </script>
<style>
</style>