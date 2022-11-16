<template lang="pug">
.container(v-if="articleState.length > 0")
    MainComponentSectionHeader(sectionTitle="الواصفات" sectionLink="food")
    .row.under-line.main-pb
        .col-lg-4.col-md-6.mb-3.mb-lg-0(v-for="{id,user_created , slug,type,category,translations,date_created} in firstArtBlog" :key="id" )
            HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true" , :userInfo="true")
    .row.main-pt.main-pb.d-flex
        .col-lg-4.col-md-6
            div(v-for="{user_created , slug,type,category,translations,date_created} in firstCol").mb-md-3
                HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category" :translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true")
        .col-xl-4.col-md-6.position-relative
            NuxtLink(:to="type+'/'+slug" v-for="{id,user_created , slug,type,category,translations,date_created } in secondCol" :key="id").article-content.alone.d-flex.flex-column.gap-2.position-relative.position-md-absolute.main-trans
                div
                    img(:src="getImages(translations[0].cover.id)").art-img.main-trans
                .content.d-flex.flex-column.gap-2.px-3
                    .art-type: NuxtLink(:to="`/food/category/${category.slug}`") {{category.translations[0].title}}
                    h5(class="mb-0") {{translations[0].title}}
                    div.d-flex.gap-2.user-info.flex-column
                        div
                            svg(id="user-6-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                                path(id="Path_35283" data-name="Path 35283" d="M0,0H24V24H0Z" fill="none")
                                path(id="Path_35284" data-name="Path 35284" d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z")
                            span.date-text.fw-light.d-inline-block  {{user_created.first_name}} {{user_created.last_name}}
                        div
                            svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" )
                                path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                                path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                            span.date-text.fw-light {{formatDatee}}                                              

        .col-xl-4.col-md-6
            .div(v-for="{id,user_created , slug,type,category,translations,date_created} in lastCol" :key="id").mb-md-3
                HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true")

</template>
<script setup lang="ts">
import {ArticleResult} from "../../types/article.type";
import {dateForm} from "../../components/modules/dateFormat"
import { formatDate } from "@vueuse/shared";

const articleState = useArticles();
const query = gql`
  query GetArticles( $lang:String="ar-EG",$type:String ="food",$limit:Int = 6){
  Article(
    sort: "-date_created"
    filter:{
    translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:"published"} , type:{_eq:$type}} limit:$limit)
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

`;
const variables = { eq:"food" ,lang:"ar-EG",stats:"published",limit:8};
articleState.value = []
if (articleState.value.length == 0) {
  const { data } = await useAsyncQuery<ArticleResult[]>(query, variables);
  if (data.value.Article.length > 0) {
    data.value.Article.forEach((element) => {
      articleState.value.push(element);
    });
  }
}
const firstArtBlog = computed(()=>{
  return [...articleState.value.slice(0, 3)];
}) 
const firstCol = computed(() => {
  return [...articleState.value.slice(3, 5)];
});
const secondCol = computed(() => {
  return [...articleState.value.slice(5, 6)];
});
const lastCol = computed(() => {
  return [...articleState.value.slice(6, 8)];
});
const shops = computed(() => {
  return [...articleState.value.slice(2, 6)];
});
console.log(secondCol.value[0].date_created)
const formatDatee = dateForm(secondCol.value[0].date_created)
</script>