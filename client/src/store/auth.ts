import create from 'zustand'

type Tauth = {
    isLogin : boolean
    role : string
    updateInfoAuth : (newIsLogin: boolean, newRole: string) => void
}

export const useAuthStore = create<Tauth>((set)=>({
    isLogin: false,
    role: "",
    updateInfoAuth: (newIsLogion: boolean, newRole: string) => set({
        isLogin: newIsLogion,
        role: newRole
    })
}))
