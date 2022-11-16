<template lang="pug">
.shows
    .container.mx-auto
        .show-episodes.my-5
            KnowMoreFoodDescribe(:showHeader="true" :isHead="true" :showLink="false" sectionTitle="برامج" :showHeadUrl="shows[0].translations.title" :items="shows" ,   :dataEnded="true" :isShow="true")
        div.mb-5
          HomeCompDisplayPosters(:posterCover="wideCover.id" :posterTitle="wideCover.title" :posterUrl="wideCover.url")
</template>
    
<script lang="ts" setup>
  import {getPosters} from "../../composables/getPoster";
useHead({
  title:'احدث البرامج'
})
const noMoreDataa = ref(true)
    const query = gql`
    query getShows($lang: String, $offset: Int, $limit: Int) {
        shows(
          filter: {
            translations: { languages_code: { code: { _eq: $lang } } }
          }
          offset: $offset
          limit: $limit
          sort: "date_created"
        ) {
          slug
          user_created {
            first_name
            last_name
          }
          translations(filter: { languages_code: { code: { _eq: $lang } } }) {
            title
            description
            cover {
              id
            }
          }
          date_created
          
        }
      }
    `;
    // here use limit = 5 ==> because item 6 it's cover is null
    const variable = {lang:"ar-EG",  offset: 0,limit:5};
    const shows = useShows();
    
    if (shows.value.length === 0) {
      const { data } = await useAsyncQuery(query, variable);
      data.value.shows.forEach((e)=>{
        console.log(e)
        shows.value.push(e)
      })
    }
// get posters
const wideCover = ref({})
getPosters().then((res)=>{
    wideCover.value = res.firstPoster.wide1Cover
})


    </script>
    <style lang="scss" scoped>
    .main-btn {
      box-shadow: 3px 3px 0px rgba(255, 255, 255) !important;
      color: $main-color;
      background-color:$second-color;
      &:hover{
        color: $second-color;
        background-color:$main-color;
        border: 1px solid $second-color;
      }
    }
    </style>
    