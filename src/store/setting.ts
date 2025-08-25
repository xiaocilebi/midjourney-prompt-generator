import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SettingState = {
  model: string
}

type SettingActions = {
  update: (key: string, val: any) => void
}

export const useSettingStore = create<SettingState & SettingActions>()(
  persist(
    (set) => ({
      model: 'openai',
      update: (key, val) => set(() => ({ [key]: val })),
    }),
    {
      name: 'MJShowcaseSettings',
    },
  ),
)
