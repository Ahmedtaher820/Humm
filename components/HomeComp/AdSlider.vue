<template lang="pug">
div    
    div.line-one
        div.line-contain
            div.align-item.gap-3.text-success.cursor-p
                span Serve Up Some Blue Drinks at Your 4th of July Cookout 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path id="Path_35234" data-name="Path 35234" d="M1451.974,630.408a16,16,0,0,1-16-16,16,16,0,0,1-16,16,16,16,0,0,1,16,16,16,16,0,0,1,16-16" transform="translate(-1419.974 -614.408)"/>
                </svg>
            div.align-item.gap-3.text-primary.cursor-p
                span Serve Up Some Blue Drinks at Your 4th of July Cookout 
                <svg xmlns="http://www.w3.org/2000/svg" width="35.013" height="15.603" viewBox="0 0 35.013 15.603">
                <path id="Path_35233" data-name="Path 35233" d="M1233.385,714.815a1.653,1.653,0,0,0,1.651,1.652h6.766v2.845h-6.766a1.654,1.654,0,0,0,0,3.308h6.766v2.842h-6.766a1.652,1.652,0,0,0,0,3.3h9.564v-.01c2.242-.1,3.661-1.8,4.8-3.623a4.834,4.834,0,0,1,4.34-2.217h12.438a2.116,2.116,0,1,0,0-4.227h-12.7a4.629,4.629,0,0,1-4.047-1.793c-1.222-1.814-2.554-3.626-4.834-3.723v-.011h-9.564a1.651,1.651,0,0,0-1.651,1.652" transform="translate(-1233.385 -713.163)"/>
                </svg>
            
            div.align-item.gap-3.text-danger.cursor-p    
                span Serve Up Some Blue Drinks at Your 4th of July Cookout 
                <svg xmlns="http://www.w3.org/2000/svg" width="25.691" height="25.71" viewBox="0 0 25.691 25.71">
                <path id="Path_35232" data-name="Path 35232" d="M1217.5,439.478l-7.038-2.346a.806.806,0,0,1-.544-.776v-.012a.806.806,0,0,1,.544-.776l7.038-2.346a4.979,4.979,0,1,0-6.234-6.319L1208.9,434a.807.807,0,0,1-.777.544h-.011a.808.808,0,0,1-.777-.544l-2.346-7.037a4.979,4.979,0,1,0-6.319,6.235l7.1,2.367a.807.807,0,0,1,.544.776.019.019,0,0,0,0,.012.807.807,0,0,1-.544.776l-7.037,2.346a4.98,4.98,0,1,0,6.235,6.319l2.367-7.1a.808.808,0,0,1,.777-.544h.011a.807.807,0,0,1,.777.544l2.367,7.1a4.979,4.979,0,1,0,6.234-6.319" transform="translate(-1195.266 -423.495)"/>
                </svg>

    div.line-two
        div.line-contain
            div.align-item.gap-3.text-light.cursor-p
                img(src="/images/HomeIcons/fire.png")
                span Serve Up Some Blue Drinks at Your 4th of July 
            div.align-item.gap-3.text-light.cursor-p
                img(src="/images/HomeIcons/humm.png")
                span Serve Up Some Blue Drinks at Your 4th of July 
            
            div.align-item.gap-3.text-light.cursor-p    
                img(src="/images/HomeIcons/delicious.png")
                span Serve Up Some Blue Drinks at Your 4th of July 
</template>

<script></script>

<style lang="scss">
.auto-line {
  overflow-x: hidden;
  .line-one,
  .line-two {
    padding: 16px 32px;
    position: relative;
    .line-contain {
      display: flex;
      div {
        width: 33.333%;
        text-align: center;
      }
    }
  }
  .line-one {
    border-top: 1px solid $main-color;
    .line-contain{
      animation: move-right 15s infinite linear;
    }
    
  }
  .line-two{
    background-color: $main-color;
    .line-contain{
      animation: move-left 15s infinite linear;
    }
  }

}
@keyframes move-right {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(80%);
  }
}
@keyframes move-left {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(-80%);
  }
}
</style>
