<template lang="pug">
.food.mt-5
  .container
    KnowMoreFoodDescribe(:items='allData' :showHeader="true" headerTitle="وصفات" sectionLink="food")
    button.main-btn.d-block.mx-auto.my-5( @click="loadMore()" v-if="noMoreData") عرض المزيد 

</template>

<script lang="ts" setup>
const offset = ref(0);
const limit = ref(8);
const noMoreData = ref(true)
const recentFood = gql`

  query articles( $lang:String,$type:String,$limit:Int){
  Article(
    sort: "-date_created"
    filter:{
    translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:"published"} , type:{_eq:$type}}
     limit:$limit
    )
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
let variablees = {lang:"ar-EG",type:"food",limit:limit.value}
const getFoods = useMoreArticles()
const foods = ref([])
 function getAllArticles(){
  if(getFoods.value.length > 0){
    foods.value = getFoods.value
  }else{
    getData(variablees)
    foods.value = getFoods.value
  }
}
getAllArticles();
async function getData(variablees:{lang:String , type:String , limit:Number}){
  const {data} = await useAsyncQuery(recentFood , variablees)
  getFoods.value = data.value.Article
}
function loadMore(){
  limit.value += 8
  variablees.limit = limit.value
  getData(variablees)
}
const allData = computed(()=>{
  return getFoods.value
})
watch(()=> allData.value , (newVal,oldVal)=>{
  if(limit.value > allData.value.length ){
    noMoreData.value = false

  }
})
</script>

<style>

</style>