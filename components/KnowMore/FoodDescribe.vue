<template lang="pug">
temaplte(v-if="isShow")
  .show-desc 
    MainComponentSectionHeader(v-if="showHeader" :sectionTitle="headerTitle" ,:showLink="showLink" :sectionLink="sectionLink")
    .row
        .col-md-6.mb-md-3.px-2(v-for="{user_created,slug,type,category,translations,date_created} in items")
            template(v-if="isHead")
              NuxtLink(:to="'/shows/'+slug" :title="translations[0].title").article-content.show-box.d-flex.gap-3.main-trans.flex-column.flex-lg-row.text-center.text-md-end.mb-3.mb-md-0
                  div.position-relative.show-img(:class="`${pending ?'pending' :''}`")
                    img(:src="getImages(translations[0].cover.id)" loading="lazy" :alt="translations[0].title").main-trans.full-w
                    Icon(:name="icon" size="32" ).position-absolute.icon.main-trans
                  .content.d-flex.flex-column.justify-content-center.gap-1.pe-2
                      h2.fw-bolder.mb-0 {{translations[0].title}}
                      h5(class="mb-0 ") {{translations[0].description}}
                      div
                        svg(id="video-line" class="vedio-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                          path(id="Path_35238" data-name="Path 35238" d="M0,0H24V24H0Z" fill="none")
                          path(id="Path_35239" data-name="Path 35239" d="M3,3.993A.994.994,0,0,1,3.993,3H20.007A.994.994,0,0,1,21,3.993V20.007a.994.994,0,0,1-.993.993H3.993A.994.994,0,0,1,3,20.007ZM5,5V19H19V5Zm5.622,3.415L15.5,11.667a.4.4,0,0,1,0,.666l-4.88,3.252A.4.4,0,0,1,10,15.253V8.747a.4.4,0,0,1,.622-.332Z")
                        span.date-text.fw-medium 10 
            template(v-else)
              NuxtLink(:to="'/shows/'+$route.params.slug+'/'+slug" :title="translations[0].title").article-content.d-flex.gap-3.main-trans.flex-column.flex-lg-row.text-center.text-md-end.mb-3.mb-md-0.p-4.main-border
                div.position-relative.show-img(:class="`${pending ?'pending' :''}`")
                  img(:src="getImages(translations[0].cover.id)" loading="lazy"  :alt="translations[0].title").main-trans.full-w
                  Icon(:name="icon" size="32" ).position-absolute.icon.main-trans
                .content.d-flex.flex-column.justify-content-between.gap-2.pe-2
                    .show-type: NuxtLink(:to="`/shows/${$route.params.slug}`" :title="showHeadUrl").main-trans.main-border {{showHeadUrl}}
                    h5(class="mb-0") {{translations[0].title}}
                    div
                      svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" )
                          path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                          path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                      span.date-text.fw-light {{dateFormat(date_created)}}
                  
template(v-else)
  .food-desc 
    MainComponentSectionHeader(v-if="showHeader" :sectionTitle="headerTitle" ,:showLink="showLink" :sectionLink="sectionLink")
    .row 
      .col-xl-4.col-md-6.p-2(v-for="{user_created,slug,type,category,translations,date_created} in items")
          NuxtLink(:to="'/'+type+'/'+slug").article-content.d-flex.gap-3.main-trans.flex-column.flex-lg-row.text-center.text-md-end.mb-3.mb-md-0
            div.position-relative(:class="`${pending ?'pending' :'pending'}`" )
              img(:src="getImages(translations[0].cover.id)" loading="lazy" :alt="translations[0].title").art-img.main-trans
              Icon(:name="icon" size="32" v-if="sectionLink == 'food'").position-absolute.icon.main-trans
            .content.d-flex.flex-column.justify-content-between.gap-2.pe-2
                .art-type( v-if="category !== null"): NuxtLink(:to="`/${type}/category/${category.slug}`").main-trans {{category.translations[0].title}}
                h5(class="mb-0" v-if="sectionLink == 'food'") {{translations[0].title.slice(0,50)}} {{translations[0].title.length - 50 > 0 ? '...' : ''}}
                h5(class="mb-0" v-else) {{translations[0].title}}
                div.d-flex.gap-2.user-info.flex-column
                    div
                      svg(id="user-6-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                        path(id="Path_35283" data-name="Path 35283" d="M0,0H24V24H0Z" fill="none")
                        path(id="Path_35284" data-name="Path 35284" d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z")
                      span.date-text.fw-light.d-inline-block  {{user_created.first_name}} {{user_created.last_name}}
                  

</template>
<script lang="ts" setup>
import {dateForm} from "../modules/dateFormat";

defineProps({
  headerTitle:{
    type:String,
    default:"احدث الواصفات"
  },
  showLink:{
    type:String,
    default:true
  },
  items:{
    type:Array,
    required:true
  },
  
    sectionLink:{
      type:String
    }
  ,
  dataEnded:{
    type:Boolean,
    default:false
  },
  showHeader:{
    type:Boolean,
    
  },
  isShow:{
    type:Boolean,
    default:false
  },
  showHeadUrl:{
    type:String
  },
  isHead:{
    type:Boolean,
    default:false
  },
  pending:{
    type:Boolean
  }
})
const icon = ref('uil:video')
function dateFormat(date:string){
 return dateForm(date).value
} 

</script>

<style lang="scss" scoped>
.food-desc {
  button{
    width: fit-content;
  }
}
.show-desc {
  .article-content {
    .show-img{
      position: relative;
      &.pending{
          &::after{
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
            animation: movee .2s infinite forwards;
          }
          opacity: 0;
        }
      img{
        object-fit: cover;
        height: 150px;
        width: 150px;
        
      }
    }
  }
@keyframes move{
  0% {
    background-position: -800px 0
  }
  100% {
    background-position: 800px 0
  }
}
  .show-type{
      a {
        padding:8px 16px;
        display: inline-block;
        background-color: $second-color;
        color: $main-color;
        border-radius: 30px;
        font-weight: 600;
        &:hover{
          background-color: $main-color;
          color:$second-color
        }
      }
    }
}
.article-content.show-box{
  border: 1px solid $main-color !important;
  padding: 26px;
  margin-bottom: 10px !important;
  img{
    object-fit: cover;
  }
.vedio-line{
  fill:#777;
  margin-left:3px ;
}
}
</style>