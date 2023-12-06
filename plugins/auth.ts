export default defineNuxtPlugin((nuxtApp) => {
  // access cookie for auth
  const cookie_token = useCookie('token')

  nuxtApp.hook('gql:auth:init', ({ token, client }) => {
    // `client` can be used to differentiate logic on a per client basis.

    // apply client token
    token.value = cookie_token.value as string
  })
})