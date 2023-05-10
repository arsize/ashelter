import Content from './Content'
import { FloatButton, theme } from 'antd'
import React from 'react'
import Header from './Header'

const { useToken } = theme

const Layout: React.FC = () => {
  const { token } = useToken()
  return (
    <div
      style={{
        backgroundColor: token.colorBgLayout,
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header />
      <Content />
      <FloatButton.BackTop visibilityHeight={0} />
    </div>
  )
}

export default Layout
