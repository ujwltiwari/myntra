import { createStore } from 'zustand/vanilla'

export const initialState = {
  count: 0,
}

export const initCartStore = () => {
  return { count: new Date().getFullYear() }
}

export const createCartStore = (
  initState = initialState,
) => {
  return createStore()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }))
}
