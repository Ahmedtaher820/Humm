<template lang="pug">
slot(name="onItem" v-if="isOneItem")
        NuxtLink(:to="'/'+type+'/'+slug").article-content.d-flex.flex-column.gap-3.main-trans.alone
            img(v-if="show" src="/images/HomeIcons/video.svg" alt="vedio icon").main-trans.d-block.full-w
            img(v-else  :src="getImages(translations[0].cover.id)" loading="lazy" :alt="translations[0].title").art-img.main-trans.d-block.full-w
            .content.d-flex.flex-column.justify-content-between.gap-3.pe-3
              .art-type: NuxtLink(:to="`/food/category/${category.slug}`").main-trans {{category.translations[0].title}}
              h3(class="mb-0") {{translations[0].title}}
              div.d-flex.gap-4.align-items-center.user-info
                div
                  svg(id="user-6-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                    path(id="Path_35283" data-name="Path 35283" d="M0,0H24V24H0Z" fill="none")
                    path(id="Path_35284" data-name="Path 35284" d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z")
                  span.date-text.fw-light.mt-2.d-inline-block {{userCreated.first_name}} {{userCreated.last_name}}  
                div
                  svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="me-1")
                      path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                      path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                  span.date-text.fw-light {{dateFormat}}  
slot(v-else-if="moreItem")
      NuxtLink(:to="'/'+type+'/'+slug").article-content.d-flex.gap-3.main-trans( v-if="moreItem").flex-column.flex-lg-row.text-center.text-md-end.mb-3.mb-md-0
        | {{cat}}
        div
          img(:src="getImages(translations[0].cover.id)" loading="lazy" :alt="translations[0].title").art-img.main-trans
        .content.d-flex.flex-column.justify-content-between.gap-2.pe-2
            .art-type: NuxtLink(:to="`${type}/category/${category.slug}`").main-trans {{category.translations[0].title}}
            h5(class="mb-0") {{translations[0].title.slice(0,50)}} {{translations[0].title.length - 50 > 0 ? '...' : ''}}
            div.d-flex.gap-2.user-info.flex-column
                div
                  svg(id="user-6-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                    path(id="Path_35283" data-name="Path 35283" d="M0,0H24V24H0Z" fill="none")
                    path(id="Path_35284" data-name="Path 35284" d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z")
                  span.date-text.fw-light.d-inline-block  {{userCreated.first_name}} {{userCreated.last_name}}
                div
                  svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" )
                      path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                      path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                  span.date-text.fw-light {{dateFormat}}
            

</template>

<script lang="ts" setup>
import {dateForm} from "../modules/dateFormat";
const icon = ref('uil:video')

const props = defineProps({
  userCreated: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
  translations: {
    type: Object,
    required: true,
  },
  date_created: {
    type: String,
    required: true,
  },
  isOneItem: {
    type: Boolean,
    default: false,
  },
  moreItem: {
    type: Boolean,
    default: false,
  },
  isFoods:{
    type:Boolean,
    default:false
  },
  readSection: {
    type: Boolean,
  },
  userInfo: {
    type: Boolean,
  },
  show:{
    type:Boolean,
    defaut:false
  },
  id:{
    type:String
  },
});
const dateFormat = dateForm(props.date_created)
</script>

<style lang="scss">
@import "../../assets/css/scss/layouts/foodbox";
</style>
