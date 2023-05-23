import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { G } from '@/config'

// 角色面板
type BaseHealth = {
  [k in HealthInfo]: number
}
type RoleState = BaseHealth & {
  change: (val: number) => void
}

const useRoleStasStore = create<RoleState>()(
  persist(
    (set) => ({
      ...G.healthInfo.reduce((o, c) => {
        o[c.key] = c.default
        return o
      }, {} as BaseHealth),
      change: (val) =>
        set({
          life: val,
        }),
    }),
    {
      name: 'health-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useRoleStasStore
