import { create } from 'zustand';

export const useStore = create((set) => ({
  products: [],
  setProducts: (items) => set({ products: items }),
}));
