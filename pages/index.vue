<template lang="pug">
div.index
    section.home-header.mt-2
        .container.position-relative
            .content.d-inline-block 
                h2 A world for food and its lovers
                button.main-btn Know more
            .bg 
    section.articles.mb-2x.mt-2x
        .container
            h2.mb-2x Food
            .row.under-line.main-pb
                .col-lg-4(v-for="{user_created , slug,type,category,translations,date_created} in firstArtBlog" :key="art.id" )
                  HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true")
            .row.main-pt.main-pb               
                .col-lg-4
                    div(v-for="{user_created , slug,type,category,translations,date_created} in firstCol")
                      HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true")
                .col-lg-4.position-relative
                    .article-content.alone.d-flex.flex-column.gap-3.p-3.position-relative.position-lg-absolute.main-trans(v-for="{user_created , slug,type,category,translations,date_created} in secondCol" :key="art.id")
                        div
                          img(:src="`https://board.humm.world/assets/${translations[0].cover.id}?fit=cover&quality=80`").art-img.main-trans
                        .content.d-flex.flex-column.gap-3
                            .art-type: NuxtLink(:to="`food/category/dessert`") Dessert
                            h3(class="mb-0") Serve Up Some Blue Drinks at Your 4th of July Cookout
                            div.d-flex.align-items-center.gap-1
                              svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                                path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                                path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                              span.date-text.fw-light 2 April 2022                                                

                .col-lg-4
                    .div(v-for="{user_created , slug,type,category,translations,date_created} in lastCol")
                      HomeCompFoodBox(:userCreated="user_created" , :slug="slug" , :type="type" , :category="category",:translations="translations" , :date_created="date_created" :isOneItem="false" :moreItem="true")
    section 
      .container
        .img-contain.position-relative 
    section.main-pb
      HomeCompReadArt(:secondCol="secondCol" :firstCol="firstCol")
    section.auto-line.mb-2x.mt-2x
      HomeCompAdSlider
    section.press.mb-2x.mt-2x
      HomeCompPress(:firstArtBlog="firstArtBlog")
    section.shows.mb-2x.mt-3x
      div.shows.py-5
        HomeCompShows(:firstArtBlog="firstArtBlog" :activeShow="secondCol" )
    section.press.mb-2x.mt-2x
      HomeCompShopsShop(:shops="shops")
</template>
<script setup lang="ts">
import ArticleResult from "../types/interfaces";
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
  query GetArticle($limit: Int) {
    Article(limit: $limit) {
      id
      user_created {
        first_name
        last_name
      }
      type
      slug
      press_link
      category {
        translations {
          title
        }
      }
      translations {
        title
        cover {
          id
        }
      }
      date_created
    }
  }
`;
const variables = { limit: 8 };
if (articleState.value.length == 0) {
  const { data } = await useAsyncQuery<ArticleResult>(query, variables);
  if (data.value.Article.length > 0) {
    data.value.Article.forEach((element) => {
      articleState.value.push(element);
    });
  }
}
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
      left: 5.12%;
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
        width: 80%;
        img.art-img {
          width: 100%;
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
    height: 362px;
    background: url("../public/images/HomeIcons/group.png");
    background-size: contain;
    background-repeat: no-repeat;
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
