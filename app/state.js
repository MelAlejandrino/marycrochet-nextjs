import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      products: [],
      setProducts: (items) => set({ products: items }),
    }),
    {
      name: 'my-app-products',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)