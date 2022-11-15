<template lang="pug">
.shows
    .container.mx-auto
        .show-episodes.mb-5
            KnowMoreFoodDescribe(:showHeader="false" :showHeadUrl="shows[0].translations.title" :items="shows" , sectionLink='read'  :dataEnded="true" :isShow="true")
        button.main-btn.d-block.mx-auto.my-4( @click="loadMore()" v-if="noMoreDataa") عرض المزيد 
        div.mb-5
        //- HomeCompDisplayPosters(:posterCover="wideCover.id" :posterTitle="wideCover.title" :posterUrl="wideCover.url")
</template>
    
<script lang="ts" setup>
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
          id
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
    const variable = {lang:"ar-EG",  offset: 0,limit:4};
    const shows = useShows();
    if (shows.value.length === 0) {
      const { data } = await useAsyncQuery(query, variable);
      data.value.shows.forEach((e)=>{
        console.log(e)
        shows.value.push(e)
      })
    }
    
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
    