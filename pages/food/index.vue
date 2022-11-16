<template lang="pug">
.food.mt-5
  .container
    KnowMoreFoodDescribe(:items='allData' :showHeader="true"  headerTitle="وصفات" sectionLink="food")
    button.main-btn.d-block.mx-auto.my-5( @click="loadMore()" v-if="noMoreData") عرض المزيد 

</template>

<script lang="ts" setup>
useHead({
  title: "احدث الواصفات",
});
const offset = ref(0);
const limit = ref(6);
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
const foodDef = ref([])
  const {data} = await useAsyncQuery(recentFood , variablees)
  foodDef.value = data.value.Article

async function loadMore(){
  limit.value += 6
  variablees.limit = limit.value
  const {data} = await useAsyncQuery(recentFood , variablees)
  foodDef.value = data.value.Article
}
const allData = computed(()=>{
  return foodDef.value
})
watch(()=> allData.value , (newVal,oldVal)=>{
  if(limit.value > allData.value.length ){
    noMoreData.value = false

  }
})
</script>

<style>

</style>