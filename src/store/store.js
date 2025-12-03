import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  pokemons: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  
  setPokemons: (pokemons, info) => set({ 
    pokemons,
    totalPages: info?.pages || 1
  }),
  
  setCurrentPage: (page) => set({ currentPage: page }),
  setIsLoading: (loading) => set({ isLoading: loading })
}));