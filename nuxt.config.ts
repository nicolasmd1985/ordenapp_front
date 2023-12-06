// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
    'nuxt-graphql-client',
    'nuxt-icon'
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
  plugins: [
    { src: '@/plugins/aos', mode: 'client' },
    { src: '@/plugins/onError', mode: 'client' },
  ],
  devtools: { enabled: true },
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    { path: '~/components/Admin' },
    { path: '~/components/Landing' },
    '~/components'
  ],
  'graphql-client': {
    tokenStorage: {
      name: '__session',
      mode: 'cookie', // default
      cookieOptions: {
        path: '/',
        secure: false, // defaults to `process.env.NODE_ENV === 'production'`
        httpOnly: false, // Only accessible via HTTP(S)
        maxAge: 60 * 60 * 24 * 5 // 5 days
      }
    },
    clients: {
      default: {
        // required
        host: 'http://localhost:3000/graphql',
      },

    }
  }


});
