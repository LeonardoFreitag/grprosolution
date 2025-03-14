import React, { ReactNode } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd'
import { AuthProvider } from './AuthContext'

type Props = {
  children: ReactNode
}

const AppProvider: React.FC<Props> = ({ children }: Props) => (
  // <DndProvider backend={HTML5Backend}>
  <AuthProvider>{children}</AuthProvider>
  // </DndProvider>
)

export default AppProvider
