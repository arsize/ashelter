import { create } from 'zustand'

// 角色面板
interface RoleState {
  life: number //生命值
  hunger: number //饥饿值
  thirsty: number //口渴值
  endurance: number //耐力值
  temperature: number //体温值
  san: number //精神值

  change: () => void
}

const useRoleStasStore = create<RoleState>((set) => ({
  life: 100,
  hunger: 100,
  thirsty: 100,
  endurance: 100,
  temperature: 100,
  san: 100,
  change: () =>
    set((state) => ({
      life: state.life,
    })),
}))

export default useRoleStasStore
