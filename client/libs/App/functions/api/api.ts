// Types
import type { AxiosInstance } from 'axios'

// Config
import { Api } from '~/libs/App/functions/api/generatedSwaggerApi'
import { utilsConfig } from '$utilsConfig'

const swaggerApiInstance = new Api()

const axiosInstance = swaggerApiInstance.instance
export const aresApi = swaggerApiInstance

export function initializeApi(nuxtApp: any) {
  // Set base URL
  const apiBaseUrl = utilsConfig.aresBaseUrl
  axiosInstance.defaults.baseURL = apiBaseUrl

  useInterceptors(axiosInstance, nuxtApp)
}

function useInterceptors(instance: AxiosInstance, nuxtApp: any) {
  instance.interceptors.request.use(
    config => {
      // @ts-expect-error
      config._requestData = config.data
      config.headers = config.headers || {}

      config.headers['Accept-Language'] = 'cs-CZ'

      return config
    },
    error => {
      return Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    response => {
      return response
    },
    async error => {
      const originalConfig = error.config

      if (
        (error.response?.status === 401)
        && !originalConfig._retry
        && !originalConfig.url.toLowerCase().endsWith('login/refresh')
      ) {
        // TODO 401 error handling
      }

      return Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    response => {
      // Extract just the data property from the response
      if (response.data && typeof response.data === 'object') {
        return response.data
      }
      return response
    },
    async error => {
      const originalConfig = error.config

      if (
        (error.response?.status === 401)
        && !originalConfig._retry
        && !originalConfig.url.toLowerCase().endsWith('login/refresh')
      ) {
        // TODO 401 error handling
      }

      return Promise.reject(error)
    },
  )
}

export function initializeAxios(nuxtApp: any) {
  swaggerApiInstance.instance.defaults.baseURL = utilsConfig.aresBaseUrl
  useInterceptors(swaggerApiInstance.instance, nuxtApp)
}
