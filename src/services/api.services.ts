import axios from "axios";
import {baseUrl, urls} from "../constants/urls.";
import {ICharacterResponse} from "../models/ICharacterResponce";


const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{}
});

const characterService = {
    getAll: async (page:string) =>{
        // console.log(page)
        // щоб передати сторінки на пагінацію
        // впроваджуємо params і передаємо через аргумент page
        const axiosResponse =
           await axiosInstance.get<ICharacterResponse>(urls.character.all,{
               params:{
                   page:page
               }
           });
        return axiosResponse
    }
}
export {
    characterService
}