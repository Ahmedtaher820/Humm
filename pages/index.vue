<template lang="pug">
div.index
    section.home-header.mt-2
        .container.position-relative
            .content.d-inline-block 
                h2.header-title عالم للأكل واللي #[br] بيحبوه
                button.main-btn اعرف المزيد
            .bg 
    section.articles.mb-2x.mt-2x
        HomeCompFood
    section 
      .container
        .img-contain.position-relative
            HomeCompDisplayPosters(:posterCover="firstPoster.wide1Cover.id" :posterTitle="firstPoster.wide1Cover.title" :posterUrl="firstPoster.wide1Cover.url")
    section.main-pb
      HomeCompReadArt
    section.auto-line.mb-2x.mt-2x
      HomeCompAdSlider
    section.press.mb-2x.mt-2x
      HomeCompPress(:firstArtBlog="firstArtBlog" , :normal1Cover="firstPoster.normal1Cover" , :normal2Cover="firstPoster.normal2Cover")
    section.shows.mb-2x.mt-3x
      div.shows.py-5
        HomeCompShows
    section.press.mb-3x.mt-2x
      HomeCompShop
    section.newsletter.mb-2x.mt-3x.pt-5
      HomeCompNewsletter
    section.press.mb-2x.mt-3x.pt-5
      HomeCompPressBlog
    section.brand.mb-2x.mt-3x.pt-5
      HomeCompBrands
    section.advert.mt-3x.pt-5.mb-3x.pb-4
      .container
          img(src="/images/FooterIcons/advertsting.png").img-fluid
</template>
<script setup lang="ts">
import {ArticleResult} from "../types/article.type";
import {Posters} from "../types/article.type"
definePageMeta({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "provide food for all people",
    },
  ],
});

const articleState = useArticles();

const query = gql`
  query articles( $lang:String , $eq:String,$status:String,$limit:Int ){
  Article(filter:{translations:{languages_code:{code:{_eq:$lang}}},status:{_eq:$status},type:{_eq:$eq}},limit:$limit){
   
    id
    user_created {
      first_name
      last_name
    }
    type
    slug
    category{
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
const variables = { limit: 8 , eq:"food" ,lang:"ar-EG",status:"published"};
if (articleState.value.length == 0) {
  const { data } = await useAsyncQuery<ArticleResult>(query, variables);
  if (data.value.Article.length > 0) {
    data.value.Article.forEach((element) => {
      articleState.value.push(element);
    });
  }
}
console.log(articleState.value)
const firstArtBlog = [...articleState.value.slice(0, 3)];
[1, 2, 34, 5];
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

// get posters
const getPosters = gql`
  query getPosters($lang:String){
  posters{
    translations(filter:{languages_code:{code:{_eq:$lang}}}){
      wide_url
      wide_title
      wide_cover{
        id
      }
      wide2_url
      wide2_title
      wide2_cover{
        id
      }
      normal_title
      normal_url
      normal_cover{
        id
      }
       normal2_title
       normal2_url
       normal2_cover{
         id
       }
     }
   }
 }
`
const posterVar = {lang:"ar-EG"}
const posters = usePosters()
if(posters.value.length === 0){
  const {data} = await useAsyncQuery<Posters>(getPosters,posterVar)
  if(data.value.posters.translations.length > 0){
    posters.value.push(data.value.posters.translations[0])
  }
}
// pass each cover to component
const post = posters.value[0]
const firstPoster = {
  wide1Cover:{id:post.wide_cover.id , title:post.wide_title , url:post.wide_url},
  wide2Cover:{id:post.wide2_cover.id , title:post.wide2_title , url:post.wide2_url},
  normal1Cover:{id:post.normal_cover.id , title:post.normal_title , url:post.normal_url},
  normal2Cover:{id:post.normal2_cover.id , title:post.normal2_title , url:post.normal2_url},
}

//  console.log(posters.value[0].wide_cover)
</script>
<style lang="scss">
.index {
  .home-header {
    height: 600px;
    .container {
      height: 100%;
    }
    
    .bg {
      background-image: url("/images/publicImg/header.svg");
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      bottom: 0px;
      left: -6.25rem;
      position: absolute;
      top: 0px;
      width: calc(100% + 200px);
      z-index: -1;
      height: 600px;
    }
    .content {
      background-color: $second-color;
      padding: calc(1.1625rem + 2.43529vw);
      position: relative;
      top: 35%;
      right: 1%;
      .header-title{
      font-size: 60px;
      min-width: calc(20vw + 3rem);
      font-weight: 600;
    }
    }
  }
  .articles {
    .under-line {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 1px;
        background-color: $main-color;
      }
    }
    .article-content {
      &.alone {
        box-shadow: 3px 4px 0px 0px $main-color;
        border: 1px solid $main-color;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img.art-img {
          width: 90%;
          display: block;
          margin: 0px auto;
        }
        &:hover {
          background-color: $main-color;
          color: $second-color;
          box-shadow: none;
        }
        &:hover svg {
          fill: $second-color;
        }
      }
    }
  }
  .img-contain {
    img{
      width: 100%;
    }
  }
  .shows{
    background-color: $main-color;
    h2{
      color: $second-color;
    }
  }
}
.cct {
  // max-width: 1320px;
  width: 1320px;
  height: 360px;
}
</style>
