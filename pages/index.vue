<template lang="pug">
div.index
    section.home-header.mt-2
        .container.position-relative
            .content.d-inline-block 
                h2 A world for food and its lovers
                button.main-btn Know more
            .bg 
    section
        .container
            h2 Food
            .row 
                //- .col-md-4
                //-     HomeCompFoodBox 


 
</template>
<script setup lang="ts">

definePageMeta({
  title: "Home",
  meta: [
    {
      name: "description",
      content:"provide food for all people"
    },
  ],
});
const {data:cate} = await useAsyncData("Articles",
    ()=> GqlGetArticles(),
    {
        transform:(data) => data.Articles,
        initialCache:false
    }
)
console.log(cate)
</script>
<style lang="scss">

.index {
  .home-header {
    height: 600px;
    .container{
        height: 100%;
    }
    .bg {
        background-image: url("/images/publicImg/header.svg");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      bottom: 0px;
      left: -6.25rem;
      position: absolute;
      top: 0px;
      width: calc(100% + 200px);
      z-index: -1;
      height: 600px;
      
    }
    .content {
      background-color: $second-color;
      padding: calc(1.1625rem + 2.43529vw);
      position: relative;
      top: 35%;
      left: 5.12%;
    }
  }
}
</style>
