<template lang="pug">
.container
    MainComponentSectionHeader(sectionTitle="تسوق الان" sectionLink="food")
    .shop-items 
        .row
            .col-lg-3(v-for="({user_created , slug,type,category,translations,date_created},ind) in shops" :key="ind" )
                .shop-box.p-3.d-flex.justify-content-between.flex-column.main-trans.mb-3.mb-lg-0
                    .shop-img 
                        img(src="/images/HomeIcons/shop.png",alt="shop image ").full-w
                    h5.my-4 حزم ايرلي جراي + كيس شاي اخضر مجانا
                    .price.flex-item.space-between 
                        h6.text-danger.fw-bold LE 240.00
                        div.cart.center-items.main-trans
                            svg(xmlns="http://www.w3.org/2000/svg" width="17.489" height="17.777" viewBox="0 0 17.489 17.777")
                                path(id="Path_4" data-name="Path 4" d="M3.471,5.654.757,2.941,1.941,1.757,4.654,4.471H17.409a.837.837,0,0,1,.8,1.077L16.2,12.243a.837.837,0,0,1-.8.6H5.145v1.674H14.35v1.674H4.308a.837.837,0,0,1-.837-.837Zm1.255,13.88a1.255,1.255,0,1,1,1.255-1.255A1.255,1.255,0,0,1,4.726,19.534Zm10.042,0a1.255,1.255,0,1,1,1.255-1.255A1.255,1.255,0,0,1,14.768,19.534Z" transform="translate(-0.757 -1.757)") 
    .about.mt-3x.pt-5.mb-3x
        .row 
            .col-md-6 
                .text.mt-2.mb-3.mb-md-0
                    h3.main-bg-head عالم للأكل واللي بيحبوه.
                    p.lead.mt-3.mb-4 همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة - ستجد هنا كل ما تحتاجه لصنع طعام رائع ، للعثور على هدايا رائعة ، لتدليل نفسك ، وترقية منزلك. يتم استيراد الكثير من منتجاتنا وحزمنا ، لذلك لن تجدها في أي مكان آخر - ترقبوا المزيد والمزيد من المنتجات التي تأتي إلى عالم همم كل يوم ، من جميع أنحاء العالم.
                    button.py-2.px-5.main-border.main-trans  عن همم
            .col-md-6 
                .about.txt-img
                    img(src="/images/HomeIcons/shop-text.png" alt="shop text")
</template>

<script lang="ts" setup>
    defineProps({
        shops:{
            type:Array,
            required:true
        },
})
 </script>
<style lang="scss">
.shop-items{
    .shop-box{
    border: 1px solid $main-color;
    &:hover{
        @extend .main-hvr
    }
    .cart{
        &:hover{
            background-color: $main-color;
            svg{
                
                path{
                    fill:$second-color
                }
            }
        }
        width: 40px;
        height: 40px;
        border: 1px solid $main-color;
    }
}
}
.about{
    .text{
        button{
            background-color: $second-color;
            font-size: 18px;
            font-weight: 600;
            &:hover{
                @extend .main-hvr
            }
        }
    }
    .about.txt-img {
    img{
        width: 100%;
        height: 100%;
    }
}
}

</style>