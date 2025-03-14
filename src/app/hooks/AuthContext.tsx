'use client'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
// import { useToast } from '@chakra-ui/react';
import api from '../services/apiClient'
import { IUser, UserAuthModel } from '../Models/UserAuthModel'

type SignInCredentials = {
  email: string
  password: string
}

type ForgotPasswordData = {
  email: string
}

type AuthContextData = {
  changeUser: (user: UserAuthModel) => void
  changeTokens: (token: string, refreshToken: string) => void
  signIn: (credentials: SignInCredentials) => Promise<boolean>
  signOut: () => void
  forgotPassword: (data: ForgotPasswordData) => Promise<boolean>
  user: UserAuthModel | undefined
  isAuthenticated: boolean
  loadProfile: () => void
  recoveryDataUser: () => string
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

let authChanell: BroadcastChannel

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<UserAuthModel>()
  const isAuthenticated = !!user

  function changeTokens(token: string, refreshToken: string) {
    setUser({
      user: user?.user || ({} as IUser),
      token,
      refreshToken,
    })
    api.defaults.headers.authorization = `Bearer ${token}`
  }

  function changeUser(user: UserAuthModel) {
    setUser(user)
    api.defaults.headers.authorization = `Bearer ${user.token}`
  }

  useEffect(() => {
    authChanell = new BroadcastChannel('auth')

    authChanell.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut()
          authChanell.close()
          break
        // case 'signIn':
        //   Router.push('/dashboard');
        //   break;
        default:
          break
      }
    }
  }, [])

  const loadProfile = useCallback(() => {
    const { 'GRPro.token': token } = parseCookies()
    const { 'GRPro.refreshToken': refreshToken } = parseCookies()
    const { 'GRPro.user': dataUser } = parseCookies()

    if (dataUser) {
      const userParsed = JSON.parse(dataUser)

      const newUser: UserAuthModel = {
        user: userParsed,
        token,
        refreshToken,
      }
      // console.log('localuser', newUser);
      setUser(newUser)
      api.defaults.headers.authorization = `Bearer ${token}`
    }

    if (token) {
      api
        .get('/users/profile')
        .then((response) => {
          // console.log('profile', response.data.user);
          setUser(response.data)
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  useEffect(() => {
    loadProfile()
  }, [])

  function recoveryDataUser(): string {
    const { 'GRPro.user': localUser } = parseCookies()
    const userParsed: UserAuthModel = JSON.parse(localUser)
    setUser(userParsed)

    return userParsed.user.customerId
  }

  async function signIn({
    email,
    password,
  }: SignInCredentials): Promise<boolean> {
    console.log(email, password)
    try {
      const response = await api.post<UserAuthModel>('/users/sessions', {
        email,
        password,
      })

      // const { user, refreshToken, token, permissions, roles } = response.data;

      setCookie(undefined, 'GRPro.token', response.data.token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })
      setCookie(undefined, 'GRPro.refreshToken', response.data.refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setCookie(undefined, 'GRPro.user', JSON.stringify(response.data.user), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setUser({
        user: response.data.user,
        token: response.data.token,
        refreshToken: response.data.refreshToken,
      })

      api.defaults.headers.authorization = `Bearer ${response.data.token}`

      return true
    } catch (error) {
      // console.log(error);
      return false
    }
  }

  async function forgotPassword({ email }: ForgotPasswordData): Promise<boolean> {
    try {
      await api.post('/users/password/forgot', { email })
      return true
    } catch (error) {
      // console.log(error);
      return false
    }
  }

  async function signOut() {
    destroyCookie(null, 'GRPro.token', { path: '/' })
    destroyCookie(null, 'GRPro.refreshToken', { path: '/' })
    destroyCookie(null, 'GRPro.user', { path: '/' })

    await router.push('/Institutional/SignIn')
  }
  return (
    <AuthContext.Provider
      value={{
        forgotPassword,
        recoveryDataUser,
        loadProfile,
        changeUser,
        changeTokens,
        signIn,
        signOut,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
