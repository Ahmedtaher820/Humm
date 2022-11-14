<template lang="pug">
template(v-if="isSlug[0]")    
  .food
    .container
        .vedio-container.py-4
            div(class="embed-responsive embed-responsive-16by9")
                iframe(class="embed-responsive-item" :src="`https://www.youtube.com/embed/${isSlug[0].video}`" title="YouTube video player" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"    allowfullscreen)
        div.mt-4
            .row 
                .col-lg-8
                    .slug-content.flex.flex-column.gap-3
                        a(:href="'./category/'+isSlug[0].category.slug").cate-title.main-border.main-trans.main-color.px-4.py-2.mb-3.d-inline-block {{isSlug[0].category.translations[0].title}}
                        h2.pb-3 {{isSlug[0].translations[0].title}}
                        .user.align-item.justify-content-between.flex-column.flex-md-row.justify-content-start.py-3
                          div.date-box.align-item.gap-2
                            div
                                svg(id="user-6-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                                  path(id="Path_35283" data-name="Path 35283" d="M0,0H24V24H0Z" fill="none")
                                  path(id="Path_35284" data-name="Path 35284" d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z")
                                span.date-text.fw-light.d-inline-block.fs-6  {{isSlug[0].user_created.first_name}} {{isSlug[0].user_created.last_name}}
                            div    
                                svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" )
                                    path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                                    path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                                span.date-text.fw-light.fs-6 {{dateFormater}}
                          div.social-box
                                  ul.social.align-item.justify-content-between.list-unstyled.mb-0
                                      li.ms-3.cursor-p
                                          img(src="/images/FooterIcons/twitter.svg")
                                      li.ms-3.cursor-p
                                          img(src="/images/FooterIcons/twitter.svg")

                                      li.ms-3.cursor-p
                                          img(src="/images/FooterIcons/twitter.svg")

                                      li.ms-3.cursor-p
                                          img(src="/images/FooterIcons/twitter.svg")

                                      li.cursor-p
                                          img(src="/images/FooterIcons/twitter.svg")
                        div(v-if="isSlug[0].translations[0].content" v-html="isSlug[0].translations[0].content").my-3.pieces        
                .col-lg-4
                    .poster-img.d-lg-flex.flex-lg-column
                        HomeCompDisplayPosters(:posterCover="post[0].normal2_cover.id" :posterTitle="post[0].normal2_title" :posterUrl="post[0].normal2_url").cursor-p.mb-3
                        HomeCompDisplayPosters(:posterCover="post[0].wide2_cover.id" :posterTitle="post[0].wide2_title" :posterUrl="post[0].wide2_url").cursor-p
                .col-md-12.my-5
                        HomeCompDisplayPosters(:posterCover="post[0].wide_cover.id" :posterTitle="post[0].wide_title" :posterUrl="post[0].wide_url").cursor-p
        KnowMoreFoodDescribe(:items="foods" , sectionLink='food'  :dataEnded="true")
</template>

<script lang="ts" setup>
import {dateForm} from "../../components/modules/dateFormat"
let isSlug = useFoodSlug()
const route = useRoute()

const post = usePosters() 
console.log(post.value)
// get slug data
let q = gql`
  query articles( $lang:String,$slug:String){
  Article(filter:{slug:{_eq:$slug}, translations:{languages_code:{code:{_eq:$lang}}}}){
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
if(isSlug.value[0]?.slug == route.params.slug){
console.log("is founded")
console.log(isSlug.value[0].translations[0].content)
}
else{
    isSlug.value = []
    const variablee = {lang:"ar-EG" , slug:route.params.slug}
    const {data} = await useAsyncQuery(q , variablee)
    isSlug.value.push(data.value.Article[0])
}
// get posters 
if(post.value.length === 0){
    const getPosters = gql`
  query getPosters($lang:String){
  posters{
    translations(filter:{languages_code:{code:{_eq:$lang}}}){
      wide_url
      wide_title
      wide_cover{
        id
      }
      wide2_url
      wide2_title
      wide2_cover{
        id
      }
      normal_title
      normal_url
      normal_cover{
        id
      }
      normal2_title
      normal2_url
      normal2_cover{
        id
      }
    }
  }
}
`
const posterVar = {lang:"ar-EG"}
const {data} = await useAsyncQuery(getPosters , posterVar)
if(data.value.posters.translations.length > 0){
    post.value.push(data.value.posters.translations[0])
}
}
const dateFormater = dateForm(isSlug.value[0].date_created)
// get all foods
const offset = ref(0);
const limit = ref(8);
const recentFood = gql`
  query articles2( $lang:String ="ar-EG" , $eq:String="food",$stats:String="published" ){
  Article(filter:{translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:$stats},type:{_eq:$eq}}){
    id
    user_created {
      first_name
      last_name
    }
    type
    slug
    category{
      slug
      translations{
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
const variablees = {lang:"ar-EG",type:"food",limit:limit.value}
const getFoods = useArticles()
const foods = ref([])
if(getFoods.value.length > 0){
  foods.value = getFoods.value
}else{
  const {data} = await useAsyncQuery(recentFood , variablees)
  console.log(data.value)
  getFoods.value = data.value.Article
  foods.value = data.value.Article  
}
</script>

<style lang="scss">
.food{
  .vedio-container {
    width: 100%;
    min-height: 600px;
    .embed-responsive{
      position: relative;
      top: 0px;
      overflow: hidden;
      padding: 0px;
      width: 100%;
      display: block;
      height: 600px;
    }
    iframe{
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      border: 0px;
    }
  }
  .cate-title{
    border-radius: 30px;
    font-size: 20px;
    font-weight: 700;
    &:hover{
      background-color: $main-color;
      color: $second-color;
    }
   
  }
  .poster-img{
    a{
      position: relative;
      display: block;
      min-height: 200px;
      img{
        position: absolute;
        inset: 0;

      }
    }
  }
}
</style>