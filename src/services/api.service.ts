import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUserContactModel} from "../models/IUserContactModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{"content-type": "application/json"}
});

const userApiService = {
getAllUsers: () :Promise<AxiosResponse<IUserContactModel []>> => {
    return axiosInstance.get<IUserContactModel[]>(urls.users.allusers);
    },
    getUserById:(id:string):Promise<AxiosResponse<IUserContactModel>> =>{
    return axiosInstance.get <IUserContactModel>(urls.users.byId(id));
    }
}

export {
    userApiService
}