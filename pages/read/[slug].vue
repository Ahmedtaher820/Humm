<template lang="pug">
template(v-if="data.Article.length !== 0")
    .container 
        .art-cover.my-5
            img(:src="getImages(articleData.translations[0].cover.id)").full-w
        .row 
            .col-md-8
                div(v-html="articleData.translations[0].content")  
            .col-md-4
                .poster-img.d-lg-flex.flex-lg-column
                    HomeCompDisplayPosters(:posterCover="normal1Cover.id" :posterTitle="normal1Cover.title" :posterUrl="normal1Cover.url")
                    HomeCompDisplayPosters(:posterCover="normal2Cover.id" :posterTitle="normal2Cover.title" :posterUrl="normal2Cover.url")
template(v-else)
    .container 
        h1.my-5.text-center Category Not Found
</template>
<script setup lang="ts">
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
const posters= getPosters().then((res)=>{
    normal1Cover.value = res.firstPoster.normal1Cover
    normal2Cover.value = res.firstPoster.normal2Cover
})
</script>