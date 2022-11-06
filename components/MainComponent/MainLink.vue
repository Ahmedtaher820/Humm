<template lang="pug">
div.know-more-btn
    <svg id="Component_10_1" class=".know-more-btn main-trans" data-name="Component 10 – 1" xmlns="http://www.w3.org/2000/svg" width="172" height="54" viewBox="0 0 172 54">
    <g id="Group_21388" data-name="Group 21388" transform="translate(-1438 -44)">
        <g id="Rectangle_2" data-name="Rectangle 2" transform="translate(1439 64)" fill="none" stroke="#000" stroke-width="1">
        <rect class="main-trans" width="171" height="34" stroke="none"/>
        <rect class="main-trans" x="0.5" y="0.5" width="170" height="33" fill="none"/>
        </g>
        <rect id="Rectangle_3604" data-name="Rectangle 3604" width="171" height="47" transform="translate(1438 44)" fill="#fff"/>
        <text id="Know_more" data-name="Know more" transform="translate(1462 61)" font-size="18" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="19">Know more</tspan></text>
    </g>
    <path id="Path_35325" data-name="Path 35325" d="M21.49,19.092H8.59v3.29h12.9L18.481,25.39l2.326,2.328,6.981-6.981-6.981-6.981-2.326,2.328Z" transform="translate(117.807 9.892)"/>
    </svg>

</template>

<script setup>
defineProps({
    isShowSection:{
        type:Boolean,
        default:false
    }
})
</script>

<style lang="scss">
.know-more-btn{
    cursor: pointer;
    
    &:hover #Component_10_1{
        height: 50px !important;
    }
}
</style>