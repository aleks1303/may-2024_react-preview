
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";

// createContext - функція яка передає інформацію на різних рівнях у компоненти
// параметризація під якийсь певний тип
// він являє собою сховище яке зберігає інформацію яку можна share або
// ділитись з будь-якими іншими компонентами на будь-яких інших рівнях
// відповідно його назва буде - StoreType

// це сховище і до його базових сегментів можна дотягнутися від усюди


type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (obj:IUserModel)=> void,
    },
    postStore:{
        allPosts: IPostModel[]
    }
}

const defaultValue: StoreType = {
    userStore: {
        allUsers:[],
        setFavoriteUser: ()=> {},
    },
    postStore:{
        allPosts:[]
    }
}
export const MyContext = createContext<StoreType>(defaultValue);

export const useContextProvider = ():StoreType => useContext(MyContext);
