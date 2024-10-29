import IUser from "../model/IUser";
import axios, {AxiosResponse} from "axios";

// викликаємо бібліотеку axios
// функцію create
// передаємо базову url
// також викликаємо headers, які будують запит даних
// ці дані легетивні на будь-які запити які робимо з Json-pleaceholder
// але їх можна змінити
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": 'application/json'}
});

// branch: interceptors (перехопник) - він може змінити базовий header і передати його

axiosInstance.interceptors.request.use(interceptedRequest => {
    console.log(interceptedRequest)
    // // додаємо до header
    interceptedRequest.headers.login = 'foo'
    interceptedRequest.headers.password = 'bar'

    // передача токена до login and password
    interceptedRequest.headers.token = /*headers*/'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        /*корисне навантаження*/'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.' +
        /*варіфікаційний підпис*/'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    return interceptedRequest
})


// тепер робимо запит на основі axiosInstance

const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance('/users')
}

const getUser = async (id: number): Promise<AxiosResponse<IUser>> => {
    return await axiosInstance('/users/' + id)
}

export {
    getUsers,
    getUser
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