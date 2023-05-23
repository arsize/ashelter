import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// 用户相关信息
interface UserState {
  isFirstOpen: boolean //是否第一次进来
  change: (val: boolean) => void
}

const useMyStore = create<UserState>()(
  persist(
    (set) => ({
      isFirstOpen: true,
      change: (val: boolean) => {
        set({
          isFirstOpen: val,
        })
      },
    }),
    {
      name: 'user-info',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useMyStore
