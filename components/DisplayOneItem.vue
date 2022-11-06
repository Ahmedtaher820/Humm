<template lang="pug">
div
    HomeCompFoodBox(:userCreated="itemObj.user_created" , :slug="itemObj.slug",:userInfo="userInfo" , :type="itemObj.type" , :category="itemObj.category",:translations="itemObj.translations" , :date_created="itemObj.date_created" :isOneItem="true" :moreItem="false" )
        template(v-slot:onItem)
        template(v-slot:moreItem)
</template>
<script setup lang="ts" >
const props = defineProps({
    items:{
        type:[],
        required:true,
    },
    userInfo:{
        type:Boolean,
        default:false
    }
})
const itemObj =ref(props.items[0])
</script>

<style>

</style>