<template lang="pug">
div    
    MainComponentTheHeader
    NuxtPage
    MainComponentTheFooter
    
</template>
<script lang="ts" setup>
const description = ref("food website provide for every one");
// const {t , locale} = useI18n()
// let appDir = locale.value == "ar" ? "rtl" : "ltr"
useHead({
  titleTemplate:  "همم - %s",
  meta: [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,maximum-scale=5",
    },
    {
      name: "description",
      content: description,
    },
  ],
  htmlAttrs:{
    dir:"rtl"
  }
});
// watch(
//   ()=>locale.value , (newVal , oldVal)=>{
//     console.log(newVal)
//     if(newVal == "ar"){
//       appDir = "rtl"
//     }else{
//       appDir = "ltr"
//     }
//   }
// )
</script>

<style></style>
