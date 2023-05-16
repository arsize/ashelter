import { RouterProvider } from 'react-router-dom'
import { routes } from './router'
import { ConfigProvider, theme, message } from 'antd'

import useThemeStore from './store'
import { StyleProvider } from '@ant-design/cssinjs'
import { useEffect } from 'react'
import useMyStore from './store/userInfo'

const App = () => {
  const { light } = useThemeStore()
  const [msg, contextHolder] = message.useMessage()
  const userInfo = useMyStore()

  useEffect(() => {
    if (userInfo.isFirstOpen) {
      msg.info('欢迎来到末日求生!')
      userInfo.change(false)
    }
  }, [])

  return (
    <>
      {contextHolder}
      <StyleProvider hashPriority="high">
        <ConfigProvider
          theme={{
            algorithm: light ? theme.defaultAlgorithm : theme.darkAlgorithm,
            token: {
              colorPrimary: '#056de8',
              colorTextTertiary: '#8590a6',
            },
          }}
        >
          <RouterProvider router={routes} />
        </ConfigProvider>
      </StyleProvider>
    </>
  )
}

export default App
