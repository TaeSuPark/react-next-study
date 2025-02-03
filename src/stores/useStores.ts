import { create } from "zustand"

export type DataStoreType = {
  str: string
  num: number
  setStr: (v: string) => void
  setNum: (v: number) => void
  increment: () => void
  decrement: () => void
}

export const useDataStore = create<DataStoreType>((set) => {
  return {
    str: "str",
    num: 0,
    setStr: (v: string) => set({ str: v }),
    setNum: (v: number) => set({ num: v }),
    increment: () => set((state) => ({ num: state.num + 1 })),
    decrement: () => set((state) => ({ num: state.num - 1 })),
  }
})
