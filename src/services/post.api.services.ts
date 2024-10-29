


// цей сервіс для виклику постів


import axios, {AxiosResponse} from "axios";
import {IPost} from "../model/IPost";

// викликаємо бібліотеку axios
// функцію create
// передаємо базову url
// також викликаємо headers, які будують запит даних
// ці дані легетивні на будь-які запити які робимо з Json-pleaceholder
// але їх можна змінити
const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type": 'application/json'}
});

// тепер робимо запит на основі axiosInstance

const getPosts = ():Promise<AxiosResponse<IPost[]>> =>{
    return axiosInstance.get('/posts')
}

const getPostsOfUser = (userId:number):Promise<AxiosResponse<IPost[]>> =>{
    return axiosInstance.get('/posts?userId=' + userId)
}


const getPost = async (id:number): Promise<AxiosResponse<IPost>> =>{
    return await axiosInstance.get('/post/' + id)
}


export {
    getPosts,
    getPost,
    getPostsOfUser
}




















// const baseUrl = 'https://jsonplaceholder.typicode.com/users'
//
// const getUsers = ():Promise<IUser[]> =>{
//    //  повертаємо результат цього fetch
//    return  fetch(baseUrl)
//         .then((value) => value.json())
// //     другий then тут непотрібний
// //     працюємо з чистими даними
//
// }
// // якщо цей service буде працювати з users
// // тут можна викликати і інші методи і функції, які будуть викликати
//
// // наприклад
// // функцію яка буде діставати user по id
// const getUser = async (id:number):Promise<IUser> =>{
//     return await fetch( baseUrl + '/' + id)
//         .then((value) => value.json())
// }
//
// // експортуємо
// export {
//     getUsers,
//     getUser
// }




//пакуємо в різні змінні