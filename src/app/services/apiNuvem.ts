/* eslint-disable camelcase */
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import qs from 'qs'

let isRefreshing = false
let faildQuestesQueue = [] as any[]

export const setupAPIClient = (ctx = undefined) => {
  const data = qs.stringify({
    grant_type: 'client_credentials',
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    scope: process.env.NEXT_PUBLIC_SCOPE,
  })
  const config: AxiosRequestConfig = {
    url: process.env.NEXT_PUBLIC_AUTHENTICATE_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'access-control-allow-origin': '*',
    },
    data,
  }
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOSTNAME_NUVEM,

    data,
  })

  let cookies = parseCookies(ctx)

  const { 'NF.access_token': tokenFromCookie } = cookies

  if (!tokenFromCookie) {
    axios.request(config).then((response) => {
      const { access_token, expires_in } = response.data

      api.defaults.headers.authorization = `Bearer ${access_token}`
      setCookie(ctx, 'NF.token', access_token, {
        maxAge: expires_in,
        path: '/',
      })
      setCookie(ctx, 'NF.expires_in', expires_in, {
        maxAge: expires_in,
        path: '/',
      })
    })
  } else {
    api.defaults.headers.authorization = `Bearer ${tokenFromCookie}`
  }

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        cookies = parseCookies(ctx)

        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true
          axios
            .request(config)
            .then((response) => {
              const { access_token, expires_in } = response.data

              setCookie(ctx, 'NF.token', access_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              })
              setCookie(ctx, 'NF.expires_in', expires_in, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              })

              api.defaults.headers.authorization = `Bearer ${access_token}`

              faildQuestesQueue.forEach((request) =>
                request.onSucess(access_token),
              )
              faildQuestesQueue = []
            })
            .catch((err) => {
              faildQuestesQueue.forEach((request) => request.onFailure(err))
              faildQuestesQueue = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }
        return new Promise((resolve, reject) => {
          faildQuestesQueue.push({
            onSucess: (access_token: string) => {
              api.defaults.headers.authorization = `Bearer ${access_token}`
              if (originalConfig) {
                originalConfig.data.append('access_token', access_token)
                resolve(api(originalConfig))
              }
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            },
          })
        })
        // }
      }
      return Promise.reject(error)
    },
  )

  return api
}

export const apiNuvem = setupAPIClient

export async function getServerSideProps() {
  return {
    props: {
      hostApi: process.env.NEXT_PUBLIC_HOSTNAME,
      authenticateApi: process.env.NEXT_PUBLIC_AUTHENTICATE_API,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      authenticateUrl: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      scope: process.env.NEXT_PUBLIC_SCOPE,
    },
  }
}
