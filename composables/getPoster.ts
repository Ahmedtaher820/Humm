export async function getPosters(){
    const getPosters = gql`
  query getPosters($lang:String){
  posters{
    translations(filter:{languages_code:{code:{_eq:$lang}}}){
      wide_url
      wide_title
      wide_cover{
        id
      }
      wide2_url
      wide2_title
      wide2_cover{
        id
      }
      normal_title
      normal_url
      normal_cover{
        id
      }
       normal2_title
       normal2_url
       normal2_cover{
         id
       }
     }
   }
 }
`
const posterVar = {lang:"ar-EG"}
const posters = usePosters()
  const {data} = await useAsyncQuery(getPosters,posterVar)
posters.value.push(data.value.posters.translations[0])
const post = posters.value[0]
const firstPoster = {
  wide1Cover:{id:post.wide_cover.id , title:post.wide_title , url:post.wide_url},
  wide2Cover:{id:post.wide2_cover.id , title:post.wide2_title , url:post.wide2_url},
  normal1Cover:{id:post.normal_cover.id , title:post.normal_title , url:post.normal_url},
  normal2Cover:{id:post.normal2_cover.id , title:post.normal2_title , url:post.normal2_url},
}
return {
    firstPoster
}
}