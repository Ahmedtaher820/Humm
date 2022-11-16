<template lang="pug">
NuxtLink(:to="posterUrl").poster-link
    img(:src="getImages(posterCover)" loading="lazy" :alt="posterTitle").full-w.show-img.main-trans
</template>

<script lang="ts" setup>
defineProps({
    posterCover:{
        type:String,
    },
    posterTitle:{
        type:String,
    },
    posterUrl:{
        type:String,
    },
})
</script>

<style lang="scss">
.poster-link{
    min-width: 300px;
    min-height: 300px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>