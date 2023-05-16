import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// 环境信息缓存
interface EnvState {
  weather: string //天气
  humidity: string //湿度
  rainfall: string //降雨
  wind: string //风速
  temperature: string //温度
  disaster: string //随机灾难
  season: string //季节
  light: string //光线明暗
}

const useEnvStore = create<EnvState>()(
  persist(
    (set, get) => ({
      weather: '晴',
      humidity: '80%',
      rainfall: '90%',
      wind: '大风',
      temperature: '30℃',
      disaster: '10%',
      season: '夏',
      light: '暗',
    }),
    {
      name: 'env-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useEnvStore
