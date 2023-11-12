import { isValidElement } from 'react'
import create from 'zustand'

type UserType = {
    _id: string
    role : string
    username : string
    fullname : string
    dob : Date
    address : string
    email : string
    phoneNumber : string
    createdAt : Date
}

type Tauth = {
    isLogin : boolean
    userInfo : UserType
}

type Action = {
    updateInfo : (userInfo: Tauth["userInfo"],isLogin: boolean) => void
}

export const useAuthStore = create<Tauth & Action>((set)=>({
    isLogin : false,
    userInfo : {
        _id: "",
        role : "",
        username : "",
        fullname : "",
        dob : new Date(Date.now()),
        address : "",
        email : "",
        phoneNumber : "",
        createdAt : new Date(Date.now())
    },
    updateInfo: (userInfo,isLogin) => set(()=>({userInfo:userInfo,isLogin:isLogin}))
}))
