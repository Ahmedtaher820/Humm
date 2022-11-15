<template lang="pug">
.container.mb-2x.mt-2x
    MainComponentSectionHeader(sectionTitle="المقالات" sectionLink="read")
    .row
        .col-md-6.center-items
            DisplayOneItem(:items="first" :oneItems="true")
        .col-md-6
            DisplayOneItem(v-for="item in second" :items="item" :oneItems="false").mb-2
</template>

<script lang="ts" setup>
defineProps({
    firstCol:{
        type:Array,
        required:true
    }
})
const getArticles = gql`
query articles( $lang:String,$eq:String,$limit:Int,$status:String ){
  Article(
    sort: "date_created" 
    filter:{translations:{languages_code:{code:{_eq:$lang}}}
      status:{_eq:$status}
      type:{_eq:$eq}},limit:$limit)
    {
   	
    id
    slug
    type
    press_link
    video
    user_created {
      first_name
      last_name
    }
    type
    slug
    category{
      id
      slug
      translations(filter:{languages_code:{code:{_eq:$lang}}}){
        title
      }
      
    }
    translations(filter:{languages_code:{code:{_eq:$lang}}}){
      title
      cover{
        id
      }
    }
    date_created
  }
}
`
const variables = {lang:"ar-EG" ,limit:3,eq:"read" ,status:"published"}
const useRead = useReadArticles()
if(useRead.value.length == 0){
    const {data} = await useAsyncQuery(getArticles , variables)
    if(data.value.Article.length > 0){
        data.value.Article.forEach((e)=>{
            useRead.value.push(e)
        })
    }
}
const first = useRead.value[0]
const second = useRead.value.slice(1,3)
</script>

<style>

</style>