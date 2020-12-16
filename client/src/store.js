import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools(set => ({
    token: '',
    username: '',
    currentUser: '',
    setToken: (token) => set({ token }),
    setUsername: (username) => set({ username }),
    setCurrentUser: (currentUser) => set({ currentUser }),
})))
