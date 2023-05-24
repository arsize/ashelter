import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { G } from '@/config'

// 角色面板
type BaseHealth = {
  [k in HealthInfo]: number
}
type RoleState = BaseHealth & {
  recordTime: number
  change: (val: Partial<BaseHealth>) => void
  changeByTime: (obj: Partial<BaseHealth>, time: number) => void
  changeRecordTime: (time: number) => void
}

const useRoleStasStore = create<RoleState>()(
  persist(
    (set, get) => ({
      ...G.healthInfo.reduce((o, c) => {
        o[c.key] = c.default
        return o
      }, {} as BaseHealth),
      change: (obj) => set(obj),
      changeRecordTime: (time) =>
        set({
          recordTime: time,
        }),
      changeByTime: (obj, time) => {
        if (time - get().recordTime > G.refreshRate) {
          get().changeRecordTime(time)
          return set(obj)
        }
      },
      recordTime: new Date().getTime(),
    }),
    {
      name: 'health-storage',
      version: 2,
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useRoleStasStore
