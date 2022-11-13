<template lang="pug">
div.know-more-btn
    slot
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2.main-head {{sectionTitle}}
        NuxtLink(:to="'/'+sectionLink" v-if="showLink")
            button.main-btn {{sectionBtnTxt}} #[img(src="/images/arrow.svg")]      
</template>

<script setup>
defineProps({
    sectionTitle:{
        type:String,
        default:"الواصفات"
    },
    sectionLink:{
        type:String,
        default:"food"
    },
    sectionBtnTxt:{
        type:String,
        default:'عرض المزيد '
    },
    showLink:{
        type:Boolean,
        default:true
    }
})
</script>

<style lang="scss">
.know-more-btn{
    cursor: pointer;
    
    &:hover #Component_10_1{
        height: 50px !important;
    }
}
</style>