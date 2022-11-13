<template lang="pug">
.container 
    .news.m-bigshadow.main-border.p-5
        .row 
            .col-lg-5
                h3.main-bg-head اشترك في نشرة همم الأسبوعية 
            .col-lg-7
                form(@submit="sendNews").d-flex.flex-column.gap-4
                    h4.fw-bold.mb-0 نشرة همم البريدية
                    .input-group.d-flex.gap-4
                        .input.g
                            input(type="radio" value="read" id="read").ms-2
                            label(for="read").fw-bold مقالات
                        .input.g
                            input(type="radio" value="show" id="show").ms-2
                            label(for="show").fw-bold برامج
                        .input.g
                            input(type="radio" value="food" id="food").ms-2
                            label(for="food").fw-bold وصفات
                        .input.g
                            input(type="radio" value="press" id="press").ms-2
                            label(for="press").fw-bold مقالات    
                    .user-info.d-flex.gap-2.flex-column.flex-lg-row
                        input(type="text" placeholder="ادخل اسمك بالكامل").main-border.pe-4.py-2        
                        input(type="email" placeholder="البريد الالكتروني").main-border.pe-4.py-2        
                        input(type="submit" value="الاشتراك").main-border.py-2.px-3.main-trans
</template>

<script>
</script>

<style lang="scss">
.news{
        h3{
            max-width: 430px;
            font-weight: bold;
            line-height: 1.4;
            @media (max-width:991px) {
            line-height: 1;
                
            }
        }
    form{
        input{
            outline: none;
            &::placeholder{
                font-weight: 600;
                color: $main-color;
            }
        }
        input[type="submit"]{
            background-color: $main-color;
            color:$second-color;
            &:hover{
                @extend .main-hvr;
                background-color: $second-color;
                color:$main-color;
            }
        }
    }
}
</style>