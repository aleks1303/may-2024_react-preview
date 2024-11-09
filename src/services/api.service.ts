import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens";
import {IProduct} from "../models/IProduct";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});

const login = async ():Promise<IUserWithTokens> =>{
let {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30

    });
    localStorage.setItem('user', JSON.stringify(userWithTokens))
    return userWithTokens
}

const loadAuthProduct = async ():Promise<IProduct[]> => {

await axiosInstance.get<IProduct[]>('/products', {
    headers:{
        Authorization:'Bearer' +
    }
})
}


export {
login
}