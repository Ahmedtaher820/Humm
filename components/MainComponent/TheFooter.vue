<template lang="pug">
footer
    .container.mb-5
        .footer-nav.align-item.justify-content-between.pt-5.flex-column.flex-lg-row.gap-4.gap-lg-0
            ul.social
                li.ms-3.cursor-p
                    img(src="/images/FooterIcons/twitter.svg")
                li.ms-3.cursor-p
                    img(src="/images/FooterIcons/twitter.svg")

                li.ms-3.cursor-p
                    img(src="/images/FooterIcons/twitter.svg")

                li.ms-3.cursor-p
                    img(src="/images/FooterIcons/twitter.svg")

                li.cursor-p
                    img(src="/images/FooterIcons/twitter.svg")
  
            ul.nav          
                li.me-4.pe-2
                    NuxtLink(to="/").main-color.vhr-animation من نحن
                li.me-4.pe-2
                    NuxtLink(to="/").main-color.vhr-animation Careers
                li.me-4.pe-2
                    NuxtLink(to="/").main-color.vhr-animation الصحافه
                li.me-4.pe-2
                    NuxtLink(to="/").main-color.vhr-animation اعلن معنا  
                li.me-4.pe-2
                    NuxtLink(to="/").main-color.vhr-animation اتصل بنا
            NuxtLink(to="/").subscribe.main-shadow.main-border.main-trans.main-color #[img(src="/images/FooterIcons/email.svg")] الاشتراك
        .footer-logo.center-items.py-5
          img(src="/images/FooterIcons/footerHum.svg")
        .condition-nav.center-items
            ul
              li.me-4.pe-2
                  NuxtLink(to="/").main-color.vhr-animation الاحكام والشروط
              li.me-4.pe-2
                  NuxtLink(to="/").main-color.vhr-animation سياسه الخصوصيه
              li.me-4.pe-2
                  NuxtLink(to="/").main-color.vhr-animation سياسه الاسترجاع
              li.me-4.pe-2
                  NuxtLink(to="/").main-color.vhr-animation سياسه الشحن 
        p.lead.text-center.mt-3.mb-0 مصمم بواسطه #[img(src="/images/FooterIcons/heart.svg")] بيانات         
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
  footer{
   li{
    display: inline-block;
   }
    .footer-nav{
      border-top: 1px solid $main-color;
      
      ul {
        &.social{
          @extend .center-items;
          li{
            width: 32px;
            height: 32px;
            img{
            width: 100%;
            height: 100%;
          }
          }
         
        }
        &.nav{
          a{
            font-weight: 600;
            font-size: 16px;
          }
        }
      }
      .subscribe{
        padding: 8px 22px;
        @extend .main-hvr;
        &:hover{
          box-shadow: none;
        }
      }
    }
  }
</style>