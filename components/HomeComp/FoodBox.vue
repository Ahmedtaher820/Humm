<template lang="pug">
.food-box.d-flex.flex-row.gap-4
    img(:src="`https://board.humm.world/assets/${imgSrc}`")
    div.food-content


</template>

<script lang="ts" setup>
const props = defineProps({
    imgSrc:{
        type:String,
        required:true
    },
    foodType:{
        type:String,
        required:true
    },
    foodContent:{
        type:String,
        required:true
    }
})
</script>

<style>

</style>