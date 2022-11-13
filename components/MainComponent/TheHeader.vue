<template lang="pug">
div(class="container header")
    .header-top.space-between
      NuxtLink(to="/").logo
        img(src="../../static/logo.svg")
      ul.list-unstyled.d-none.d-md-flex.flex-row.mb-0
        li.d-flex.align-items-center
          .head-circle.center-items.ms-2 
            <svg xmlns="http://www.w3.org/2000/svg" width="22.47" height="17.998" viewBox="0 0 22.47 17.998">
              <path id="email" d="M20.208,1.75A2.246,2.246,0,0,1,22.47,4.013V17.484a2.247,2.247,0,0,1-2.263,2.263H2.263A2.184,2.184,0,0,1,.657,19.09,2.181,2.181,0,0,1,0,17.485V4.013A2.184,2.184,0,0,1,.658,2.407a2.181,2.181,0,0,1,1.6-.657Zm0,4.526V4.013l-9,5.631L2.263,4.013V6.275l8.946,5.578Z" transform="translate(0 -1.75)"/>
            </svg>
          span الاشتراك
        li.d-flex.px-4.align-items-center
          .head-circle.center-items.ms-2 
            <svg xmlns="http://www.w3.org/2000/svg" width="25.691" height="25.71" viewBox="0 0 25.691 25.71">
              <path id="Path_35232" data-name="Path 35232" d="M1217.5,439.478l-7.038-2.346a.806.806,0,0,1-.544-.776v-.012a.806.806,0,0,1,.544-.776l7.038-2.346a4.979,4.979,0,1,0-6.234-6.319L1208.9,434a.807.807,0,0,1-.777.544h-.011a.808.808,0,0,1-.777-.544l-2.346-7.037a4.979,4.979,0,1,0-6.319,6.235l7.1,2.367a.807.807,0,0,1,.544.776.019.019,0,0,0,0,.012.807.807,0,0,1-.544.776l-7.037,2.346a4.98,4.98,0,1,0,6.235,6.319l2.367-7.1a.808.808,0,0,1,.777-.544h.011a.807.807,0,0,1,.777.544l2.367,7.1a4.979,4.979,0,1,0,6.234-6.319" transform="translate(-1195.266 -423.495)"/>
            </svg>
          span تسوق الان  
        li.d-flex.align-items-center
          .head-circle.center-items
           span.en EN  
      button(class="main-btn") اتصل بنا
    .menu-nav.d-flex.align-items-center
      nav
        ul.list-unstyled.d-flex.mb-0.align-item
            li(v-for="(list,ind) in navLists"  :key="ind").cursor-p
              div(v-if="list.title == 'القائمه'" @click="openMenu()").align-item
                img(:src="`/images/HeaderIcons/${list.srcName}.svg`" :alt="`${list.pageLink} icon`") 
                span.ms-1.fw-bold.main-trans.me-3.fs-3.me-md-2.fs-md-6 {{list.title}}
              div(v-else).d-none.d-md-block 
                NuxtLink(:to="'/'+list.pageLink").align-item
                  img(:src="`/images/HeaderIcons/${list.srcName}.svg`" :alt="`${list.pageLink} icon`") 
                  span.me-1.fw-bold.main-trans.fs-5 {{list.title}} 
MainComponentMenu(v-if="showMenu" v-on:closeMenu="openMenu")                   
</template>
<script setup lang="ts">

let showMenu = ref(false)
function openMenu(){
  showMenu.value = !showMenu.value
  console.log(showMenu.value)
}
const navLists = ref([
  {
    srcName:'menu',
    title:'القائمه',
    pageLink:'menu'
  },
  {
    srcName:'food',
    title:'وصفات',
    pageLink:'food'
  },
  {
    srcName:'show',
    title:'برامج',
    pageLink:'shows'
  },
  {
    srcName:'read',
    title:'مقالات',
    pageLink:'read'
  },
  {
    srcName:'shop',
    title:'تسوق الان',
    pageLink:'shop'
  },
])

</script>

<style lang="scss">
@import "../../assets/css/scss/layouts/headers";
</style>
