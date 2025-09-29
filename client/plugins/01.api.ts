import { initializeApi } from '~/libs/App/functions/api/api'

export default defineNuxtPlugin(nuxtApp => {
  initializeApi(nuxtApp)
})
