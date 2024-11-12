import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens";
import {IProduct} from "../models/IProduct";
import {retriveLocalStorage} from "../helpers/helpers";
import {IBaseResponseModel} from "../models/IBaseResponseModel";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com/auth',
    headers:{}
});

axiosInstance.interceptors.request.use(request => {
    console.log(request?.method?.toUpperCase());
    if (request?.method?.toUpperCase() === 'GET'){
        request.headers.Authorization = retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return request;
})

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

let {data} = await axiosInstance.get<IBaseResponseModel & { products:IProduct[] }>('/products', {
    // headers:{
    //     Authorization:'Bearer' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    // }
});
return data.products;
}
const refresh = async () =>{

    const IUserWithToken = retriveLocalStorage<IUserWithTokens>('user')
    const {data} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: IUserWithToken.refreshToken,
        expiresInMins: 1
    });
    IUserWithToken.refreshToken = data.refreshToken;
    IUserWithToken.accessToken = data.accessToken;

    localStorage.setItem('user', JSON.stringify(IUserWithToken))
}


export {
login, loadAuthProduct, refresh
}