<template lang="pug">
.read.mt-5
  .container
    KnowMoreFoodDescribe(:items='allDataa' headerTitle="مقالات" :showHeader="true" :showLink="false")
    button.main-btn.d-block.mx-auto.my-4( @click="loadMore()" v-if="noMoreDataa") عرض المزيد 

</template>
<script setup lang="ts">
useHead({
  title:'احدث المقالات'
})
const limitt = ref(6);
const noMoreDataa = ref(true);
const recentFoodd = gql`
query articles( $lang:String,$eq:String,$limit:Int,$status:String ){
  Article(
    sort: "date_created" 
    filter:{translations:{languages_code:{code:{_eq:$lang}}}
      status:{_eq:$status}
      type:{_eq:$eq}},
      limit:$limit
      )
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
`;
let variabls = {lang:"ar-EG" ,limit:limitt.value,eq:"read" ,status:"published"}
const getReadArt = useReadArt();
const foodss = ref([]);
function getAllArticles() {
  if (getReadArt.value.length > 0) {
    foodss.value = getReadArt.value;
  } else {
    getDataa(variabls);
    
    foodss.value = getReadArt.value;
  }
}
getAllArticles();
async function getDataa(variabls: {lang: String;eq: String;limit: Number;status:String}) {
  const { data } = await useAsyncQuery(recentFoodd, variabls);
  getReadArt.value = data.value.Article;
  console.log(getReadArt.value)
}
function loadMore() {
  limitt.value += limitt.value;
  variabls.limit = limitt.value;
  getDataa(variabls);
}
const allDataa = computed(() => {
  return getReadArt.value;
});
watch(
  () => allDataa.value,
  (newVal, oldVal) => {
    if (limitt.value > allDataa.value.length) {
      noMoreDataa.value = false;
    }
  }
);

</script>
