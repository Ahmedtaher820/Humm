<template lang="pug">
.container.mb-2x.mt-2x.mx-auto
    .head.d-flex.justify-content-between.align-items-center.mb-2x
        h2.main-head البرامج
        NuxtLink(to="/shows").main-btn اعرف المزيد
    .row
        .col-lg-6(v-for="show in showsFound" :key="show.id")
            HomeCompShowDisplay(:item="show")
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
const showsFound = ref([])
if (shows.value.length === 0) {
  const { data  } = await useAsyncQuery(query, variable);
  data.value.shows.forEach((e)=>{
    shows.value.push(e)
  })
  showsFound.value = shows.value.slice(0,4)
  }else{
  showsFound.value = shows.value.slice(0,4)
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
