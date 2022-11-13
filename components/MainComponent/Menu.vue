<template lang="pug">
.menu 
    .backdrop(@click="$emit('closeMenu')")
    .menu-bar
        div.close.cursor-p(@click="$emit('closeMenu')")
            span.amin-trans
            span.amin-trans
        ul.list-unstyled.links
            li
                NuxtLink(to="/") 
                    span(@click="$emit('closeMenu')") الرئيسيه
            li
                NuxtLink(to="./food")
                    span(@click="$emit('closeMenu')") وصفات
            li
                NuxtLink(to="/shows")  
                    span(@click="$emit('closeMenu')") برامج
            li
                NuxtLink(to="/read")  
                    span(@click="$emit('closeMenu')") المقالات
            li
                NuxtLink(to="/shop")     
                    span(@click="$emit('closeMenu')") تسوق الان 
            li
                NuxtLink(to="/") 
                    span(@click="$emit('closeMenu')") الصحافه
            li
                NuxtLink(to="/")
                    span(@click="$emit('closeMenu')")  من نحن
            li
                NuxtLink(to="/contact")
                    span(@click="$emit('closeMenu')")  اتصل بنا 
            li
                NuxtLink(to="/advertise") 
                    span(@click="$emit('closeMenu')") اعلن معنا
            li
                NuxtLink(to="/subscribe") 
                    span(@click="$emit('closeMenu')") الاشتراك
        ul.social.align-item.ps-0.gap-2.mt-5
            li.cursor-p
                img(src="/images/FooterIcons/twitter-black.svg")
            li.cursor-p
                img(src="/images/FooterIcons/twitter-black.svg")
            li.cursor-p
                img(src="/images/FooterIcons/twitter-black.svg")
            li.cursor-p
                img(src="/images/FooterIcons/twitter-black.svg")
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.menu{
    min-height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    
    z-index: 999;
    .menu-bar{
        position: absolute;
        background-color: $main-color;
        color: $second-color;
        padding: 50px;
        top: 0px;
        bottom: 0px;
        right: 0%;
        width: 25%;
        transform: translate(100%);
        opacity: 0;
        overflow-y: scroll;
        animation: animate .5s 1 ease-in-out both alternate;
        &::-webkit-scrollbar{
            width: 4px;
        }
        &::-webkit-scrollbar-track{
            background: #333;
            padding: 30px;
        }
        &::-webkit-scrollbar-thumb{
            background: #eee;
            border-radius: 10px;
            width: 8px;
        }
        .close{
            position: absolute;
            width: 60px;
            height: 60px;
            top: 30px;
            right: 30px;
            span{
                width: 50px;
                height: 3px;
                display: block;
                background-color: $second-color;
                cursor: pointer;
                &:nth-child(1){
                    transform: rotate(-45deg);
                }
                &:nth-child(2){
                    transform: rotate(45deg);
                }
            }
        }
        ul.links{
            margin-top: 60px;
            
            li{
                margin-bottom: 24px;
                a{
                    font-size: 32px;
                    color: white;
                    letter-spacing: .7px;
                    @extend .main-trans;
                    &:hover{
                    letter-spacing: 3.7px;
                        color: red;
                    }
                }
            }
        }
        ul.social{
            list-style: none;
        }
        @media (max-width:768px){
            width: 60%;
        }
    }
}
@keyframes animate{
    to{
        transform: translate(0%);
        opacity: 1;
    }
}
</style>