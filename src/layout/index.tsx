import Content from './Content'
import { theme } from 'antd'
import React from 'react'
import Header from './Header'
import LoadingFloatBtn from '@/views/components/LoadingFloatBtn'
import { CarpenterTwotone } from '@ricons/material'

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
      <LoadingFloatBtn
        tooltip="伐木"
        icon={<CarpenterTwotone />}
        loading
        style={{ right: '30px' }}
      />
    </div>
  )
}

export default Layout
