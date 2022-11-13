<template lang="pug">
.container
    MainComponentSectionHeader(sectionTitle="علامات تجارية تعلن معنا" sectionLink="advertise" sectionBtnTxt="اعلن معنا")
    .row
        .col-lg-2.col-md-4.col-6.p-0(v-for="brand in brands")
            .brand-box
                img(:src="getImages(brand.directus_files_id.id)" alt="brand img")
</template>
<script lang="ts" setup>
type brandsTyp = {
    homepage_translations:[
        {
            brands_list:{
                directus_files_id:{id:string}
            }[]
        }
    ]
}
const brands = useBrands()
const queryy = gql`
query getBrand($limit:Int){
  homepage_translations(limit:$limit){
   brands_list{
    directus_files_id{
      id
    }
  }
  }
}
`
const variabl = {limit:1}
if(brands.value.length ===0){
    const {data} = await useAsyncQuery<brandsTyp>(queryy,variabl)
    if(data.value.homepage_translations[0].brands_list.length > 0){
        data.value.homepage_translations[0].brands_list.forEach((e)=>{
            brands.value.push(e)
        })
    }
}
console.log(brands.value)
</script>
<style lang="scss">
.brand-box{
    padding: 20px 0px ;
    border: 1px solid $main-color;
    height: 120px;
    @extend .center-items;
    img{
        width: 160%;
        height: 100%;
        object-fit: cover;
        transform: scale(.4);
    }
}
</style>
    