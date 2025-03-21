import React from 'react'

interface RootLayoutContentProps {
  children: React.ReactNode
}

const RootLayoutContent: React.FC<RootLayoutContentProps> = ({ children }) => {
  return <>{children}</>
}

export default RootLayoutContent
