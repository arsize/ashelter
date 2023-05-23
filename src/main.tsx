import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/styles/global.css'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
