import { RouterProvider } from "react-router-dom"
import { routes } from "./router"
import { ConfigProvider, theme } from "antd"

import useThemeStore from "./store"
import { StyleProvider } from "@ant-design/cssinjs"

const App = () => {
  const { light } = useThemeStore()

  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: light ? theme.defaultAlgorithm : theme.darkAlgorithm,
          token: {
            colorPrimary: "#056de8",
            colorTextTertiary: "#8590a6",
          },
        }}
      >
        <RouterProvider router={routes} />
      </ConfigProvider>
    </StyleProvider>
  )
}

export default App
