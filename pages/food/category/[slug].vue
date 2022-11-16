<template lang="pug">
.container
  .cate-cover.my-5
      img(:src="getImages(categoryTranslations.cover.id)").full-w
  .cate-content
      h1.main-head-2xl.text-center.mb-5 {{categoryTranslations.title}}
      .row.mb-5
          .col-xl-4.col-md-6(v-for="{id , user_created , slug,type,category,translations,date_created} in categoryData" :key="id").mb-md-3
              HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category" :translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true")
              
      div.mb-5
          HomeCompDisplayPosters(:posterCover="wideCover.id" :posterTitle="wideCover.title" :posterUrl="wideCover.url")
      
</template>
<script setup lang="ts">

import {getPosters} from "../../../composables/getPoster"

const route = useRoute()
const categoryData = ref([])
const categoryTranslations = ref([])
const cateQuery = gql`
   query Getcategory( $lang:String,$type:String , $limit:Int , $slug:String){
  category(
    sort: "-date_created"
  	filter:{slug:{_eq:$slug},translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:"published"}}
  ){
    slug
    id
    translations(filter:{languages_code:{code:{_eq:$lang}}}){
      id
      title
      cover{
        id
      }
      
    }
    articles( 
      sort: "-date_created"
			filter:{translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:"published"},type:{_eq:$type}}
      limit:$limit
    ){
      slug
      type
      video
      user_created{
        first_name
        last_name
      }
      date_created
      translations(filter:{languages_code:{code:{_eq:$lang}}}){
        title
        cover{
          id
        }
      }
      category{
        id
        slug
        translations(filter:{languages_code:{code:{_eq:$lang}}}){
          title
        }
      }
    }
  }
  }
`
const cateVariables = {lang:'ar-EG',type:"food" ,  limit:8 , slug:route.params.slug}
const {data} = await useAsyncQuery(cateQuery , cateVariables)
data.value.category[0].articles.forEach((e)=>{
  categoryData.value.push(e) 
})
categoryTranslations.value = data.value.category[0].translations[0]
// get poster 
const wideCover = ref({})
const posters= getPosters().then((res)=>{
  wideCover.value = res.firstPoster.wide1Cover
})
</script>