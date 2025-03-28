import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { AuthProvider } from './AuthContext'


export default function AppProvider({ children }: { children: React.ReactNode }) {
  console.log('AppProvider montado')
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}