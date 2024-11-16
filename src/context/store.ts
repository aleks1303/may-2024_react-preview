import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand/react";

// createContext - функція яка передає інформацію на різних рівнях у компоненти
// параметризація під якийсь певний тип
// він являє собою сховище яке зберігає інформацію яку можна share або
// ділитись з будь-якими іншими компонентами на будь-яких інших рівнях
// відповідно його назва буде - StoreType

// це сховище і до його базових сегментів можна дотягнутися від усюди


type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers:(users:IUserModel[]) => void,
        setFavoriteUser: (obj:IUserModel)=> void,
        favoriteUser: IUserModel | null
    },
    postStore:{
        allPosts: IPostModel[],
        loadPosts:(posts:IPostModel[]) =>void,
        setFavoritePost:(obj:IPostModel)=>void,
        favoritePost:IPostModel | null
    }
}

export const useStore = create<StoreType>()(set =>({
    userStore: {
        allUsers:[],
        loadUsers:(users:IUserModel[]) => {
            return set((state)=>{
                console.log(state)
                let newState:StoreType = {
                    ...state,
                    userStore:{
                        ...state.userStore,
                        allUsers:users
                    }
                }

                console.log(newState)
                return newState
            })
        },
        setFavoriteUser: (obj:IUserModel)=> {
            return set((state)=>{
                return {
                    ...state,
                    userStore:{
                        ...state.userStore,
                        favoriteUser:obj
                    }
                }
            })
        },
        favoriteUser: null
    },
    postStore:{
    allPosts:[],
        loadPosts:(posts:IPostModel[]) => {
            return set((state)=>{
                console.log(state)
                let newState:StoreType = {
                    ...state,
                    postStore:{
                        ...state.postStore,
                        allPosts:posts
                    }
                }

                console.log(newState)
                return newState
            })
        },
        setFavoritePost: (obj:IPostModel)=> {
            return set((state)=>{
                return {
                    ...state,
                    postStore:{
                        ...state.postStore,
                        favoritePost:obj
                    }
                }
            })
        },
        favoritePost: null

    }
}));
