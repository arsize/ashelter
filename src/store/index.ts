import { create } from 'zustand'

interface BearState {
  light: boolean
  change: () => void
}

const useThemeStore = create<BearState>((set) => ({
  light: true,
  change: () =>
    set((state) => ({
      light: !state.light,
    })),
}))

export default useThemeStore
