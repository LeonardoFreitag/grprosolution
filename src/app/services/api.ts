/* eslint-disable camelcase */
import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'

let isRefreshing = false
let faildQuestesQueue = [] as any[]

export function setupAPIClient(ctx = undefined) {
  // let cookies = parseCookies(ctx)

  const { 'GRPRo.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://grproapi.gestaorural.net',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response?.status === 433) {
        // if (error.response.data?.tokenExpired) {
        // cookies = parseCookies(ctx)

        const { 'GRPRo.refreshToken': refreshToken } = parseCookies(ctx)
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true
          // console.log(oldRefreshToken)
          api
            .post('/users/sessions/refreshToken', {
              refreshToken,
            })
            .then((response) => {
              const { token, refreshToken } = response.data

              console.log('NOVO TOKEN', token)

              setCookie(ctx, 'GRPRo.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              })
              setCookie(ctx, 'GRPRo.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              })

              api.defaults.headers.authorization = `Bearer ${token}`

              faildQuestesQueue.forEach((request) => request.onSucess(token))
              faildQuestesQueue = []
            })
            .catch((err) => {
              faildQuestesQueue.forEach((request) => request.onFailure(err))
              faildQuestesQueue = []

              if (process.browser) {
                // console.log('chamou signout por aqui');
              }
              // } else {
              //   return Promise.reject(new AuthTokenError());
              // }
            })
            .finally(() => {
              isRefreshing = false
            })
        }
        return new Promise((resolve, reject) => {
          faildQuestesQueue.push({
            onSucess: (token: string) => {
              // console.log('TOKEN NO ONSUCESS', token);
              api.defaults.headers.authorization = `Bearer ${token}`
              if (originalConfig) {
                originalConfig.headers.authorization = `Bearer ${token}`
                resolve(api(originalConfig))
              }
              // console.log(originalConfig.headers);
            },
            onFailure: (err: AxiosError) => {
              // console.log('TOKEN NO ONSUCESS', 'undefined');
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

export async function getServerSideProps() {
  return {
    props: {
      hostApi: process.env.NEXT_PUBLIC_HOSTNAME,
    },
  }
}
