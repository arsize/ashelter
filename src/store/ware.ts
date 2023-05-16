import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// 采集资源缓存
interface WareState {
  wood: number //木材
  stone: number //石头
  iron: number //铁
  copper: number //铜
  silver: number //银
  gold: number //金
  oil: number //石油
  crystal: number //水晶
  core: number //机械核心
  gunpowder: number //火药
  addWood: (val: number) => void
}

const useWareStore = create<WareState>()(
  persist(
    (set, get) => ({
      wood: 0,
      stone: 0,
      iron: 0,
      copper: 0,
      silver: 0,
      gold: 0,
      oil: 0,
      crystal: 0,
      core: 0,
      gunpowder: 0,
      addWood: (val: number) =>
        set({
          wood: get().wood + val,
        }),
    }),
    {
      name: 'ware-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useWareStore
