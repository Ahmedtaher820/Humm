<template lang="pug">
.food.mt-5
  .container
    KnowMoreFoodDescribe(:items='foods' :showMoreBtn="true" headerTitle="وصفات")
</template>

<script lang="ts" setup>
const offset = ref(0);
const limit = ref(8);
const recentFood = gql`
  query articles( $lang:String,$type:String,$limit:Int = 6){
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
const variablees = {lang:"ar-EG",type:"food",limit:limit.value}
const getFoods = useArticles()
const foods = ref([])
if(getFoods.value.length > 0){
  foods.value = getFoods.value
}else{
  const {data} = await useAsyncQuery(recentFood , variablees)
  getFoods.value = data.value.Article
  foods.value = getFoods.value
}
</script>

<style>

</style>