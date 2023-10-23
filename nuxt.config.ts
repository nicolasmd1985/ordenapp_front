// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
    'nuxt-graphql-client'
  ],
  app:{
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        },
      ],
    },
  },
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: ["mdb-vue-ui-kit"],
  },
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],
  devtools: { enabled: true },
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    { path: '~/components/Landing' },
    '~/components'
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:3000/graphql' // overwritten by process.env.GQL_HOST
    }
  }

})
