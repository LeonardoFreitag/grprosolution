'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { parseCookies } from 'nookies'
import { Provider } from './components/ui/provider'
import AppProvider from './hooks'
import { chekIsPlublicRoute } from '@/functions/CheckIsPublicRoute'
import './globals.css'
import { APP_ROUTES } from '@/app/Constants/app-routes'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const DynamicRootLayoutContent = dynamic(() => import('./RootLayoutContent'), {
  ssr: false,
})

function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathName = usePathname()
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const cookies = parseCookies()
    setToken(cookies['GRPro.token'])
  }, [])

  const isPublicPage = chekIsPlublicRoute(pathName)
  // console.log(`isPublicPage: ${isPublicPage}, pathName: ${pathName}`)

  const isAuthenticated = !!token
  // console.log(`isAuthenticated: ${isAuthenticated}`)

  // Redireciona para a página de login se a página não for pública e o usuário não estiver autenticado
  if (!isPublicPage && !isAuthenticated) {
    if (typeof window !== 'undefined') {
      window.location.href = APP_ROUTES.public.signIn
    }
    return null
  }

  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
        <AppProvider>
          <Provider>
            <Suspense fallback={<div>Carregando...</div>}>
              <DynamicRootLayoutContent>{children}</DynamicRootLayoutContent>
            </Suspense>
          </Provider>
        </AppProvider>
      </body>
    </html>
  )
}
