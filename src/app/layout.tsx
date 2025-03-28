'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect, useContext } from 'react'
import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { parseCookies } from 'nookies'
import { Provider } from './components/ui/provider'
import AppProvider from './hooks'
import { chekIsPlublicRoute } from '@/functions/CheckIsPublicRoute'
import './globals.css'
import { APP_ROUTES } from '@/app/Constants/app-routes'
import { AuthContext } from './hooks/AuthContext'
import PageSpinner from './components/PageSpinner/PageSpinner'

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
  const { isLoading } = useContext(AuthContext)
  console.log('Layout - AuthContext:', useContext(AuthContext))


 // Exibe um carregamento enquanto o estado de autenticação está sendo verificado
 if (isLoading) {
  console.log('Layout - Carregando estado de autenticação...')
  return <div><PageSpinner /></div>
}



  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <body>
          <Provider>
        <AppProvider>
            {/* <Suspense fallback={<div><PageSpinner /></div>}> */}
              <DynamicRootLayoutContent>{children}</DynamicRootLayoutContent>
            {/* </Suspense> */}
        </AppProvider>
          </Provider>
      </body>
    </html>
  )
}
