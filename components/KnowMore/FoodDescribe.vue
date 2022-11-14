<template lang="pug">
.food-desc 
    MainComponentSectionHeader(:sectionTitle="headerTitle" ,:showLink="showLink" )
    .row 
        .col-lg-4.col-md-6.mb-md-3(v-for="{user_created,slug,type,category,translations,date_created} in items")
          NuxtLink(:to="'/'+type+'/'+slug").article-content.d-flex.gap-3.main-trans.flex-column.flex-lg-row.text-center.text-md-end.mb-3.mb-md-0
            div.position-relative
              img(:src="getImages(translations[0].cover.id)" loading="lazy" :alt="translations[0].title").art-img.main-trans
              Icon(:name="icon" size="32").position-absolute.icon.main-trans
            .content.d-flex.flex-column.justify-content-between.gap-2.pe-2
                .art-type: NuxtLink(:to="`/food/category/${category.slug}`").main-trans {{category.translations[0].title}}
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
                      span.date-text.fw-light {{dateFormat(date_created)}}

</template>
<script lang="ts" setup>
import {dateForm} from "../modules/dateFormat";

defineProps({
  headerTitle:{
    type:String,
    default:"احدث الواصفات"
  },
  showLink:{
    type:Boolean,
    default:true
  },
  showMoreBtn:{
    type:Boolean,
    default:false
  },
  items:{
    type:Array,
    required:true
  },
  dataEnded:{
    type:Boolean,
    default:false
  }
})
const icon = ref('uil:video')
const limit = ref(0)
const getFoods = useArticles()
const emit = defineEmits(['loadmore'])
function dateFormat(date:string){
  dateForm(date)
} 

</script>

<style lang="scss">
.food-desc {
  button{
    width: fit-content;
  }
}
</style>