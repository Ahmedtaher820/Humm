<template lang="pug">
RouterLink(:to="items.type+'/'+items.slug").article-content.d-flex.gap-3.main-trans(:class="oneIt")
    img(v-if="show" src="/images/HomeIcons/video.svg" alt="vedio icon").main-trans.d-block.full-w
    div.img-read(v-else)
        img( :src="`https://board.humm.world/assets/${items.translations[0].cover.id}?fit=cover&quality=80`" loading="lazy" :alt="items.translations[0].title").main-trans.d-block.full-w
    .content.d-flex.flex-column.gap-2
        h3(class="mb-0") {{items.translations[0].title}}
        div.d-flex.gap-3.user-info
            div
                svg(id="user-6-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24")
                    path(id="Path_35283" data-name="Path 35283" d="M0,0H24V24H0Z" fill="none")
                    path(id="Path_35284" data-name="Path 35284" d="M12,17a10.68,10.68,0,0,1,8.607,3.925l-1.842.871A8.867,8.867,0,0,0,12,19a8.867,8.867,0,0,0-6.765,2.8l-1.841-.872A10.677,10.677,0,0,1,12,17ZM12,2a5,5,0,0,1,5,5v3a5,5,0,0,1-4.783,4.995L12,15a5,5,0,0,1-5-5V7a5,5,0,0,1,4.783-4.995Zm0,2A3,3,0,0,0,9,6.824L9,7v3a3,3,0,0,0,5.995.176L15,10V7a3,3,0,0,0-3-3Z")
                span.date-text.fw-light.d-inline-block.me-1 {{items.user_created.first_name}} {{items.user_created.last_name}}  
            div
                svg(id="time-line" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="me-1")
                    path(id="Path_35236" data-name="Path 35236" d="M0,0H24V24H0Z" fill="none")
                    path(id="Path_35237" data-name="Path 35237" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20Zm1-8h4v2H11V7h2Z") 
                span.date-text.fw-light.me-1 {{dateFormat}}  
</template>
<script setup lang="ts" >
import {dateForm} from "./modules/dateFormat"
const props = defineProps({
    items:{
        type:Object,
        required:true,
    },
    oneItems:{
        type:Boolean,
        default:false
    }
})
const dateFormat = dateForm(props.items.date_created)
console.log(props.items)
const oneIt = computed(()=>{
    if(props.oneItems == true){
        return 'oneItem'
    }
    else{
        return 'moreItem'
    }
})
</script>

<style lang="scss">
.oneItem{
    @extend .alone;
    @extend .main-border;
    @extend .m-shadow;
    padding:24px 10px ;
    flex-direction: column;
    .img-read{
        img{
    
            width: 90%;
            height: 270px;
            margin: 0px auto;
        }
       
    }
    .content{
        padding-right:28px ;
        justify-content: space-between;
        h3{
            max-width: 400px;
        }
        .user-info{
            flex-direction: row;
        align-items: center;

        }
    }
}
.moreItem{
    @media (max-width:768px) {
        flex-direction: column;
    }
    img{
    width: 100%;
    height:180px;
}
.content{
 
    .user-info{
        flex-direction:column;
        align-items: flex-start;
    }
}
}
</style>