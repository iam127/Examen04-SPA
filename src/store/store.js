import { create } from 'zustand';

export const usePostStore = create((set) => ({
  posts: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  
  setPosts: (posts, info) => set({ 
    posts,
    totalPages: info?.pages || 1
  }),
  
  setCurrentPage: (page) => set({ currentPage: page }),
  setIsLoading: (loading) => set({ isLoading: loading })
}));