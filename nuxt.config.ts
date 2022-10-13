// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head(){
        return{
            titleTemplate: `$s - Humm Page`,
            meta:[
                {
                    charset:'utf-8'
                },
                {
                    name:'viewport' , content:'width=device-width, initial-scale=1.0'
                },
                {
                    hid:"description",
                    name:"description",
                    content:"Food Blogs Website"
                }
            ]
        }
    },
    css:[
        'bootstrap/dist/css/bootstrap.min.css',
        '@/assets/css/style.css'
    ],
    script:[
        {src: 'bootstrap/dist/js/bootstrap.bundle.min.js'}
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/scss/global.scss" as *;',
                },
            },
        },
    },
})
