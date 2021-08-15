import React from 'react'
import { CssBaseline } from '@material-ui/core'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <CssBaseline />
      { children }
    </div>
  )
}

export default Layout
