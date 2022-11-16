<template lang="pug">
.episode 
    .container 
        .vedio-container.py-4
            div(class="embed-responsive embed-responsive-16by9")
              iframe(class="embed-responsive-item" :src="`https://www.youtube.com/embed/${epsiode.video}`" title="YouTube video player" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"    allowfullscreen)
              div.mt-4
        .row 
                .col-lg-8
                    .slug-content.flex.flex-column.gap-3
                        //- |{{epsiode.translations[0].content}}
                        a(:href="'/shows/'+epsiode.shows.slug").cate-title.main-border.main-trans.main-color.px-4.py-2.mb-3.d-inline-block {{epsiode.shows.translations[0].title}}
                        h2.pb-3.main-head-2xl {{epsiode.translations[0].title}}
                        div(v-html="epsiode.translations[0].content")
                        .user.d-flex.align-items-lg-center.align-items-start.justify-content-between.flex-column.flex-md-row.justify-content-start.py-3.gap-2
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
                .col-md-4 
                    .poster-img.d-flex.flex-column.gap-3
                      HomeCompDisplayPosters(:posterCover="normal1Cover.id" :posterTitle="normal1Cover.title" :posterUrl="normal1Cover.url")
                      HomeCompDisplayPosters(:posterCover="normal2Cover.id" :posterTitle="normal2Cover.title" :posterUrl="normal2Cover.url")
                .col-12.my-5
                    HomeCompDisplayPosters(:posterCover="wide1Cover.id" :posterTitle="wide1Cover.title" :posterUrl="wide1Cover.url")
                |{{epsiode.shows.translations[0].title}}    
        KnowMoreFoodDescribe(:items="epsiode.shows.all_episodes.slice(0,3)" ,:sectionTitle="epsiode.shows.translations[0].title" :sectionLink='`/shows/${epsiode.shows.slug}`' :isHead="false" :showLink="true" :showHeader="true")
        //- .epsoide-img
          //- img(:src="getImages()" :alt="").full-w
        

</template>

<script setup lang="ts">
import { dateForm } from '@/components/modules/dateFormat';
const route = useRoute()
const getEpisode = gql`
 query getShow($slug:String, ,$lang:String,$type:String){
    Article(filter:{slug:{_eq:$slug} , translations:{languages_code:{code:{_eq:$lang}}} , status:{_eq:"published"}}){
      slug
        type
        video
        date_created
        user_created{
          first_name
          last_name
        }
      translations(filter:{languages_code:{code:{_eq:$lang}}}){
        title
        cover{
          id
        }
      content
      description
      }
    shows{
      slug
      translations(filter:{languages_code:{code:{_eq:$lang}}}){
          title
        }
      all_episodes(
        filter:{translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:"published"},type:{_eq:$type}}
      ){
        slug
        type
        video
        date_created
        user_created{
          first_name
          last_name
        }
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
  }
`
const variables = {slug:route.params.slug , lang:"ar-EG" , type:"episode"}
const epsiode = useEpsoide()
if(epsiode.value.length == 0){
  const {data} = await useAsyncQuery(getEpisode , variables)
  console.log(data.value)
  epsiode.value = data.value.Article[0]
}
console.log(epsiode.value)
// get posters
const wide1Cover = ref({})
const normal1Cover = ref({})
const normal2Cover = ref({})
getPosters().then((res)=>{
  wide1Cover.value = res.firstPoster.wide1Cover
  normal1Cover.value = res.firstPoster.normal1Cover
  normal2Cover.value = res.firstPoster.normal2Cover
})
// format date
const dateFormater = dateForm(epsiode.value.date_created)

</script>

<style lang="scss">
.episode{
  @import "../../../assets/css/scss/layouts/vedioPage";

}
</style>