<template lang="pug">
div.show-slug
    .container
        .show-slug-img.my-5
            img(:src="getImages(loadShows.translations[0].cover.id,'?fit=cover&width=1350&height=450&quality=80')" :alt="loadShows.translations[0].title").full-w
        .show-content.text-center.max-w-600.mx-auto.mt-5.mb-3
            h1.main-head-2xl {{loadShows.translations[0].title}}
            p.lead.mb-2.fw-medium {{loadShows.translations[0].description}}
            div.align-item.justify-content-center.gap-2.watch
                svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" )
                      path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                      path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                span.fw-light 10 الحلقات
        .show-episodes.mb-5
              KnowMoreFoodDescribe(:showHeader="false" :isHead="false" :showHeadUrl="loadShows.translations[0].title" :items="episodes" , sectionLink='read'  :dataEnded="true" :isShow="true")
              button.main-btn.d-block.mx-auto.my-4( @click="loadMore()" v-if="noMoreDataa") عرض المزيد 
        div.mb-5
          HomeCompDisplayPosters(:posterCover="wideCover.id" :posterTitle="wideCover.title" :posterUrl="wideCover.url")
</template>
<script setup lang="ts">
import {getPosters} from "@/composables/getPoster"
const route = useRoute()
const limitt=ref(2)
const noMoreDataa = ref(true);
const loadShows = useLoadShows()
const show = gql`
  query getShow($slug:String , ,$lang:String,$type:String,$limit:Int){
    shows(filter:{slug:{_eq:$slug} , translations:{languages_code:{code:{_eq:$lang}}} , status:{_eq:"published"}}){
      slug
      translations(filter:{languages_code:{code:{_eq:$lang}}}){
        id
        title
        description
        cover{
          id
        }
      }
      all_episodes(
        filter:{translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:"published"},type:{_eq:$type}}
        limit:$limit
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
`

const variables:{slug:String,lang:String,type:String,limit:Number} = {slug:String(route.params.slug) , lang:"ar-EG" , type:'episode' , limit:limitt.value}
const showDef = ref([])
if(loadShows.value.length > 0){
  showDef.value = loadShows.value
}else{
  getData(variables)
}
async function getData(variable:{slug:String,lang:String,type:String,limit:Number}){
  const {data} = await useAsyncQuery(show,variable)
  console.log(data.value.shows[0])
  loadShows.value = data.value.shows[0]
}
 function loadMore() {
  limitt.value += 2;
  variables.limit = limitt.value;
  getData(variables);
}
const episodes = computed(()=>{
    return loadShows.value.all_episodes
  })
watch(
  () => episodes.value,
  (newVal, oldVal) => {
    if (limitt.value > episodes.value.length) {
      noMoreDataa.value = false;
    }
  }
); 
// get posters
 const wideCover = ref({})
getPosters().then((res)=>{
  wideCover.value = res.firstPoster.wide1Cover
})


</script>
<style lang="scss">
.show-content{
  p{
    line-height: 1.2;
  }
.watch{
  font-size: 18px;
}
}
</style>