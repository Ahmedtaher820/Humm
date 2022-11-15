<template lang="pug">
template(v-if="data.Article.length !== 0")
    .container 
        .art-cover.my-5
            img(:src="getImages (articleData.translations[0].cover.id,'?fit=cover&width=1350&height=450&quality=80')").full-w
        .row 
            .col-md-8
                div(v-html="articleData.translations[0].content")  
            .col-md-4
                .poster-img.d-lg-flex.flex-lg-column
                    HomeCompDisplayPosters(:posterCover="normal1Cover.id" :posterTitle="normal1Cover.title" :posterUrl="normal1Cover.url").full-w
                    HomeCompDisplayPosters(:posterCover="normal2Cover.id" :posterTitle="normal2Cover.title" :posterUrl="normal2Cover.url").full-w
            .col-12.my-5
              HomeCompDisplayPosters(:posterCover="wideCover.id" :posterTitle="wideCover.title" :posterUrl="wideCover.url").cursor-p        
        KnowMoreFoodDescribe(:items="useRead" , sectionLink='read'  :dataEnded="true" headerTitle="احدث المقالات")
template(v-else)
    .container 
        h1.my-5.text-center Category Not Found
</template>
<script setup lang="ts">
import { getPosters } from '~~/composables/getPoster';
const route = useRoute()
const articleData = ref(null)
const articles = gql`
  query articles( $lang:String,$type:String, $slug:String){
  Article(
    sort: "-date_created"
    filter:{ slug:{_eq:$slug}
    translations:{ languages_code:{code:{_eq:$lang}}},status:{_eq:"published"} , type:{_eq:$type}})
    {
   
    id
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
      content
      description
      cover{
        id
      }
    }
    date_created
  }
  }
`
const varables = {lang:'ar-EG' , slug:route.params.slug,type:'read'}
const {data} = await useAsyncQuery(articles , varables)
articleData.value = data.value.Article[0]

// get posters
const normal1Cover = ref({})
const normal2Cover = ref({})
const wideCover = ref({})
const posters= getPosters().then((res)=>{
  normal1Cover.value = res.firstPoster.normal1Cover
  normal2Cover.value = res.firstPoster.normal2Cover
    wideCover.value = res.firstPoster.wide1Cover
})




const getArticless = gql`
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
const variabless = {lang:"ar-EG" ,limit:3,eq:"read" ,status:"published"}
const useRead = useReadArticles()
if(useRead.value.length == 0){
    const {data} = await useAsyncQuery(getArticless , variabless)
    if(data.value.Article.length > 0){
        data.value.Article.forEach((e)=>{
            useRead.value.push(e)
        })
    }
}
</script>